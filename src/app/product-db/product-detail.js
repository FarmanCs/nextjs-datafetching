"use client";

import { useOptimistic } from "react";
import { removeProduct } from "../actions/page"; //  Ensure this uses Mongoose to delete
import Link from "next/link";
import Form from "next/form";



export const ProductDetail = ({ products }) => {
   const [optimisticProducts, setOptimisticProducts] = useOptimistic(
      products,
      (currentProducts, productId) => {
         return currentProducts.filter((product) => product._id !== productId);
      }
   );

   const removeProductById = async (productId) => {
      setOptimisticProducts(productId);
      await removeProduct(productId); // Should use Mongoose `findByIdAndDelete`
   };

   return (
      <ul className="space-y-4 p-4">
         {optimisticProducts.map((product) => (
            <li
               key={product._id}
               className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
               <h2 className="text-xl font-semibold">
                  <Link href={`/product-db/${product._id}`}>{product.title}</Link>
               </h2>
               <p>{product.description}</p>
               <p className="text-lg font-medium">${product.price}</p>

               <Form
                  action={() => removeProductById(product._id)}
                  // In JS, we're using a basic form but action callbacks don’t work directly. JS handles it via `onClick`.
                  onSubmit={(e) => {
                     e.preventDefault();
                     removeProductById(product._id);
                  }}
               >
                  <button
                     type="submit"
                     className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                     Delete
                  </button>
               </Form>
            </li>
         ))}
      </ul>
   );
};
