import Lottie from "lottie-react";
import React from "react";
import animationData from "./ContactAnimationData";
import styled from "styled-components";

const WrapperAnimation = styled.div`
  max-width: 150px;
  margin: 0 auto;
`;

export const ContactAnimation = () => {
  return (
    <>
      <WrapperAnimation>
        <Lottie loop={false} autoPlay={true} animationData={animationData} />
      </WrapperAnimation>
    </>
  );
};
