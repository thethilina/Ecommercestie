import Link from "next/link";


export default function Navbar() {


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
</div> 
</nav>


);


};


