import React from 'react';
import tw from 'tailwind-react-native-classnames'
import {Text, StyleSheet} from 'react-native'
function Header({title}) {
  return (
      <>
        <Text style={tw`font-medium italic text-2xl underline text-center`}>{title}</Text>
      </>
  );
}

export default Header;
