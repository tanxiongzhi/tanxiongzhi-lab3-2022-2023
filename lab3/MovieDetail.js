import * as React from "react";
import { View, Text, Image } from "react-native";

function MovieDetail({ route }) {
  const { name, cover, desc, year } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Image
        source={cover}
        resizeMode="contain"
        style={{
          width: 184,
          height: 278,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          padding: 10,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: '#666'
        }}
      >
        {year}
      </Text>
      <View style={{
        // marginTop: 20,
        padding: 20
      }}>
        <Text style={{
          color: '#666'
        }}>{desc}</Text>
      </View>
    </View>
  );
}

export default MovieDetail;
