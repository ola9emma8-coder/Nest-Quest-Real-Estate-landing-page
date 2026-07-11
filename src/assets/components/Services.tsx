import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export default function Services(){
    const namess = [
        {type: "Commercial", style: "bg-gray-100 px-5 py-2 border-gray-300 border"},
        {type: "Property", style: "bg-white border-white shadow-sm px-4 py-2"}
    ];

    const types = [
        {type: "House", style: "bg-gray-100 px-4 py-2 border-gray-300 border"},
        {type: "Store", style: "bg-gray-100 px-5 py-1 border-gray-300 border", margin: "mt-1"},
        {type: "Apartments", style: "bg-gray-100 px-5 py-2 border-gray-300 border"}
    ];

    const buyers = [
        {image: "/images/home.jpeg", heading: "Buy a home",
         text: "Find your place with an immersive photo,\nexperience and the most listings, including",
         buttonText: "View Details", icon: ArrowUpRight
        }
    ];

    const sellers = [
        {heading: "Selling a home",
         text: "No matter what path you take to sell your home,\nwe can help you navigate a sucessful sale",
         buttonText: "View Details", icon: ArrowUpRight, image: "/images/home2.jpeg"
        }
    ];

    const renters = [
        {image: "/images/home3.jpeg", heading: "Rent a home",
         text: "We're creating a seamless online experience - from \nshopping on the largest rental network",
         buttonText: "View Details", icon: ArrowUpRight
        }
    ];
    
    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <motion.section initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
          className="lg:hidden max-w-6xl bg-gray-100 border-gray-100 mt-10
          m-auto rounded-2xl px-4 sm:px-6 md:px-10 py-10">

            <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-bold text-black font-inter">
              Expert Services for Buyers,<br/>
              <span className="font-playfair">Sellers, and Investors</span>
            </h1>

           <div className="flex flex-col gap-2">
                 <div className="flex flex-row flex-wrap gap-2">
                {namess.map((names, index) => (
                    <motion.div initial={{opacity: 0, x: 60}} whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: index * 0.6}} viewport={{once: true}}
                    key={index} 
                    className={`rounded-l-3xl rounded-r-3xl font-playfair ${names.style}`}>
                      <p className="text-black text-sm font-bold">{names.type}</p>
                        </motion.div>
                ))}
               </div>

               <div className="flex flex-row flex-wrap gap-2">
                {types.map((type, index) => (
                    <motion.div initial={{opacity: 0, x: 60}} whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: index * 0.6}} viewport={{once: true}}
                    key={index} 
                    className={`rounded-l-3xl rounded-r-3xl font-playfair ${type.style}`}>
                      <p className={`text-black text-sm ${type.margin} font-bold`}>{type.type}</p>
                        </motion.div>
                ))}
             </div>

           </div>
            </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-playfair mt-10">
            {buyers.map((buyer, index) => (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.3}} viewport={{amount: 0.3, once: true}}
                key={index} className="flex flex-col gap-2">
                  <img src={buyer.image} 
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl" />
                  <h2 className="text-xl sm:text-2xl font-bold text-black">{buyer.heading}</h2>
                  <p className="text-sm whitespace-pre-line">{buyer.text}</p>
                  <button className="border-gray-300 border w-fit h-8 
                  flex justify-center items-center gap-1 rounded-l-3xl rounded-r-3xl
                  text-black font-bold text-sm px-5 py-3">
                    <p className="text-sm font-bold">{buyer.buttonText}</p>
                    <buyer.icon className="w-3 h-3" />
                  </button>
                    </motion.div>
            ))}

            {sellers.map((seller, index) => (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}} viewport={{amount: 0.3, once: true}}
                key={index} className="flex flex-col gap-2">
                 <h2 className="text-xl sm:text-2xl font-bold text-black">{seller.heading}</h2>
                  <p className="text-sm whitespace-pre-line">{seller.text}</p>
                  <button className="border-gray-300 border rounded-l-3xl rounded-r-3xl 
                  flex justify-center items-center gap-1 w-fit h-8
                  text-black font-bold text-sm px-5 py-3">
                    <p className="text-sm font-bold">{seller.buttonText}</p>
                    <seller.icon className="w-3 h-3" />
                  </button>
                  <img src={seller.image} 
                  className="w-full h-48 sm:h-56 object-cover mt-1 rounded-2xl" />
                    </motion.div>
            ))}

            {renters.map((renter, index) => (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.5}} viewport={{amount: 0.3, once: true}}
                key={index} className="flex flex-col gap-2">
                  <img src={renter.image} 
                  className="w-full h-48 sm:h-56 object-cover rounded-2xl" />
                  <h2 className="text-xl sm:text-2xl font-bold text-black">{renter.heading}</h2>
                  <p className="text-sm whitespace-pre-line">{renter.text}</p>
                  <button className="border-amber-950 bg-amber-950
                  flex justify-center items-center gap-1 rounded-l-3xl rounded-r-3xl
                  text-white font-bold text-sm w-fit h-8 px-5 py-3">
                    <p className="text-sm font-bold">{renter.buttonText}</p>
                    <renter.icon className="w-3 h-3" />
                  </button>
                    </motion.div>
            ))}
          </div>

          </motion.section>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block">
            <motion.section initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
            className="max-w-6xl h-170 bg-gray-100 border-gray-100 mt-10
            block m-auto rounded-br-2xl rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl">
 
            <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
            className="flex items-start gap-80 ml-15 translate-y-20">

            <h1 className="text-4xl tracking-tight font-bold whitespace-nowrap text-black font-inter">
              Expert Services for Buyers,<br/>
              <span className="font-playfair whitespace-nowrap">Sellers, and Investors</span>
            </h1>

           <div className="flex flex-col gap-0.5">
                 <div className="flex flex-row gap-0.5">
                {namess.map((names, index) => (
                    <motion.div initial={{opacity: 0, x: 60}} whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: index * 0.6}} viewport={{once: true}}
                    key={index} 
                    className={`rounded-l-3xl rounded-r-3xl font-playfair ${names.style}`}>
                      <p className="text-black text-sm font-bold">{names.type}</p>
                        </motion.div>
                ))}
               </div>

               <div className="flex flex-row gap-0.5">
                {types.map((type, index) => (
                    <motion.div initial={{opacity: 0, x: 60}} whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: index * 0.6}} viewport={{once: true}}
                    key={index} 
                    className={`rounded-l-3xl rounded-r-3xl font-playfair ${type.style}`}>
                      <p className={`text-black text-sm ${type.margin} font-bold`}>{type.type}</p>
                        </motion.div>
                ))}
             </div>

           </div>
            </motion.div>


          <div className="flex flex-row gap-15 font-playfair ml-15 translate-y-45">
            {buyers.map((buyer, index) => (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.3}} viewport={{amount: 0.5, once: true}}
                key={index} className="flex flex-col gap-2">
                  <img src={buyer.image} 
                  className="w-75 h-50 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl" />
                  <h2 className="text-2xl font-bold text-black">{buyer.heading}</h2>
                  <p className="text-sm whitespace-pre-line">{buyer.text}</p>
                  <button className="border-gray-300 border w-[47%] h-8 
                  flex justify-center items-center gap-1 rounded-l-3xl rounded-r-3xl
                  text-black font-bold text-sm px-5 py-3">
                    <p className="text-sm font-bold">{buyer.buttonText}</p>
                    <buyer.icon className="w-3 h-3" />
                  </button>
                    </motion.div>
            ))}

            {sellers.map((seller, index) => (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.6}} viewport={{amount: 0.5, once: true}}
                key={index} className="flex flex-col gap-2">
                 <h2 className="text-2xl font-bold text-black">{seller.heading}</h2>
                  <p className="text-sm whitespace-pre-line">{seller.text}</p>
                  <button className="border-gray-300 border rounded-l-3xl rounded-r-3xl 
                  flex justify-center items-center gap-1 w-[47%] h-8
                  text-black font-bold text-sm px-5 py-3">
                    <p className="text-sm font-bold">{seller.buttonText}</p>
                    <seller.icon className="w-3 h-3" />
                  </button>
                  <img src={seller.image} 
                  className="w-75 h-55 translate-y-3 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl" />
                    </motion.div>
            ))}

            {renters.map((renter, index) => (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.9}} viewport={{amount: 0.5, once: true}}
                key={index} className="flex flex-col gap-2">
                  <img src={renter.image} 
                  className="w-75 h-50 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-2xl" />
                  <h2 className="text-2xl font-bold text-black">{renter.heading}</h2>
                  <p className="text-sm whitespace-pre-line">{renter.text}</p>
                  <button className="border-amber-950 bg-amber-950
                  flex justify-center items-center gap-1 rounded-l-3xl rounded-r-3xl
                  text-white font-bold text-sm w-[47%] h-8">
                    <p className="text-sm font-bold">{renter.buttonText}</p>
                    <renter.icon className="w-3 h-3" />
                  </button>
                    </motion.div>
            ))}
          </div>
            
            
            </motion.section>
          </div>

        </div>
    )
}