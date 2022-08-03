import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>DISHPOLL APP</h1>
      <img
        src="https://media.istockphoto.com/photos/health-food-for-fitness-picture-id855098134"
        alt="foodpic"
        width="500"
        height="300"
      />
      <h2>Ready to vote??</h2>
      <button
        onClick={() => {
          navigate("/voting");
        }}
      >
        VOTE
      </button>

      <button
        onClick={() => {
          navigate("/result");
        }}
      >
        RESULT
      </button>
    </div>
  );
};

export default Home;
