import React from "react";

const Card = (props) => {
  console.log(props.data);
  // console.log(props.data[1].dishName);
  return (
    <div className="d-flex flex-wrap mx-5 px-2 ">
      {props.data.length > 0
        ? props.data.map((item) => (
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="fooimg" />
              <div className="card-body">
                <h5 className="card-title">{item.dishName}</h5>
                <p className="card-text">{item.description}</p>
                <button type="button" className="btn btn-primary btn-sm">
                  1
                </button>
                <button type="button" className="btn btn-primary btn-sm mx-2">
                  2
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  3
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Card;
