import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  PointLight,
  Sphere,
  Box,
  Cylinder,
  Plane,
  AmbientLight,
  DirectionalLight,
  SpotLight,
  Model
} from "react-vr";

export default class vr_app extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset("Kung_fu.obj")
          }}
          style={{
            transform: [{ translate: [0, -1, -2] }],
            color: 'orange'
          }}
          lit
        />
        <DirectionalLight
          intensity={4.5}
          style={{
            translateX: -1000
          }}
        />
        <AmbientLight
        intensity={0.1}
      />
      </View>
    );
  }
}

AppRegistry.registerComponent("vr_app", () => vr_app);
