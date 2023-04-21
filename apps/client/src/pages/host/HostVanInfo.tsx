import React from "react";
import { useOutletContext } from "react-router-dom";

type Van = {
  id: number;
  price: number;
  name: string;
  description: string;
  type: string;
  hostId: number;
  ImageUrl: "";
};

const HostVanInfo = () => {
  const { currentVan } = useOutletContext<{ currentVan: Van }>();
  return (
    <section className="host-van-detail-info">
      <h4>Name: {currentVan.name}</h4>
      <h4>Category: {currentVan.type}</h4>
      <h4>Description: {currentVan.description}</h4>
    </section>
  );
};

export default HostVanInfo;
