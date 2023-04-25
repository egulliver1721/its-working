import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
});

type Van = {
  id: number;
  price: number;
  name: string;
  description: string;
  type: string;
  hostId: number;
  ImageUrl: "";
};

const HostVanDetails = () => {
  const [loading, setLoading] = useState(false);
  const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState<Van>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    type: "",
    hostId: 0,
    ImageUrl: "",
  });

  useEffect(() => {
    setLoading(true);
    instance
      .get(`api/host/vans/${id}`)
      .then((response) => {
        setCurrentVan(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.ImageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            end
            to="."
            style={({
              isActive,
            }: {
              isActive: boolean;
            }): React.CSSProperties | undefined =>
              isActive ? activeStyle : undefined
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({
              isActive,
            }: {
              isActive: boolean;
            }): React.CSSProperties | undefined =>
              isActive ? activeStyle : undefined
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({
              isActive,
            }: {
              isActive: boolean;
            }): React.CSSProperties | undefined =>
              isActive ? activeStyle : undefined
            }
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetails;
