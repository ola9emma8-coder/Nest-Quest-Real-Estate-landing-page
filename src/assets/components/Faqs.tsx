import { motion } from "framer-motion";
import { Star } from "lucide-react";
export default function Faqs(){
    const faqs = [

        {image: "/images/faq1.jpeg", text: "Thanks to NestQuest, I " +
         "found my dream home in no time. I highly " +
         "recommend this website to anyone looking " +
         "for a seamless and stress free home",
         name: "John D.", role: "UI/UX Designer", rating: "4.9", star1: Star, star2: Star, star3: Star,
         star4: Star, star5: Star
        },

        {image: "/images/faq2.jpeg", text: "I had an incredible experience selling my " +
         "home through this website. The process was " +
         "smooth, and i recieved multiple offers within " +
         "a week! The customer support team was",
         name: "Jesse Hiss", role: "UI/UX Designer", rating: "4.9", star1: Star, star2: Star, star3: Star,
         star4: Star, star5: Star
        },
    ];

    const testtimonials = [

        {text: "As a first-time homebuyer, I was nervous " +
         "about the loan process. However, the loan " +
         "options were clearly explained, and the " +
         "application was straightforward. I found mine",
         name: "Emily R.", role: "UI/UX Designer", rating: "4.9", star1: Star, star2: Star, star3: Star,
         star4: Star, star5: Star, image: "/images/faq3.jpeg"
        },

        {text: "The best part about this site is the " +
         "comprehensive service it offers. From Finding " +
         "a property to securing a loan, everything was " +
         "handled efficiently. I'm extremely satisfied " +
         "with the support and transparency",
         name: "Sarah L.", role: "UI/UX Designer", rating: "4.9", star1: Star, star2: Star, star3: Star,
         star4: Star, star5: Star, image: "/images/faq4.jpeg"
        }

    ]

    const allTestimonials = [...faqs, ...testtimonials];

        
    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <div className="lg:hidden mt-16 px-4 sm:px-6 md:px-10">
          <motion.section initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
            className="max-w-6xl bg-gray-100 border-gray-100
            m-auto rounded-2xl py-10 px-4 sm:px-6 md:px-10">

          <motion.h1 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-black">
            See what our customers<br/>
            <span className="font-playfair">are saying</span>
          </motion.h1>
         
         <motion.p initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn", delay: 0.2}} viewport={{amount: 0.2, once: true}}
         className="text-center text-xs font-bold font-inter mt-3 text-black">
            More than <span className="text-sm italic">700 Million</span> people have tried the application
            <span className="block text-center">and given their opinion</span>
         </motion.p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-10">
             {allTestimonials.map((item, index) => (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, ease: "easeIn", delay: (index % 2) * 0.3}} viewport={{amount: 0.2, once: true}}
                key={index} className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                    <img src={item.image} className="border-white w-full sm:w-32 h-40
                    rounded-2xl object-cover shrink-0"
                    alt="humans with real estate icon" />
                    <div className="bg-white rounded-2xl
                     shadow-sm border-white w-full h-fit p-5">
                       <div className="flex flex-col gap-3">
                          <p className="text-black text-sm font-playfair font-bold
                          tracking-tight text-center">{item.text}</p>
                          <div className="flex flex-row items-center justify-between">
                             <div className="flex flex-col gap-0.5 font-playfair">
                               <h2 className="text-sm font-bold text-black">{item.name}</h2>
                               <p className="text-xs font-bold text-gray-700">{item.role}</p>
                                </div>

                                <div className="flex flex-col gap-0.5 items-end">
                                 <h2 className="text-sm font-bold text-black">{item.rating}</h2>
                                 <div className="flex flex-row">
                                   <item.star1 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star2 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star3 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star4 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star5 className="text-gray-300 fill-gray-300 w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </motion.div>
             ))}
          </div>

            </motion.section>
          </div>

          {/* ================= DESKTOP (redesigned) ================= */}
          <div className="hidden lg:block mt-20">
          <motion.section initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
            className="max-w-6xl bg-gray-100 border-gray-100
            block m-auto rounded-2xl py-16 px-16">

          <motion.h1 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
          className="text-center text-4xl font-bold font-inter text-black">
            See what our customers<br/>
            <span className="font-playfair">are saying</span>
          </motion.h1>
         
         <motion.p initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn", delay: 0.2}} viewport={{amount: 0.3, once: true}}
         className="text-center text-xs font-bold font-inter mt-4 text-black">
            More than <span className="text-sm italic">700 Million</span> people have tried the application<br/>
            <span className="inline-block text-center">and given their opinion</span>
         </motion.p>

          <div
            className="grid grid-cols-2 gap-x-10 gap-y-8 items-start mt-16">
             {allTestimonials.map((item, index) => {
               const imageFirst = index % 2 === 0;
               return (
                <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, ease: "easeIn", delay: (index % 2) * 0.4}} viewport={{amount: 0.3, once: true}}
                key={index} className={`flex ${imageFirst ? "flex-row" : "flex-row-reverse"} gap-4 items-start`}>
                    <img src={item.image} className="border-white w-36 h-36 shrink-0
                    rounded-2xl object-cover"
                    alt="humans with real estate icon" />
                    <div className="bg-white rounded-2xl
                     shadow-sm border-white flex-1 h-fit p-6">
                       <div className="flex flex-col gap-3">
                          <p className="text-black text-sm font-playfair font-bold whitespace-pre-line
                          tracking-tight text-center">{item.text}</p>
                          <div className="flex flex-row items-center justify-between px-2">
                             <div className="flex flex-col gap-0.5 font-playfair">
                               <h2 className="text-sm font-bold text-black">{item.name}</h2>
                               <p className="text-xs font-bold text-gray-700">{item.role}</p>
                                </div>

                                <div className="flex flex-col gap-0.5 items-end">
                                 <h2 className="text-sm font-bold text-black">{item.rating}</h2>
                                 <div className="flex flex-row">
                                   <item.star1 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star2 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star3 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star4 className="text-orange-800 fill-orange-800 w-3 h-3" />
                                   <item.star5 className="text-gray-300 fill-gray-300 w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </motion.div>
               );
             })}

          </div>


            </motion.section>
          </div>

        </div>
    )
}