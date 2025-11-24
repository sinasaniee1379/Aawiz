import { twMerge } from "tailwind-merge";
import { IProduct } from "./types";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingCart } from "iconsax-reactjs";

const Cart = ({ image, price, title }: IProduct) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <div
      className="
      group rounded-md p-2 col-span-2 relative lg:col-span-2 
      overflow-hidden shadow-lg 
      bg-white dark:bg-gray-800 
      transition-all
    ">
      {/* Image */}
      <div
        className="
        min-h-[120px] border-b 
        flex items-center justify-center p-4 relative
        border-gray-200 dark:border-gray-700
      ">
        <Image
          width={132}
          height={104}
          className="w-[132px] h-[104px] object-contain"
          alt={title}
          src={image}
        />
      </div>

      {/* Content */}
      <div className="mt-2">
        <h3 className="truncate group-hover:text-primary dark:text-white">
          {title}
        </h3>

        <div className="flex items-end justify-between mt-2">
          <div>
            <p className="line-through text-gray-400 dark:text-gray-500 text-[10px] lg:text-sm">
              $ {price}
            </p>
            <p className="text-lg text-black dark:text-white">
              $ {price * 0.5}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Action */}
      <div
        className="
          absolute 
          bg-white dark:bg-gray-800 
          bottom-[-60px] left-0 
          w-full flex justify-between px-3 py-2 
          transition-all duration-500 opacity-0
          group-hover:bottom-2 group-hover:opacity-100 
          items-center shadow-md dark:shadow-none
        ">
        {/* Add to cart */}
        <button
          className="
          flex items-center gap-1 
          border border-blue-400 
          text-blue-500 
          rounded-lg px-3 py-1 text-sm
          dark:border-blue-300 dark:text-blue-300
        ">
          <ShoppingCart
            size={24}
            variant="Linear"
            className="stroke-primary dark:stroke-blue-300"
          />
          Add to cart
        </button>

        {/* Like / Heart */}
        <Heart
          size={24}
          onClick={() => setIsLike(!isLike)}
          variant="Bold"
          className={twMerge(
            `
              stroke-primary text-transparent hover:text-primary 
              dark:stroke-blue-300 dark:hover:text-blue-300
            `,
            isLike && "text-primary dark:text-blue-300"
          )}
        />
      </div>
    </div>
  );
};

export default Cart;
