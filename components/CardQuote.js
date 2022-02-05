import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

function CardQuote(props) {
  return (
    <View style={styles.container}>
       <Card containerStyle={{ marginTop: 15, padding: 20 }}>
          <Text style={styles.fonts} h1>
            {props.quote}
          </Text>
          <Text style={styles.fonts}>{props.author}</Text>
          <Card.Divider />
          <View style={tw`flex-row items-center justify-between`}>
            <Icon name='heart'
              type='font-awesome'
              color='#000'
            />
            <Icon name='heart'
              type='font-awesome'
              color='#000'
            />

          </View>
        </Card>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 15,
    textAlign: 'center',
  }
  // options:{
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // }
});

export default CardQuote;
