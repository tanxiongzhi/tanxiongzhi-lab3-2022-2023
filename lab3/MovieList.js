import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function MovieList({ navigation }) {
  const movieList = [
    {
      name: "Avatar",
      cover: require("./assets/Avatar.jpg"),
      year: 2015,
      desc:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    },
    {
      name: "Avengers",
      cover: require("./assets/Avengers.jpg"),
      year: 2012,
      desc:
        "Endgame：After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    },
    {
      name: "Titanic",
      cover: require("./assets/Titanic.jpg"),
      year: 2005,
      desc:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    },
    {
      name: "Star Wars",
      cover: require("./assets/Star.jpg"),
      year: 2011,
      desc:
        "As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.",
    },
    {
      name: "Jurassic World",
      cover: require("./assets/Jurassic.jpg"),
      year: 2021,
      desc:
        "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, the Indominus Rex, which escapes containment and goes on a killing spree.",
    },
    {
      name: "Furious 7",
      cover: require("./assets/Furious7.jpg"),
      year: 2005,
      desc:
        "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#FFF",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {movieList.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MovieDetail", item);
            }}
            key={index}
            style={{
              borderColor: "#ddd",
              borderWidth: 1,
              borderRadius: 5,
              overflow: "hidden",
              flexDirection: "row",
              width: "45%",
            }}
          >
            <Image
              source={item.cover}
              resizeMode="contain"
              style={{
                width: 50,
                height: 75,
                marginRight: 10,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#666",
                  padding: 10,
                }}
              >
                {item.year}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MovieList;
