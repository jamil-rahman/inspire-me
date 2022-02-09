import React, {useState} from "react";
import tw from "tailwind-react-native-classnames";
import {View, TouchableOpacity, Text, Modal, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements';
import Header from "./Header";
function AddQuote() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <Modal visible={modalOpen} animationType='fade'>
    <Header title={'Add your own Quote'}/>
        <View style={styles.modalContent}>
          <Icon
            name='close'
            size={24} 
            style={{...styles.modalToggle, ...styles.modalClose}} 
            onPress={() => setModalOpen(false)} 
          />
          <Text style={tw`text-center justify-center`}>Hi mom!</Text>
        </View>
      </Modal>
    <View style={tw`mt-auto border-gray-200`}>
      <TouchableOpacity style={tw`bg-white py-3 m-3 border-2 rounded-full border-black`}
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
  modalToggle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});