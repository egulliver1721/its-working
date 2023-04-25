import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
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
  ImageUrl: string;
};

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState<Vans[]>([]);

  useEffect(() => {
    getVans().then((vans) => setVans(vans));
  }, []);

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.ImageUrl} />
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

  function handleFilterChange(key: string, value: string | "") {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <button
        onClick={() => handleFilterChange("type", "simple")}
        className={`van-type simple ${
          typeFilter === "simple" ? "selected" : ""
        }`}
      >
        Simple
      </button>
      <button
        onClick={() => handleFilterChange("type", "luxury")}
        className={`van-type luxury ${
          typeFilter === "luxury" ? "selected" : ""
        }`}
      >
        Luxury
      </button>
      <button
        onClick={() => handleFilterChange("type", "rugged")}
        className={`van-type rugged ${
          typeFilter === "rugged" ? "selected" : ""
        }`}
      >
        Rugged
      </button>
      {typeFilter && (
        <button
          className="van-type clear-filters"
          onClick={() => handleFilterChange("type", "")}
        >
          Clear
        </button>
      )}
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
