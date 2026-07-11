import Navbar from "./Navbar";
import Advisor from "./Advisor";
import { ChevronDown } from 'lucide-react'
export default function HeroSection(){
     const things = [
        {type: "Location", icon: ChevronDown},
        {type: "Price", icon: ChevronDown},
        {type: "Property", icon: ChevronDown},
     ];

     const types = [
        {type: "ARCHITECTURE", padding: "px-5 py-2"},
        {type: "HOUSE", padding: "px-3 py-2"},
        {type: "COMMERCIAL", padding: "px-5 py-2"},
     ];

    return(
        <div className="mt-5">

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <section className="lg:hidden max-w-6xl bg-gray-100 border-gray-100 m-auto 
          rounded-2xl pb-10">

            <Navbar />

            <div className="relative overflow-hidden mt-5 mx-4 sm:mx-6 md:mx-10">
              <img
                src="/images/nestquest.jpeg"
                className="w-full rounded-3xl h-72 sm:h-96 md:h-[28rem] object-cover"
              />

              <div className="bg-black/50 absolute inset-0 rounded-3xl" />

              <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-12">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-playfair text-white font-semibold">
                  We Build<br/>
                  <span className="font-playfair italic">Community</span>
                </h1>

                <p className="mt-4 font-playfair text-white font-bold text-sm sm:text-md md:text-lg md:w-[70%]">
                  Welcome to a world where luxury meets lifestyle. Our
                  handpicked properties offer more than just a place to live
                </p>
              </div>
            </div>

            <div className="bg-white/60 mx-4 sm:mx-6 md:mx-10 mt-5 rounded-lg p-4 md:p-6
            flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h1 className="text-black font-playfair text-md sm:text-lg font-bold md:w-[35%]">
                Search for the price you are looking for
              </h1>
              <div className="flex flex-col sm:flex-row md:flex-1 gap-2">
                <div className="flex flex-row flex-wrap gap-2">
                  {things.map((thing, index) => (
                    <div key={index} className="px-3 h-10 bg-black/10 flex justify-center items-center rounded-lg gap-1">
                      <h2 className="text-black font-bold text-sm">{thing.type}</h2>
                      <thing.icon className="w-3.5 h-3.5 text-black" />
                    </div>
                  ))}
                </div>
                <button className="bg-black rounded-lg text-white text-md w-full sm:w-[20%] md:w-32 h-10 font-bold">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-center 
            gap-6 mt-6 px-4 sm:px-6 md:px-10">

              <div className="w-full sm:w-70 md:w-72 rounded-lg mx-auto md:mx-0
              bg-black/80 backdrop-blur-xl px-4 md:px-0" style={{maxWidth: "280px"}}>
                <img src="/images/intnextquest.jpeg" alt="Interior"
                className="w-full h-30 object-cover mt-3 rounded-lg" />

                <h2 className="text-white font-playfair mt-4 font-bold text-lg">
                  Find a home that suits your budget
                </h2>

                <button className="w-[90%] h-8 text-white text-center font-bold font-playfair
                rounded-l-3xl rounded-r-3xl hover:bg-white/30 cursor-pointer
                block mt-3 mb-4 mx-auto bg-white/25 text-md transition duration-300 ease-in-out">
                  Explore Now
                </button>
              </div>

              <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start md:mt-3">
                {types.map((type, index) => (
                  <div key={index}
                  className={`border-black border rounded-l-3xl ${type.padding} rounded-r-3xl`}>
                    <p className="text-black text-center font-bold text-sm">{type.type}</p>
                  </div>
                ))}
              </div>

            </div>

            <Advisor />

          </section>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block">
           <section className="max-w-6xl h-310 bg-gray-100 border-gray-100 block m-auto 
          rounded-br-2xl rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl">
              
              <Navbar />

             <div className="relative overflow-hidden translate-y-10">
               <img
               src="/images/nestquest.jpeg" 
              className="w-[95%] rounded-br-3xl rounded-bl-3xl ml-7
              rounded-tr-3xl rounded-tl-3xl h-153" />
                 
               <div className="absolute rounded-3xl
                -bottom-16 -left-16 w-120 h-25 bg-gray-100" />

              <div className="bg-black/50 ml-7 w-[95%] rounded-br-3xl
              rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl h-100 inset-0 absolute" />
             </div>
              
           <div className="ml-20 -translate-y-130">
            <h1 className="text-7xl font-playfair text-white font-semibold">
             We Build<br/>
             <span className="font-playfair italic">Community</span>
            </h1>

            <p className="mt-5 font-playfair text-white font-bold ml-3 text-md">
                Welcome to a world where luxury meets lifestyle. Our<br/>
                handpicked properties offer more than just a place to live
            </p>
           </div>


            
            <div className="bg-white/30 w-[38%] h-25 rounded-lg ml-22
         border-black -translate-y-120">
                <h1 className="text-white ml-5 translate-y-2 font-playfair text-lg font-bold">
                    Search for the price you are looking for
                </h1>
                <div className="flex flex-row gap-1 ml-3 mt-5">
  {things.map((thing, index) => (
    <div key={index} className="w-25 h-10 bg-white/25 flex justify-center items-center rounded-lg">
      <div className="flex flex-row gap-1 ml-3 mt-0.5">
        <h2 className="text-white font-bold text-md">{thing.type}</h2>
        <thing.icon className="w-3.5 h-3.5 text-white mt-2" />
      </div>
    </div>
  ))}
  <button className="bg-white rounded-lg text-black text-md w-[20%] h-10 font-bold">
    Search
  </button>
</div>
                </div>  
              

              <div className="w-70 h-63 rounded-lg block m-auto 
              bg-white/5 backdrop-blur-xl border-black translate-x-92 -translate-y-140">
              <img src="/images/intnextquest.jpeg" alt="Interior" 
              className="w-60 h-30 object-cover translate-y-3 block m-auto rounded-lg" />

              <h2 className="text-white font-playfair ml-5 mt-5 font-bold text-lg">
                Find a home that suits<br/> your budget
              </h2>

              <button className="w-[90%] h-8 text-white text-center font-bold font-playfair
               rounded-l-3xl rounded-r-3xl hover:bg-white/30 cursor-pointer
               block mt-3 m-auto bg-white/25 text-md transition duration-300 ease-in-out">
                Explore Now
              </button>
           </div>


         <div className="flex flex-row -translate-y-138 ml-6">
            {types.map((type, index) => (
                <div key={index} 
                className={`border-black border rounded-l-3xl ${type.padding} rounded-r-3xl`}>
                    <p className="text-black text-center font-bold text-md">{type.type}</p>
                    </div>
            ))}
         </div>


         <Advisor />

          </section>
          </div>

        </div>
          

    )
}