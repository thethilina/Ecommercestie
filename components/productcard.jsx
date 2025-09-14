import Link from "next/link"

export default function ProductCard ({product}) {



    return(

    <Link href = "/product/1" className="bg-neutral-200 w-60 pb-4 hover:shadow-2xs">

    <div>

    <img src={product.images[0]}  alt={product.name} className="object-cover w-60 h-60  p-3" /> 
        
    </div> 
    
    <div className="pl-3 ">

    <h1 className="">{product.name}</h1>
    <h1 className="font-semibold text-red-600">{product.default_price.unit_amount} {product.default_price.currency.toUpperCase()}</h1>
    <button className="py-1 my-1 hover:cursor-pointer border-1 rounded px-2 hover:bg-red-200 border-neutral-300">Vew details</button>   

    </div> 



    </Link>

    )

}