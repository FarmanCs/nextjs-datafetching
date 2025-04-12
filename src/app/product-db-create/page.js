'use client';

import { useActionState } from 'react';
import { createProduct } from '../actions/page';
import { Submit } from '../../components/submit';

export default function AddProductPage() {
   const initialState = {
      errors: {},
   };

   const [state, formAction] = useActionState(createProduct, initialState);

   return (
      <form action={formAction} className="p-4 space-y-4 max-w-96 bg-transparent-50">
         <div>
            <label className="text-white">
               Title
               <input
                  type="text"
                  className="block w-full p-2 text-black border rounded bg-amber-100"
                  name="title"
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
                  className="block w-full p-2 text-black border rounded bg-amber-100"
                  name="price"
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
                  className="block w-full p-2 text-black border rounded bg-amber-100"
                  name="description"
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
