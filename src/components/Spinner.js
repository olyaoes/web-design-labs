import React from "react";
import { Hearts } from "react-loader-spinner";

const SpinnerHeart = () => {
  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Зробити контейнер повноекранним
    backgroundColor: "#f9f9f9", // Світлий фон (опціонально)
  };

  return (
    <div style={spinnerStyle}>
      <Hearts
        height="100"
        width="100"
        color="#FF8DA1"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
};

export default SpinnerHeart;

