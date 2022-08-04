import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const VotingPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const submitHandler = () => {
    navigate("/result");
  };

  const handle1 = (e) => {
    if (e !== second && e !== third) {
      localStorage.setItem("rank1", e);
      setFirst(e);
    }
  };
  const handle2 = (e) => {
    if (e !== first && e !== third) {
      localStorage.setItem("rank2", e);
      setSecond(e);
    }
  };
  const handle3 = (e) => {
    if (e !== second && e !== first) {
      localStorage.setItem("rank3", e);
      setThird(e);
    }
  };

  console.log(data);

  return (
    <div>
      <h1>Choose top 3 favourites</h1>
      {first !== null && second !== null && third !== null ? (
        <button onClick={submitHandler}>SUBMIT</button>
      ) : (
        <Card
          data={data}
          first={first}
          second={second}
          third={third}
          handle1={handle1}
          handle2={handle2}
          handle3={handle3}
        />
      )}
    </div>
  );
};

export default VotingPage;
