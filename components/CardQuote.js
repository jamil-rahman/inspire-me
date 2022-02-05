import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';

function CardQuote({quote, author}) {
  return (
    <View style={styles.container}>
       <Card containerStyle={{ marginTop: 15 }}>
          <Text style={styles.fonts} h1>
            {quote}
          </Text>
          <Text style={styles.fonts}>{author}</Text>
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
    marginBottom: 8,
  }
});

export default CardQuote;
