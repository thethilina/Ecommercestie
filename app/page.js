import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import  Carousel  from "@/components/carousel";
import pp from '../public/pp.png'

export default async function Home() {
  
  const products = await stripe.products.list (
    {
      expand: ["data.default_price"],
      limit:5 ,
    }
  )
  
  console.log(products);
  
  return (
<div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12 border-2">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to My EverCart
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <button
              
              className="inline-flex items-center justify-center rounded-full px-4 py-1 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </button>
          </div>
          <Image
            alt="Hero Image"
            src={pp}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products = {products.data} />
      </section>
    </div>
  );
}
