import { connectDB, Product } from "../../../mongoose-db";

export async function POST(request) {
   try {
      await connectDB();

      const body = await request.json();
      const { title, price, description } = body;

      const newProduct = new Product({
         title,
         price: parseInt(price),
         description,
      });

      const savedProduct = await newProduct.save();

      return new Response(JSON.stringify(savedProduct), {
         status: 201,
         headers: { "Content-Type": "application/json" },
      });
   } catch (error) {
      console.error("Error saving product:", error);
      return new Response(JSON.stringify({ error: "Failed to save product" }), {
         status: 500,
      });
   }
}
