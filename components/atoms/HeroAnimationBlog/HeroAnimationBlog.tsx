import Lottie from "lottie-react";
import animationData from "./HeroAnimationData";
import { WrapperAnimation } from "../HeroAnimation/HeroAnimation";

function HeroAnimation() {
  return (
    <>
      <WrapperAnimation>
        <Lottie loop={false} autoPlay={true} animationData={animationData} />
      </WrapperAnimation>
    </>
  );
}

export default HeroAnimation;
