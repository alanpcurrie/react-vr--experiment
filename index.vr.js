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
  SpotLight
} from "react-vr";

export default class vr_app extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight
          intensity={2}
          style={{
            color: "white"
          }}
        />
        <DirectionalLight
          intensity={4.5}
          style={{
            translateX: -1000
          }}
        />
        <PointLight
          intensity={30}
          style={{
            transform: [{ translateZ: -5}]
          }}
          distance={2}
          decay={2}
        />
        <SpotLight
        intensity={1}
        style={{
          transform: [{ translateZ: -5}]
        }}
        distance={2}
        decay={2}
        angle={4} 
      />
        <Sphere
          style={{
            color: "#CC6456",
            transform: [{ translate: [-1.5, 0, -4] }]
          }}
          lit
          texture={asset("mars.jpg")}
          heightSegments={30}
          widthSegments={30}
          radius={0.5}
        />
        <Box
          wireframe
          dimWidth={0.5}
          dimHeight={0.5}
          dimDepth={0.5}
          style={{
            color: "#FF00FF",
            transform: [{ translate: [-1.5, 0, -8] }]
          }}
        />
        <Cylinder
          wireframe
          radiusBottom={0.35}
          radiusTop={0}
          dimHeight={0.6}
          segments={4}
          style={{
            color: "#ADFF2F",
            transform: [{ translate: [1, 0, -4] }]
          }}
        />
        <Plane
          wireframe
          dimHeight={0.5}
          dimWidth={0.5}
          segments={4}
          style={{
            color: "#FFFF00",
            transform: [{ translate: [2, 0, -4] }]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("vr_app", () => vr_app);
