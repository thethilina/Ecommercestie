import { stripe } from "@/lib/stripe";
import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }) {
    const { id } = await params; 

    const product = await stripe.products.retrieve(id, {
        expand: ["default_price"],
    });

    return <ProductDetails product={product} />;
}
