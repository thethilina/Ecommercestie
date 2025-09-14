import Stripe from "stripe"
import { stripe } from "@/lib/stripe"
import ProductList from "@/components/productlist"

export default async function products(){

 const products = await stripe.products.list (
    {
      expand: ["data.default_price"],
      limit:5 ,
    }
  )
  
return(
  <>
  
  <ProductList products = {products.data} />
  </>  
)


}