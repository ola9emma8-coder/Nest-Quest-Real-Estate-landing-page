import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
export default function Footer(){
    const footers = [
        {heading: "Service", text: "Saving", text2: "Join Accounts"},
        {heading: "Help", text: "Customer Help", text2: "Community"},
        {heading: "About", text: "Contact", text2: "Career"}
    ]
    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <section className="lg:hidden max-w-6xl bg-black mt-4 border-black
          m-auto rounded-2xl px-4 sm:px-6 md:px-10 py-10">

              <motion.h1 initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
              className="text-lg sm:text-2xl md:text-3xl font-bold text-white font-playfair 
              flex flex-row items-center gap-2 flex-wrap">
                  nestquest.Realestate7@com 
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.h1>

              <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-10 font-playfair mt-8">
                  {footers.map((footer, index) => (
                      <motion.div initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
                      transition={{duration: 0.3, ease: "easeIn", delay: index * 0.15}} 
                      viewport={{amount: 0.2, once: true}}
                      key={index} className="flex flex-col gap-2">
                          <h2 className="text-white text-md sm:text-lg font-bold">{footer.heading}</h2>
                          <div className="flex flex-col gap-1 text-white font-playfair text-sm">
                              <p>{footer.text}</p>
                              <p>{footer.text2}</p>
                              </div>
                          </motion.div>
                  ))}
              </div>

               <motion.hr initial={{opacity: 0, scaleX: 0}} whileInView={{opacity: 1, scaleX: 1}}
               transition={{duration: 0.4, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
               className="w-full text-white font-bold mt-10 border-white/20" />

               <motion.h3 initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
               transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
               className="text-4xl sm:text-6xl md:text-7xl font-bold mt-8 
               text-center text-white break-all sm:break-normal">NESTQUEST</motion.h3>

          </section>

          {/* ================= DESKTOP (original layout, words animated) ================= */}
          <div className="hidden lg:block">
            <motion.section initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
            className="max-w-6xl h-80 bg-black mt-4 border-black
            block m-auto rounded-br-2xl rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl">
                
              <div className="flex flex-row ml-20 translate-y-20 gap-70">
                <motion.h1 initial={{opacity: 0, x: -40}} whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.4, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
                className="text-3xl font-bold text-white font-playfair flex flex-row gap-2">
                    nestquest.Realestate7@com 
                    <ArrowUpRight className="w-5 h-5 translate-y-3 text-white ml-3" />
                </motion.h1>
                <div className="flex flex-row gap-10 font-playfair">
                    {footers.map((footer, index) => (
                        <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.4, ease: "easeIn", delay: index * 0.2}} 
                        viewport={{amount: 0.3, once: true}}
                        key={index} className="flex flex-col gap-2">
                            <h2 className="text-white text-lg font-bold">{footer.heading}</h2>
                            <div className="flex flex-col gap-1 text-white font-playfair text-sm">
                                <p>{footer.text}</p>
                                <p>{footer.text2}</p>
                                </div>
                            </motion.div>
                    ))}
                </div>
               
              </div>
               <motion.hr initial={{opacity: 0, scaleX: 0}} whileInView={{opacity: 1, scaleX: 1}}
               transition={{duration: 0.5, ease: "easeIn", delay: 0.3}} viewport={{amount: 0.3, once: true}}
               className="w-full ml-20 translate-y-25 text-white font-bold origin-left" />

               <motion.h3 initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
               transition={{duration: 0.5, ease: "easeIn", delay: 0.4}} viewport={{amount: 0.3, once: true}}
               className="text-9xl font-bold translate-y-25 
               text-center text-white">NESTQUEST</motion.h3>
            </motion.section>
          </div>

        </div>
    )
}