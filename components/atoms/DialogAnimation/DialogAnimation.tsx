import Lottie from "lottie-react";
import dialogAnimation from "./DialogAnimationData";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const WrapperAnimation = styled.div`
  margin: -2em auto 0 auto;
  width: 100%;
  position: absolute;
  top: 0;
  max-height: 100%;
`;

function DialogAnimation({ animationActive }: { animationActive: boolean }) {
  const lottieRef = useRef<any>();

  useEffect(() => {
    if (!lottieRef) return;
    if (!lottieRef.current) return;

    if (!animationActive) {
      lottieRef.current.stop();
    } else {
      lottieRef.current.play();
    }
  }, [animationActive]);

  return (
    <>
      <WrapperAnimation>
        <Lottie
          animationData={dialogAnimation}
          autoPlay={false}
          lottieRef={lottieRef}
          loop={false}
        />
      </WrapperAnimation>
    </>
  );
}

export default DialogAnimation;
