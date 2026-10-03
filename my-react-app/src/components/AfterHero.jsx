import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AfterHero({ children }) {
  const root = useRef(null);

  useEffect(() => {
    let disposed = false;
    let timer;
    const refresh = () => {
      if (disposed) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!disposed) ScrollTrigger.refresh();
      }, 120);
    };
    const section = root.current;
    section.addEventListener("load", refresh, true);
    section.addEventListener("toggle", refresh, true);
    document.fonts.ready.then(refresh);
    refresh();
    return () => {
      disposed = true;
      clearTimeout(timer);
      section.removeEventListener("load", refresh, true);
      section.removeEventListener("toggle", refresh, true);
    };
  }, []);

  return <div className="after-hero" ref={root}>{children}</div>;
}
