'use client'

import Stripe from "stripe";
import ProductCard from "./productcard";
import { useState } from "react";

export default function ProductList ({products}){

const [searchText , setSearchtext] = useState('');

const search = products.filter((product)=>{

const term = searchText.toLowerCase();
const nameMatch = product.name.toLowerCase().includes(term);
const desMatch = product.description ? product.description.toLowerCase().includes(term) : false;

return nameMatch || desMatch;

});

return(
<div>
<h1 className="flex  justify-center text-3xl font-bold py-3 ">All products</h1>
<div className="py-3 flex    justify-center">
    
    <input value={searchText} onChange={(e)=>{setSearchtext(e.target.value)}} type ="text" placeholder="Search products....." className="border-blue-500 border-2 text-xl py-1 px-2 rounded-xl" />
</div>

<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
            place-items-center gap-6 py-5">


{search.map((product)=>(


<ProductCard key={product.id} product={product}  />


))}


    
</ul>


</div>
    
)



}