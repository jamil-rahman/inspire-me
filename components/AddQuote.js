import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import Header from "./Header";


function AddQuote() {
  const [quoteText, onChangeQuote] = useState("");
  const [authorText, onChangeAuthor] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal visible={modalOpen} animationType="slide">
        <View style={tw`p-16 bg-gray-100`}>
          <Header title="Add your own Quote" />
        </View>

        <View style={tw`flex-row items-center`}></View>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeQuote}
            value={quoteText}
            placeholder={"Enter your own quote"}
            multiline={true}
          /> 
          <TextInput
          style={styles.authorInput}
          onChangeText={onChangeAuthor}
          value={authorText}
          placeholder={"Enter your own quote"}
          multiline={true}
        />

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
      
    </>
  );
}

export default AddQuote;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  input: {
    height: 120,
    justifyContent: "center",
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    fontSize: 20,
    borderRadius: 25/2
  },
  header: {
    justifyContent: "center",
  },
  authorInput:{
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    height: 60,
    padding: 20,
    fontSize: 20,
    borderRadius: 25/2
  }
});
