"use client";
import { useGetProductsQuery } from "@/api";
import Cart from "@/components/Cart";
import Skeleton from "@/components/Skeleton";
import { IProduct } from "@/components/types";
import React from "react";

const mockData = Array.from({ length: 8 });
const Dashboard = () => {
  const { data, isPending } = useGetProductsQuery();
  const products: IProduct[] = data;

  return (
    <div
      className="
        grid grid-cols-4 gap-4 lg:grid-cols-8 
        px-[5%] mt-20 mb-10 
        text-black dark:text-white
      ">
      {isPending
        ? mockData.map((_, index) => (
            <Skeleton
              key={index}
              className="
                col-span-2 w-full h-[186px]
                bg-gray-200 dark:bg-gray-700
              "
            />
          ))
        : products?.map((item) => (
            <Cart
              id={item.id}
              image={item.image}
              price={item.price}
              rating={item.rating}
              title={item.title}
              key={item.id}
            />
          ))}
    </div>
  );
};

export default Dashboard;
