// seed.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/Nextjs-demo'; // 👈 Replace 'your-db-name' with your DB name

const connectDB = async () => {
   try {
      await mongoose.connect(MONGODB_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
   } catch (err) {
      console.error(' MongoDB connection error:', err);
      process.exit(1);
   }
};

const productSchema = new mongoose.Schema({
   title: String,
   price: Number,
   description: String,
});

const Product = mongoose.model('Product', productSchema);

const seedProducts = async () => {
   await connectDB();

   const count = await Product.countDocuments();
   if (count === 0) {
      await Product.insertMany([
         { title: "Product 1", price: 500, description: "Description 1" },
         { title: "Product 2", price: 700, description: "Description 2" },
         { title: "Product 3", price: 1000, description: "Description 3" },
         { title: "Product 4", price: 1500, description: "Description 4" },
         { title: "Product 5", price: 1300, description: "Description 5" },
      ]);
      console.log("🌱 Seeded products to DB");
   } else {
      console.log("ℹ️ Products already exist. No seeding needed.");
   }

   mongoose.connection.close();
   process.exit();
};

seedProducts();
