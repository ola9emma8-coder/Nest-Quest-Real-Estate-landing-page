import { motion } from "framer-motion";
import { Pyramid, Layers, House } from "lucide-react";
export default function Partner(){
    const partners = [
        {icon: Pyramid, text: "ENTIGO\nREAL BUILDER", font: "font-inter font-extrabold"},
        {icon: Layers, text: "HOME\nPROPERTIES", font: "font-playfair font-bold", },
        {icon: House, text: "Better\nHomes and Gardens", font: "font-playfair font-extrabold"}
    ];
    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <div className="lg:hidden px-4 sm:px-6 md:px-10 mt-14">

            <motion.h1 initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{amount: 0.2, once: true}}
            className="font-inter text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                Trusted Partners in<br/>
                <span className="font-playfair">Exceptional</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{amount: 0.2, once: true}}
            className="text-black font-playfair font-bold text-lg sm:text-xl md:text-2xl mt-4 md:w-[70%]">
                Your trusted Ally in property Investment: With
                extensive expertise and deep market insights, we
                guide you in making informed real estate decisions
                that perfectly align with your investment goals.
            </motion.p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-8 mt-8">
                {partners.map((partner, index) => (
                    <div key={index} className="flex flex-row gap-2 items-start">
                    <partner.icon className="w-7 h-7 sm:w-8 sm:h-8 mt-1 text-black shrink-0" />
                    <p className={`${partner.font} text-black text-sm sm:text-md whitespace-pre-line`}>{partner.text}</p>
                        </div>
                ))}
            </div>

          </div>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block ml-30 mt-20">

            <motion.h1 initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{amount: 0.5, once: true}}
            className="font-inter text-4xl font-bold text-black mt-5">
                Trusted Partners in<br/>
                <span className="font-playfair">Exceptional</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            viewport={{amount: 0.5, once: true}}
            className="text-black font-playfair font-bold text-4xl ml-50 mt-5">
                Your trusted Ally in property Investment: With<br/>
                extensive expertise and deep market insights, we<br/>
                guide you in making informed real estate decisions<br/>
                that perfectly align with your investment goals.
                </motion.p>

            <div className="flex flex-row gap-5 ml-60 mt-10">
                {partners.map((partner, index) => (
                    <div key={index} className="flex flex-row gap-2">
                    <partner.icon className="w-8 h-8 mt-2 text-black" />
                    <p className={`${partner.font} text-black text-md whitespace-pre-line`}>{partner.text}</p>
                        </div>
                ))}
            </div>
          </div>

        </div>
    )
}