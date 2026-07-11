import { motion } from "framer-motion";
export default function Trusted(){
    const advisors = [
  { image: "/images/advisor1.jpeg", heading: "Efficient Living room", h: 220,
    text: "With a 4.8-star average rating, our \nloan officers provide step-by-step" },
  { image: "/images/advisor2.jpeg", heading: "Elegant Wardrobe arrangements", h: 180,
    text: "With a 4.8-star average rating, our \nloan officers provide step-by-step" },
  { image: "/images/advisor3.jpeg", heading: "Creating Bookish Sanctuaries", h: 220,
    text: "With a 4.8-star average rating, our \nloan officers provide step-by-step" },
  { image: "/images/advisor4.jpeg", heading: "Fresh and Inviting Indoor Space", h: 180,
    text: "With a 4.8-star average rating, our \nloan officers provide step-by-step" },
];

    const getClipPath = (height: number) => {
  const notchY = height - 20;
  const curveY = height - 12;
  const notchX = 152;
  return `path('M0 0 L200 0 L200 ${notchY} Q200 ${curveY} 192 ${curveY} L${notchX} ${curveY} Q${notchX - 8} ${curveY} ${notchX - 8} ${height - 4} L${notchX - 8} ${height} L0 ${height} Z')`;
};
    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <div className="lg:hidden px-4 sm:px-6 md:px-10 mt-16">

            <motion.div initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                        viewport={{amount: 0.2, once: true}}
                        className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                         
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


  <div
  className="flex flex-wrap items-start justify-center gap-6 sm:gap-8 mt-10">
  {advisors.map((advisor, index) => (
    <motion.div 
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: "easeIn", delay: index * 0.4}}
    viewport={{amount: 0.2, once: true}}
    key={index} className="flex flex-col gap-3">
      <div
  className="w-50"
  style={{
    height: `${advisor.h}px`,
    clipPath: getClipPath(advisor.h),
  }}
>
        <img
          src={advisor.image}
          alt="A house"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col text-black font-bold gap-1 w-50">
        <h2 className="text-md font-playfair">{advisor.heading}</h2>
        <p className="text-xs font-playfair whitespace-pre-line">{advisor.text}</p>
      </div>
    </motion.div>
  ))}
</div>

          </div>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block">
            <motion.div initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: "easeIn" }}
                        viewport={{amount: 0.5, once: true}}
                        className="flex items-start gap-100 justify-center mt-30">
                         
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


                 
                   
  <div
  className="flex flex-row items-start gap-5 ml-40 mt-20">
  {advisors.map((advisor, index) => (
    <motion.div 
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: "easeIn", delay: index * 0.4}}
    viewport={{amount: 0.5, once: true}}
    key={index} className="flex flex-col gap-3">
      <div
  className="w-50"
  style={{
    height: `${advisor.h}px`,
    clipPath: getClipPath(advisor.h),
  }}
>
        <img
          src={advisor.image}
          alt="A house"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col text-black font-bold gap-1">
        <h2 className="text-md font-playfair whitespace-nowrap">{advisor.heading}</h2>
        <p className="text-xs font-playfair whitespace-pre-line">{advisor.text}</p>
      </div>
    </motion.div>
  ))}
</div>


</div>

        </div>
        
    )
}