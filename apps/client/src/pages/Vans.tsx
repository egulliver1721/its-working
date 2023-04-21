import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

const getVans = async () => {
  const response = await instance.get("/api/vans");
  console.log(response.data);
  return response.data;
};

type Vans = {
  id: number;
  price: number;
  name: string;
  description: string;
  type: string;
  hostId: number;
};

const Vans = () => {
  const [vans, setVans] = useState<Vans[]>([]);

  useEffect(() => {
    getVans().then((vans) => setVans(vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
