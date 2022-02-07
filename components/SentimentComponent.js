import React from "react";
import { Text } from "react-native";


function SentimentComponent(props) {
  if (props.sentimentValue < 0) {
    return (
      <>
        <Text>Negative 😤</Text>
      </>
    );
  }
  else if (props.sentimentValue == 0) {
    return (
      <>
        <Text>Neutral 😐</Text>
      </>
    )
  }
  return (
    <>
      <Text>Positive 😃</Text>
    </>
  );
}

export default SentimentComponent;
