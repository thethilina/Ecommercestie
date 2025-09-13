"use client";

import { useEffect, useState } from "react";

export default function Carousel({ products }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [products.length]);

  const currentProduct = products[current];
  const price = currentProduct?.default_price;

  return (
    <div
  className="flex rounded h-100 py-8 sm:py-12 bg-cover bg-center relative w-full justify-center items-center border-2"
  style={{
    backgroundImage: `url(${currentProduct?.images?.[0]})`,
  }}
>
 
  <div className="absolute inset-0 bg-black/30 rounded"></div>


  <div className="relative z-10 text-white p-4 text-xl flex flex-col justify-center items-center shadow   rounded-3xl">
    <h3 className="text-2xl font-semibold">{currentProduct.name}</h3>
    {price && (
      <p className="mt-2">
        {(price.unit_amount / 100).toFixed(2)}{" "}
        {price.currency.toUpperCase()}
      </p>
    )}
  </div>
</div>

  );
}
