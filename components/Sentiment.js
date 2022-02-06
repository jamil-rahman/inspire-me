import React from "react";
import { Text } from "react-native";


function Sentiment(props) {
  if (props.sentimentValue < 0) {
    return (
      <>
        <Text>Negative 😤</Text>
      </>
    );
  }
  return (
    <>
      <Text>Positive 😃</Text>
    </>
  );
}

export default Sentiment;
