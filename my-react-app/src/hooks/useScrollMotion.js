import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Each section owns its animations. matchMedia reverts them on resize,
// preference changes, route changes, and React StrictMode remounts.
export default function useScrollMotion(scope, setup) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 1000px) and (min-height: 700px)",
        motion: "(prefers-reduced-motion: no-preference)",
        finePointer: "(hover: hover) and (pointer: fine)",
      },
      (context) => {
        if (!context.conditions.motion) return;
        return setup(context.conditions);
      },
      scope,
    );
    return () => media.revert();
  }, [scope, setup]);
}
