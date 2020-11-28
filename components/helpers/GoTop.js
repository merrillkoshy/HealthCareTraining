import React, { useEffect, useState } from "react";
const GoTop = props => {
  const [intervalId, setIntervalId] = useState(0);
  const [thePosition, setThePosition] = useState(false);
  const [_isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
      } else {
        setThePosition(false);
      }
    });
    window.scrollTo(0, 0);
    return () => {
      setMounted(false);
    };
  });

  const onScrollStep = () => {
    setMounted(true);
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    setMounted(true);
    let intervalId = setInterval(onScrollStep(), props.delayInMs);
    setIntervalId(intervalId);
  };

  const renderGoTopIcon = () => {
    if (thePosition) {
      return (
        <div className="back-to-top show-back-to-top" onClick={scrollToTop()}>
          TOP
        </div>
      );
    }
  };

  return <>{renderGoTopIcon()}</>;
};

export default GoTop;
