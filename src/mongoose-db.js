// mongoose-db.js
import mongoose from 'mongoose';

const connectDB = async () => {
   if (mongoose.connections[0].readyState) return;

   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/Nextjs-demo', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
   } catch (error) {
      console.error('MongoDB connection error:', error);
   }
};

const productSchema = new mongoose.Schema({
   title: String,
   price: Number,
   description: String,
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export { connectDB, Product };
