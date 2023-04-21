import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

const getVans = async () => {
  const response = await instance.get("/api/host/vans");
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
  ImageUrl: "";
};

const HostVans = () => {
  const [vans, setVans] = useState<Vans[]>([]);

  useEffect(() => {
    getVans().then((vans) => setVans(vans));
  }, []);

  const hostVanElement = vans.map((van) => (
    <Link
      key={van.id}
      to={`/host/vans/${van.id}`}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single">
        <img src={van.ImageUrl} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVanElement}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
