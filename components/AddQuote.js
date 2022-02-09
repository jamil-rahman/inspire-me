import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
  Platform,
  AlertIOS,
} from "react-native";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AddQuote() {
  const [quoteText, onChangeQuote] = useState("");
  const [authorText, onChangeAuthor] = useState("");
  const [modalOpen, setModalOpen] = useState(false);



  const notifyMessage = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(message);
    }
  };


  const saveQuote = async () => {
    const quote = {myQuote: quoteText, myAuthor: authorText};

    AsyncStorage.getItem("myquote").then((quotes) => {
      quotes = quotes == null ? [] : JSON.parse(quotes);
      quotes.push(quote);
      notifyMessage('Quote Saved!');
      return AsyncStorage.setItem("myquote", JSON.stringify(quotes));
    });
    console.log(quote);
   onChangeAuthor("");
   onChangeQuote("");

  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView >
      <Modal visible={modalOpen} animationType="slide">
        <View style={tw`p-16 bg-gray-100`}>
          <Header title="Add your own Quote" />
        </View>

        <View style={tw`bg-gray-100 flex-1`}>
         
         {/* Textbox for quote */}
          <TextInput
            style={styles.input}
            onChangeText={onChangeQuote}
            value={quoteText}
            placeholder={"Enter your own quote"}
            multiline={true}
          />
          {/* Textbox for Author */}
          <TextInput
            style={styles.authorInput}
            onChangeText={onChangeAuthor}
            value={authorText}
            placeholder={"Enter author name"}
            multiline={true}
            autoCapitalize="sentences"
          />

          {/* Save Button */}
          <TouchableOpacity style={styles.button}
          onPress={saveQuote}
          >
            <Text style={tw`text-center text-white text-xl`}>Submit</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={tw`bg-white py-3 m-3 border-2 rounded-full border-black`}
          onPress={() => setModalOpen(false)}
        >
          <Text style={tw`text-center text-black text-xl`}>Go Back</Text>
        </TouchableOpacity>
      </Modal>

      <View style={tw`mt-auto border-gray-200`}>
        <TouchableOpacity
          style={tw`bg-white py-3 m-3 border-2 rounded-full border-black`}
          onPress={() => setModalOpen(true)}
        >
          <Text style={tw`text-center text-black text-xl`}>Add your Quote</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </ SafeAreaView>
  );
}

export default AddQuote;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: "#f7fafc"
  },
  input: {
    height: 180,
    justifyContent: "center",
    borderWidth: 2,
    marginLeft: 20,
    marginTop: 5,
    marginRight: 20,
    padding: 20,
    fontSize: 20,
    borderRadius: 25 / 2,
  },
  header: {
    justifyContent: "center",
  },
  authorInput: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    height: 60,
    padding: 20,
    fontSize: 20,
    borderRadius: 25 / 2,
  },
  button: {
    marginTop: 100,
    backgroundColor: "black",
    margin: 3,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50 / 2,
  },
});
