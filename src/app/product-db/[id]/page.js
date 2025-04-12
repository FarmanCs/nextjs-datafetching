import { getProduct } from "../../../mongoose-actions";
import ProductEditForm from "./product-edit-form";
import { notFound } from "next/navigation";

export default async function EditProductPage({ params }) {
   const { id } = params;

   const product = await getProduct(id); // id is a mongoose string (_id)

   if (!product) {
      notFound();
   }

   return <ProductEditForm product={product} />;
}
