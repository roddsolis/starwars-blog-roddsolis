import React from "react";
import { Context } from "../store/appContext.js";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../../styles/home.css";

const StarShips = ({ vehicle }) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [imageSource, setImageSource] = useState(
    `https://starwars-visualguide.com/assets/img/starships/${vehicle.result.uid}.jpg`
  );

  function handleImageError() {
    // Código para manejar el error de carga de la imagen
    setImageSource(
      "https://npr.brightspotcdn.com/dims4/default/ce6acf0/2147483647/strip/true/crop/4603x3452+0+0/resize/1760x1320!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fimages%2Fnews%2Fnpr%2F%5Bcurrent-date%3Acustom%3AY%5D%2F%5Bcurrent-date%3Acustom%3Am%5D%2F530042773_354855539.jpg"
    );
  }

  const handleDetails = (id) => {
    actions.detailVehicle(id);
    navigate("/starships-details");
  };

  return (
    <div className="text-center">
      <div className="card  m-2" style={{ width: "18rem" }}>
        <img
          src={imageSource}
          onError={handleImageError}
          className="card-img-top"
          style={{ height: "18rem", objectFit: "cover", borderRadius: "5px" }}
          alt="..."
        />
        <div className="card-body" style={{ height: "16rem" }}>
          <h5 className="card-title">{vehicle.result.properties.name}</h5>

          <div>
            <p className="card-text">
              <span>Model:</span>
              {vehicle.result.properties.model}
            </p>
            <p className="card-text">
              <span>Manufacturer:</span>
              {vehicle.result.properties.manufacturer}{" "}
            </p>
            <p className="card-text">
              <span>Passengers:</span>
              {vehicle.result.properties.passengers}{" "}
            </p>
          </div>

          <button
            onClick={() => handleDetails(vehicle.result.uid)}
            className="btn btn-warning m-3"
          >
            Details
          </button>

          <button
            href="#"
            className="btn btn-warning m-3 "
            onClick={() => {
              actions.setFavoritesVehicles(vehicle);
            }}
          >
            <strong>♥</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StarShips;
