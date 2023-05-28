import React from "react";
import animationData from "./HeroAnimationData";
import styled from "styled-components";
import Lottie from "lottie-react";

export const WrapperAnimation = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  max-height: 100%;
`;

function HeroAnim() {
  return (
    <>
      <WrapperAnimation>
        <Lottie
          tabIndex={-1}
          loop={false}
          autoPlay={true}
          animationData={animationData}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
      </WrapperAnimation>
    </>
  );
}

export default HeroAnim;
