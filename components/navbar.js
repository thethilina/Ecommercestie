"use client"
import Link from "next/link";
import { ShoppingCartIcon ,Bars3Icon ,XMarkIcon } from "@heroicons/react/16/solid";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";

export default function Navbar() {

const [mobileOpen, setMobileOpen] = useState(false);
const { items } = useCartStore();
const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);


useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


return(

<nav className="sticky top-0 z-50 bg-white shadow">

<div className="container mx-auto flex items-center justify-between px-4 py-4">
  
<Link href='/' className=" text-blue-900 font-bold text-2xl tracking-wider">EverCart</Link>


<div className="hidden md:flex space-x-10 font-semibold text-[#181414] ">



<Link className="hover:bg-neutral-300 hover:rounded-2xl px-3 py-1 " href='/'>Home</Link>
<Link className="hover:bg-neutral-300 hover:rounded-2xl px-3 py-1 " href='/products'>Prouducts</Link>
<Link className="hover:bg-neutral-300 hover:rounded-2xl px-3 py-1 " href='/checkout'>Checkout</Link>
</div>

<div className="flex items-center space-x-4"></div>
  <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

             <button
          
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
</div> 
{mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
</nav>


);


};


