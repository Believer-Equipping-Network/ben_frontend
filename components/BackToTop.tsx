import React from "react";
import BackToTopButton from "react-back-to-top-button";
import { FaChevronCircleUp } from "react-icons/fa";

const BackToTop = () => {
  return (
    <BackToTopButton speed={500} easing="easeInOutQuint">
      <FaChevronCircleUp className="text-red-600" />
    </BackToTopButton>
  );
};

export default BackToTop;
