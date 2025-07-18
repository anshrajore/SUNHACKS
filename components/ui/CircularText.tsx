import { useEffect } from "react";
import { motion, useAnimation, useMotionValue, Transition } from "framer-motion";
import type { ReactNode } from "react";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "speedUp" | "slowDown" | "pause" | "goBonkers";
  className?: string;
}

type RotationTransition = {
  from: number;
  to: number;
  ease: "linear";
  duration: number;
  type: "tween";
  repeat: number;
};

export const getRotationTransition = (duration: number, from: number, loop = true): RotationTransition => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

export const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}: CircularTextProps): ReactNode => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start) as Transition,
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;
    let transitionConfig: Transition | undefined;
    let scaleVal = 1;
    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start) as Transition;
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start) as Transition;
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        } as unknown as Transition;
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start) as Transition;
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start) as Transition;
    }
    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start) as Transition,
    });
  };

  return (
    <motion.div
      className={`circular-text ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;
        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;

// CSS as string for now (will move to file next)
export const circularTextCss = `
.circular-text {
  margin: 0 auto;
  border-radius: 50%;
  width: 200px;
  position: relative;
  height: 200px;
  font-weight: bold;
  color: #fff;
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
}
.circular-text span {
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 24px;
  transition: all 0.5s cubic-bezier(0, 0, 0, 1);
}
`; 