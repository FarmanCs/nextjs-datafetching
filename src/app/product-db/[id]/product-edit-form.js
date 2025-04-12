"use client";

import { useActionState } from "react";
import { editProduct } from "../../actions/page";
import { Submit } from "../../../components/submit";

export default function ProductEditForm({ product }) {
   const initialState = {
      errors: {},
   };

   const editProductWithId = editProduct.bind(null, product._id); // Mongoose uses _id

   const [state, formAction] = useActionState(editProductWithId, initialState);

   return (
      <form action={formAction} className="p-4 space-y-4 max-w-96 bg-black/40 backdrop-blur rounded-lg shadow-lg">
         <div>
            <label className="text-white">
               Title
               <input
                  type="text"
                  name="title"
                  defaultValue={product.title}
                  className="block w-full p-2 bg-white text-blue-600 border rounded"
               />
            </label>
            {state.errors?.title && (
               <p className="text-red-500">{state.errors.title}</p>
            )}
         </div>

         <div>
            <label className="text-white">
               Price
               <input
                  type="number"
                  name="price"
                  defaultValue={product.price}
                  className="block w-full p-2 bg-white text-blue-600 border rounded"
               />
            </label>
            {state.errors?.price && (
               <p className="text-red-500">{state.errors.price}</p>
            )}
         </div>

         <div>
            <label className="text-white">
               Description
               <textarea
                  name="description"
                  defaultValue={product.description || ""}
                  className="block w-full p-2 bg-white text-blue-600 border rounded"
               />
            </label>
            {state.errors?.description && (
               <p className="text-red-500">{state.errors.description}</p>
            )}
         </div>

         <Submit />
      </form>
   );
}
