import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useLocation } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});

type Vans = {
  id: string;
  name: string;
  description: string;
  price: string;
  type: string;
  ImageUrl: string;
};

const VanDetails = () => {
  const location = useLocation();
  const { id } = useParams<Vans>();
  const [van, setVan] = useState<Vans>({
    id: "",
    name: "",
    description: "",
    price: "",
    type: "",
    ImageUrl: "",
  });

  useEffect(() => {
    instance
      .get(`api/vans/${id}`)
      .then((response) => {
        setVan(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img className="van-detail-image" src={van.ImageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
