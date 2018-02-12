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
  VrButton,
  Animated,


} from "react-vr";

const AnimatedBox = Animated.createAnimatedComponent(Box); 

export default class vr_app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0)
    }
  }
  componentDidMount() {
    Animated.timing(this.state.rotation, {
      toValue: 930,
      duration: 10000
    }).start();
  }

  render() {
    return (
      <View>
        <AnimatedBox
          lit
          dimWidth={2}
          dimHeight={2}
          dimDepth={2}
          style={{
            transform: [
              { translate: [0, 0, -10 ]},
              {rotateY: this.state.rotation},
              {rotateX: -40}
            ],
            layoutOrigin: [0.2, 0.2]
          }}
          />
        <DirectionalLight
          intensity={4.5}
          style={{
            transform: [{ translateX: -1000 }]
          }}
        />
        <AmbientLight intensity={0.5} />
      </View>
    );
  }
}

AppRegistry.registerComponent("vr_app", () => vr_app);
