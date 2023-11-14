import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Characters = () => {
  const { store, actions } = useContext(Context);

  console.log(store);

  return (
    <>
      <ul className="d-flex">
        {store?.map((character, index) => {
          <li key={index}>
            <div className="col-12">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="http://picsum.photos/100/70"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </li>;
        })}
      </ul>
    </>
  );
};
