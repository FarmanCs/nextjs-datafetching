import { getProducts } from "../../mongoose-actions"; // ⬅️ Make sure this fetches data using Mongoose
import { ProductDetail } from "./product-detail";

export default async function ProductsPage({ searchParams }) {
   const { query } = searchParams || {};

   const products = await getProducts(query); // Should return an array of product documents

   // console.log("products detail: ", products);


   return <ProductDetail products={products} />;
}
