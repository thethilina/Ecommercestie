'use client'
import Stripe from "stripe";
import { useCartStore } from "@/store/cart-store";


export default function ProductDetails({product}){

const { items, addItem, removeItem } = useCartStore();
const price = product.default_price;
const cartItem = items.find((item) => item.id === product.id);
const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount ,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };


return(
<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center"   >

{product.images && product.images[0] && (

<div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">

<img alt = {product.name} src= {product.images[0] }  className="object-cover fill-accent"/> 

</div>
)} 

<div className="md:w-1/2">

<h1 className="text-3xl font-bold mb-4">{product.name}</h1>
{product.description && <p className="text-gray-700 mb-4"> {product.description} </p>}
<h1  className="text-lg font-semibold text-gray-900 mb-5">{product.default_price.unit_amount} {product.default_price.currency.toUpperCase()}</h1>

 <div className="flex items-center space-x-4">
          <button  onClick={() => removeItem(product.id)} className="px-3 py-1 bg-neutral-200 border-gray-800 rounded-lg hover:cursor-pointer hover:bg-neutral-300 border-1">
            –
          </button>
           <span className="text-lg font-semibold">{quantity}</span>
          <button  onClick={onAddItem}  className="px-3 py-1 bg-gray-900 text-white border-gray-800 rounded-lg hover:cursor-pointer hover:bg-gray-700 border-1">+</button>
        </div>



</div>






</div>


)

}