'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  // we should use this hook when we are navigating again and again  back and forward
  const router = useRouter();
  console.log(router);

  
  function handleNavigation(){
    router.push('products');
  }

  return (
  <div>
     <h1>Home</h1>
     <Link href="/products">Navigate to products page</Link>

     {/* alternate way to navigate  */}
     <h2 className="font-bold mt-3 text-lg">Alternative way of navigating using useRouter</h2>
     <button onClick={handleNavigation}>Navigate using useRouter</button>
     
  </div>
  );
}
