import { connectDB, Product } from './mongoose-db';

export const getProducts = async (query) => {
   await connectDB();
   await new Promise((res) => setTimeout(res, 1500));
   if (query) {
      return Product.find({
         $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
         ]
      });
   }
   return Product.find();
};

export const getProduct = async (id) => {
   await connectDB();
   await new Promise((res) => setTimeout(res, 1500));
   return Product.findById(id);
};

export const addProduct = async (title, price, description) => {
   await connectDB();
   await new Promise((res) => setTimeout(res, 1000));
   const newProduct = new Product({ title, price, description });
   return newProduct.save();
};

export const updateProduct = async (id, title, price, description) => {
   await connectDB();
   await new Promise((res) => setTimeout(res, 1000));
   return Product.findByIdAndUpdate(id, { title, price, description }, { new: true });
};

export const deleteProduct = async (id) => {
   await connectDB();
   await new Promise((res) => setTimeout(res, 1000));
   return Product.findByIdAndDelete(id);
};
