import { motion } from "framer-motion";
import { FaHouseChimney } from "react-icons/fa6";
import { MdLocalOffer, MdAccountBalanceWallet } from "react-icons/md";
import { ArrowUpRight } from "lucide-react";
export default function NestQuest(){
    const loans = [
     {icon: FaHouseChimney, heading: "Top-rated loan officers help",
      text: "With a 4.8-star average rating, our loan officers",
      subText: "provide step-by-step guidance and expertise"
     }
    ];
    
    const rates = [
        {icon: MdLocalOffer, heading: "Competitive rates",
         text: "Strong rates, no hidden fees and total",
         subText: "transparency to keep you informed"
        }
    ];

    const payments = [
        {icon: MdAccountBalanceWallet, heading: "Low down payment options",
         text: "We offer a variety of loan options to meet your",
         subText: "needs and help make ownership more"
        }
    ];

    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <div className="lg:hidden mt-16 px-4 sm:px-6 md:px-10">

            <motion.h1 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
            className="text-2xl sm:text-3xl md:text-4xl font-inter font-bold text-black text-center"
            >
             Why NestQuest<br/>
             <span className="font-playfair inline-block text-center">Home Loans?</span>
            </motion.h1>

            <motion.p initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
            className="text-sm sm:text-md text-center tracking-tight font-playfair mt-3 font-bold text-black">
             Getting home is a journey. Our loan officers are here to help
             you stay on a budget and on schedule.
            </motion.p>

           
           <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center font-playfair mt-10 gap-10">
            {loans.map((loan, index) => (
                <div key={index} className="flex flex-col gap-3 max-w-xs">
                  <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.3}} viewport={{amount: 0.3 ,once: true}}
                  className="block m-auto rounded-full border-amber-900 bg-amber-900 w-16 h-16 sm:w-20 sm:h-20">
                    <loan.icon className="w-8 h-8 sm:w-10 sm:h-10 block translate-y-4 sm:translate-y-5 text-white m-auto" />
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: 0.3}} viewport={{amount: 0.3 ,once: true}} 
                    className="flex flex-col tracking-tight gap-2">
                      <h2 className="text-black font-bold text-md sm:text-lg text-center">{loan.heading}</h2>
                      <p className="text-black text-sm text-center">{loan.text}<br/>
                      <span>{loan.subText}</span>
                      </p>
                        </motion.div>
                    </div>
            ))}


             {rates.map((rate, index) => (
                <div key={index} className="flex flex-col gap-3 max-w-xs">
                  <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.5, delay: 0.5}} viewport={{amount: 0.3, once: true}} 
                  className="block m-auto rounded-full border-amber-900 bg-amber-900 w-16 h-16 sm:w-20 sm:h-20">
                    <rate.icon className="w-8 h-8 sm:w-10 sm:h-10 block translate-y-4 sm:translate-y-5 text-white m-auto" /></motion.div>
                    <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: 0.5}} viewport={{amount: 0.3, once: true}} 
                    className="flex flex-col trackiing-tight gap-2">
                      <h2 className="text-black font-bold text-md sm:text-lg text-center">{rate.heading}</h2>
                      <p className="text-black text-sm text-center">{rate.text}<br/>
                      <span>{rate.subText}</span>
                      </p>
                        </motion.div>
                    </div>
            ))}


              {payments.map((payment, index) => (
                <div key={index} className="flex flex-col gap-3 max-w-xs">
                  <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.9}} viewport={{amount: 0.3, once: true}}
                  className="block m-auto rounded-full border-amber-900 bg-amber-900 w-16 h-16 sm:w-20 sm:h-20">
                    <payment.icon className="w-8 h-8 sm:w-10 sm:h-10 block translate-y-4 sm:translate-y-5 text-white m-auto" /></motion.div>
                    <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: 0.7}} viewport={{amount: 0.3, once: true}}
                    className="flex flex-col tracking-tight gap-2">
                      <h2 className="text-black font-bold text-md sm:text-lg text-center">{payment.heading}</h2>
                      <p className="text-black text-sm text-center">{payment.text}<br/>
                      <span>{payment.subText}</span>
                      </p>
                        </motion.div>
                    </div>
            ))}


           </div>


            <div className="hidden md:flex justify-center items-center gap-10 md:gap-20 mt-10">
                <motion.div initial={{width: 0, x: 0}} whileInView={{width: 120}}
                transition={{duration:0.3, delay: 0.5}} viewport={{once: true}}
                 className="border border-gray-100"></motion.div>

                <motion.div initial={{width: 0, x: 0}} whileInView={{width: 120}}
                transition={{duration:0.3, delay: 0.8}} viewport={{once: true}}
                className="border border-gray-100"></motion.div>
            </div>



         <motion.button initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.3}} viewport={{amount: 0.3, once: true}}
         className="w-fit px-6 h-9 block m-auto rounded-l-3xl text-center mt-8 mb-10
         rounded-r-3xl border-gray-300 border-2 font-playfair">
            <span className="flex flex-row justify-center items-center gap-1">
                <p className="text-black font-bold text-sm">See loan offering</p>
                <ArrowUpRight className="w-3 h-3 text-black" />
            </span>
         </motion.button>

          </div>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block mt-20">
            <motion.h1 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.4, once: true}}
            className="text-4xl font-inter font-bold text-black text-center"
            >
             Why NestQuest<br/>
             <span className="font-playfair inline-block text-center">Home Loans?</span>
            </motion.h1>

            <motion.p initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, ease: "easeIn"}} viewport={{amount: 0.4, once: true}}
            className="text-md text-center tracking-tight font-playfair text-md mt-3 font-bold text-black">
             Getting home is a journey. Our loan officers are here to help<br/>
             you stay on a budget and on schedule.
            </motion.p>

           
           <div className="flex justify-center items-center font-playfair mt-10 gap-30">
            {loans.map((loan, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.3}} viewport={{amount: 0.3 ,once: true}}
                  className="block m-auto rounded-full border-amber-900 bg-amber-900 w-20 h-20">
                    <loan.icon className="w-10 h-10 block translate-y-5 text-white m-auto" />
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: 0.3}} viewport={{amount: 0.3 ,once: true}} 
                    className="flex flex-col tracking-tight gap-2">
                      <h2 className="text-black font-bold text-lg text-center">{loan.heading}</h2>
                      <p className="text-black text-sm text-center">{loan.text}<br/>
                      <span>{loan.subText}</span>
                      </p>
                        </motion.div>
                    </div>
            ))}


             {rates.map((rate, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.5, delay: 0.5}} viewport={{amount: 0.3, once: true}} 
                  className="block m-auto rounded-full border-amber-900 bg-amber-900 w-20 h-20">
                    <rate.icon className="w-10 h-10 block translate-y-5 text-white m-auto" /></motion.div>
                    <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: 0.5}} viewport={{amount: 0.3, once: true}} 
                    className="flex flex-col trackiing-tight gap-2">
                      <h2 className="text-black font-bold text-lg text-center">{rate.heading}</h2>
                      <p className="text-black text-sm text-center">{rate.text}<br/>
                      <span>{rate.subText}</span>
                      </p>
                        </motion.div>
                    </div>
            ))}


              {payments.map((payment, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 0.9}} viewport={{amount: 0.3, once: true}}
                  className="block m-auto rounded-full border-amber-900 bg-amber-900 w-20 h-20">
                    <payment.icon className="w-10 h-10 block translate-y-5 text-white m-auto" /></motion.div>
                    <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: 0.7}} viewport={{amount: 0.3, once: true}}
                    className="flex flex-col tracking-tight gap-2">
                      <h2 className="text-black font-bold text-lg text-center">{payment.heading}</h2>
                      <p className="text-black text-sm text-center">{payment.text}<br/>
                      <span>{payment.subText}</span>
                      </p>
                        </motion.div>
                    </div>
            ))}


           </div>


            <div className="flex justify-center items-center gap-40 -translate-y-32">
                <motion.div initial={{width: 0, x: 0}} whileInView={{width: 200}}
                transition={{duration:0.3, delay: 0.5}} viewport={{once: true}}
                 className="border border-gray-100 w-50"></motion.div>

                <motion.div initial={{width: 0, x: 0}} whileInView={{width: 200}}
                transition={{duration:0.3, delay: 0.8}} viewport={{once: true}}
                className="border border-gray-100 w-50"></motion.div>
            </div>



         <motion.button initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
         transition={{duration: 0.3}} viewport={{amount: 0.3, once: true}}
         className="w-[15%] h-6 block m-auto rounded-l-3xl text-center mt-7 
         rounded-r-3xl border-gray-300 border-2 font-playfair">
            <span className="flex flex-row justify-center items-center gap-1">
                <p className="text-black font-bold text-sm">See loan offering</p>
                <ArrowUpRight className="w-3 h-3 text-black" />
            </span>
         </motion.button>
          </div>

        </div>
    )
}