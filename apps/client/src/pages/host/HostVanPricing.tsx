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
const HostVanPricing = () => {
  const { currentVan } = useOutletContext<{ currentVan: Van }>();
  return (
    <h3 className="host-van-price">
      ${currentVan.price}
      <span>/day</span>
    </h3>
  );
};

export default HostVanPricing;
