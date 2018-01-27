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
  Model,
  VrButton
} from "react-vr";

const Tree = props => {
  return (
    <View style={props.style}>

      <Sphere
        lit
        style={{
          color: "green",
          transform: [{ translateY: 0.8 }]
        }}
        onEnter={() => {console.log('onEnter')}}
        onMove={(event) => {
          console.log('onMove', event.nativeEvent)
        }}
      />
      <Cylinder lit style={{ color: "brown" }} radiusBottom={0.05} radiusTop={0.05} />
    </View>
  );
};

export default class vr_app extends React.Component {
  render() {
    return (
      <View>
      <VrButton
      onClick={() => { console.log('clicked')}}
      style={{
        layoutOrigin: [0.5, 0.5],
        transform: [{ translate: [0, 0, -1] }],
        backgroundColor: 'blue',
        padding: 0.01
      }}
      >
        <Text>update</Text>
      </VrButton>
        <Tree style={{ transform: [{translateZ: -3}] }} />
        <Tree style={{ transform: [{translateZ: -3}, {translateX: 1.1}] }} />
        <Tree style={{ transform: [{translateZ: -3}, {translateX: -1.1}] }} />
        <DirectionalLight
          intensity={4.5}
          style={{
            transform: [{ translateX: -1000 }]
          }}
        />
        <AmbientLight intensity={0.4} />
      </View>
    );
  }
}

AppRegistry.registerComponent("vr_app", () => vr_app);
