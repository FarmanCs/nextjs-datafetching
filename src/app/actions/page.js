'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { Product, connectDB } from "../../mongoose-db";
export async function createProduct(prevState, formData) {
   await connectDB();

   const title = formData.get('title');
   const price = formData.get('price');
   const description = formData.get('description');

   const errors = {};

   if (!title) {
      errors.title = 'Title is required';
   }

   if (!price) {
      errors.price = 'Price is required';
   }

   if (!description) {
      errors.description = 'Description is required';
   }

   if (Object.keys(errors).length > 0) {
      return { errors };
   }

   await Product.create({
      title,
      price: parseFloat(price),
      description,
   });

   redirect('/product-db');
}

export async function editProduct(id, prevState, formData) {
   await connectDB();

   const title = formData.get('title');
   const price = formData.get('price');
   const description = formData.get('description');

   const errors = {};

   if (!title) {
      errors.title = 'Title is required';
   }

   if (!price) {
      errors.price = 'Price is required';
   }

   if (!description) {
      errors.description = 'Description is required';
   }

   if (Object.keys(errors).length > 0) {
      return { errors };
   }

   await Product.findByIdAndUpdate(id, {
      title,
      price: parseFloat(price),
      description,
   });

   redirect('/product-db');
}

export async function removeProduct(id) {
   await connectDB();

   await Product.findByIdAndDelete(id);
   revalidatePath('/product-db');
}
