import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import React, { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const {data:images, loading} = useFetchGifs(category);

  // console.log(loading);
  // console.log(data);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

    { loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}></GifGridItem>
        ))}
      </div>

    </>
  );
};
