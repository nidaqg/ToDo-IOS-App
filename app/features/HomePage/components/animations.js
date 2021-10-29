import React, { useRef, useEffect } from "react";
// import { Animated } from "react-native";
import { createAnimatableComponent} from 'react-native-animatable';
import {View} from 'react-native';


export const FlipInView = ({...props }) => {
const AnimatableView = createAnimatableComponent(View)


  return (
    <>
    <AnimatableView
    animation="flipInX"
    easing="linear"
    >
      {props.children}

    </AnimatableView>

    </>
  )
}
