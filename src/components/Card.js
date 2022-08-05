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
                <button
                  style={{
                    background: item.id === props.first ? "blue" : "red",
                  }}
                  type="button"
                  className="btn btn-sm"
                  onClick={() => props.handle1(item.id)}
                >
                  1
                </button>
                <button
                  style={{
                    background: item.id === props.second ? "blue" : "red",
                  }}
                  type="button"
                  className="btn btn-sm mx-2"
                  onClick={() => props.handle2(item.id)}
                >
                  2
                </button>
                <button
                  style={{
                    background: item.id === props.third ? "blue" : "red",
                  }}
                  type="button"
                  className="btn  btn-sm"
                  onClick={() => props.handle3(item.id)}
                >
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
