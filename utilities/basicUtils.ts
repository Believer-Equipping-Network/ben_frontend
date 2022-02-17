import { useLayoutEffect, useState } from "react";

export function getWindowDimensions() {
  const [size, setSize] = useState([0, 0]);

  //   Setting up a listener to get when window is resized
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return {
    width: size[0],
    height: size[1],
  };
}
