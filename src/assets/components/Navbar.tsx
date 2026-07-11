import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const pages = [
    {page: "Buy", style: "font-extrabold"},
    {page: "Rent", style: "font-bold"},
    {page: "Sell", style: "font-bold"},
    {page: "About", style: "font-bold"},
    {page: "Service", style: "font-bold"},
    {page: "Home Loans", tracking: "tracking-tight", style: "font-bold", break: "whitespace-nowrap"}
   ]

    return (
        <div className="top-0 sticky z-50">

          {/* ================= MOBILE / TABLET ================= */}
          <div className="lg:hidden w-[94%] mx-auto mt-7 bg-white rounded-2xl shadow-xs px-5 py-4">
            <div className="flex items-center justify-between">
              <h1 className="font-playfair text-lg sm:text-xl font-bold text-black">
                NESTQUEST
              </h1>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="text-black"
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

            {menuOpen && (
              <div className="mt-4 flex flex-col gap-4">
                <nav className="flex flex-col gap-4">
                  {pages.map((page, index) => (
                    <p
                      key={index}
                      className={`${page.style} ${page.tracking} font-playfair text-md text-black`}
                    >
                      {page.page}
                    </p>
                  ))}
                </nav>

                <button className="px-8 py-2 bg-black text-white tracking-tight
                font-bold text-md rounded-2xl w-full">
                    Contact Us
                </button>
              </div>
            )}
          </div>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block">
            <div className="w-[94%] h-16 border-white bg-white rounded-br-2xl rounded-bl-2xl rounded-tr-2xl
           rounded-tl-2xl translate-y-7 ml-7 shadow-xs">
              <div className="flex ml-5 translate-y-2.5 justify-between gap-20">
                  <h1 className="font-playfair lg:text-2xl text-2xl 
                  sm:text-lg md:text-lg font-bold text-black">
                NESTQUEST
             </h1>

               <div className="flex flex-row translate-y-1 gap-10">
                    <nav className="flex flex-row gap-5">
                       {pages.map((page, index) => (
                        <p key={index} className={`${page.style} ${page.tracking} font-playfair
                         text-md text-black whitespace-nowrap`}>{page.page}</p>
                       ))}
                       </nav> 
                
                <button className="px-8 py-2 -translate-y-1 bg-black border-black 
                text-white tracking-tight -translate-x-2
                font-bold text-md rounded-br-2xl rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl">
                    Contact Us
                </button>
               </div>
              </div>
           </div>
          </div>

        </div>
    )
}