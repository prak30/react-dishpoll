import React, { useState, useEffect } from "react";

const Results = () => {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const rank1 = data.filter(
      (item) => item.id === JSON.parse(localStorage.getItem("rank1"))
    );

    const rank2 = data.filter(
      (item) => item.id === JSON.parse(localStorage.getItem("rank2"))
    );

    const rank3 = data.filter(
      (item) => item.id === JSON.parse(localStorage.getItem("rank3"))
    );
    setFirst(rank1);
    setSecond(rank2);
    setThird(rank3);
  }, [data]);

  return (
    <div>
      <h1>Results</h1>
      {first.length > 0 ? (
        <div>
          <label className="me-4">{first[0].dishName}</label>
          30 Points
        </div>
      ) : null}
      {second.length > 0 ? (
        <div>
          <label className="me-4">{second[0].dishName}</label>
          20 Points
        </div>
      ) : null}
      {third.length > 0 ? (
        <div>
          <label className="me-4">{third[0].dishName}</label>
          10 Points
        </div>
      ) : null}
    </div>
  );
};

export default Results;
