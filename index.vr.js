import React from "react";
import { AppRegistry, asset, Pano, Text, View, Image } from "react-vr";

export default class vr_app extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("chess-world.jpg")} />
        <View
          style={{
            width: 2,
            height: 2.4,
            backgroundColor: "#FBF0E5",
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3] }],
            justifyContent: "space-between"
          }}
        >
          <Image source={asset("Pusheen.jpg")} style={{ height: 1.2 }} />
          <Text
            style={{
              color: "#333",
              fontSize: 0.16,
              textAlign: "center"
            }}
          >
            sentient vr meow!
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={asset("Pusheen.jpg")}
              style={{
                width: 0.5,
                height: 0.5
              }}
            />
            <Image
            source={asset("Pusheen.jpg")}
            style={{
              width: 0.5,
              height: 0.5
            }}
          />
          <Image
          source={asset("Pusheen.jpg")}
          style={{
            width: 0.5,
            height: 0.5
          }}
        />
        <Image
        source={asset("Pusheen.jpg")}
        style={{
          width: 0.5,
          height: 0.5
        }}
      />
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("vr_app", () => vr_app);
