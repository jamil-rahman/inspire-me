import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';

function CardQuote(props) {
  return (
    <View style={styles.container}>
       <Card containerStyle={{ marginTop: 15, padding: 20 }}>
          <Text style={styles.fonts} h1>
            {props.quote}
          </Text>
          <Text style={styles.fonts}>{props.author}</Text>
          <Card.Divider />
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
    textAlign: 'center'
  }
});

export default CardQuote;
