import React from "react";
import { useInView, motion } from "framer-motion";
export default function Advisor(){

    const [customers, setCustomers] = React.useState<number>(0);
    const [partners, setPartners] = React.useState<number>(0);
    const [years, setYears] = React.useState<number>(0);
    const [property, setProperty] = React.useState<number>(0);

    const ref = React.useRef(null);
    const isInView = useInView(ref, {once: false, amount: 0.3 });
     React.useEffect(() => {
      if (!isInView) return;

      const interval = setInterval(() => {
    setCustomers(prev => (prev < 18 ? prev + 1 : prev));
    setPartners(prev => (prev < 17 ? prev + 1 : prev));
    setYears(prev => (prev < 13 ? prev + 1 : prev));
    setProperty(prev => (prev < 14 ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
    }, [isInView]);

    const advisors = [
         {number: customers, text: "Satisfied Customers", 
          background: "bg-white", color: "text-black", textColor: "text-black"},

        {number: partners, text: "Total Partner", 
         background: "bg-black", color: "text-white", textColor: "text-white" },

        {number: years, text: "Years Experience", 
         background: "bg-white", color: "text-black", textColor: "text-black" },

        {number: property, text: "Property Available", 
         background: "bg-white", color: "text-black", textColor: "text-black" }
    ];

    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <div className="lg:hidden px-4 sm:px-6 md:px-10 mt-8">

            <motion.div initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{amount: 0.2, once: true}}
            className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-10 gap-4">

            <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                Your Trusted Real<br/>
                <span className="font-playfair">Estate Advisors</span>
            </h1>

            <p className="text-black font-playfair font-bold text-sm sm:text-md md:w-[45%]">
                Discover the epitome of luxury living in this
                offering sweeping panoramic ocean views
                from every room.
            </p>
            </motion.div>


             <motion.div initial={{ opacity: 0, y: 60 }}
             ref={ref}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3, ease: "easeIn" }}
             viewport={{amount: 0.2, once: true}} 
             className="flex flex-col md:flex-row gap-5 mt-6">
                <img src="/images/advisor.jpeg" className="rounded-2xl 
                w-full md:w-1/2 h-56 sm:h-72 md:h-80 object-cover" alt="a house" />

                <div className="grid grid-cols-2 gap-4 md:gap-5 md:w-1/2">
                    {advisors.map((advisor, index) => (
                        <div key={index}
                        className={`px-4 sm:px-8 py-5 sm:py-7 ${advisor.background} 
                        rounded-3xl shadow-sm`}>
                            <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center">
                             <h2 className={`${advisor.color} font-bold font-playfair text-xl sm:text-2xl md:text-3xl`}
                             >{advisor.number}K+</h2>
                             <p className={`${advisor.textColor} text-xs sm:text-sm font-playfair font-bold text-center`}
                             >{advisor.text}</p>
                                </div>
                            </div>
                    ))}
                </div>
             </motion.div>

          </div>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block">
            <motion.div initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{amount: 0.5, once: true}}
            className="flex items-start gap-100 ml-15 mt-5 -translate-y-130">
             
            <h1 className="font-inter text-4xl font-bold text-black">
                Your Trusted Real<br/>
                <span className="font-playfair">Estate Advisors</span>
            </h1>

            <p className="text-black font-playfair font-bold text-md">
                Discover the epitome of luxury living in this<br/>
                offering sweeping panoramic ocean views<br/>
                from every room.
            </p>
            </motion.div>


             <motion.div initial={{ opacity: 0, y: 60 }}
             ref={ref}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3, ease: "easeIn" }}
             viewport={{amount: 0.5, once: true}} 
             className="flex flex-row gap-5 ml-20 mt-3 -translate-y-120">
                <img src="/images/advisor.jpeg" className="rounded-br-2xl rounded-bl-2xl 
                rounded-tr-2xl rounded-tl-2xl w-100 h-70" alt="a house" />

                <div className="grid grid-cols-2 gap-5">
                    {advisors.map((advisor, index) => (
                        <div key={index}
                        className={`px-12 py-7 ${advisor.background} 
                        rounded-br-3xl rounded-bl-3xl shadow-sm rounded-tr-3xl rounded-tl-3xl`}>
                            <div className="flex flex-col gap-3 justify-center items-center">
                             <h2 className={`${advisor.color} font-bold font-playfair text-3xl`}
                             >{advisor.number}K+</h2>
                             <p className={`${advisor.textColor} text-sm font-playfair font-bold`}
                             >{advisor.text}</p>
                                </div>
                            </div>
                    ))}
                </div>
             </motion.div>
          </div>

        </div>
    )
}