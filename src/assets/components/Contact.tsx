import React from "react";
import { motion } from "framer-motion";
export default function Contact(){
    const [firstName, setFirstName] = React.useState<string>("");
    const [firstnameph, setFirstNamePh] = React.useState<string>("Enter your first name here");
    const [lastName, setLastName] = React.useState<string>("");
    const [lastnameph, setLastNamePh] = React.useState<string>("Enter your last name here");
    const [email, setEmail] = React.useState<string>("");
    const [emailph, setEmailPh] = React.useState<string>("Enter your email here")
    const [phoneno, setPhoneNo] = React.useState<string>();
    const [phonenoph, setPhoneNoPh] = React.useState<string>("Enter your phone no here");
    const [message, setMessage] = React.useState<string>("");
    const [messageph, setMesssagePh] = React.useState<string>("Enter message")

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>): void{
        e.preventDefault();
        setFirstName(e.target.value);
    };
    function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>): void{
        e.preventDefault();
        setLastName(e.target.value);
    };
    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void{
        e.preventDefault();
        setEmail(e.target.value);
    };
    function handlePhoneNoChange(e: React.ChangeEvent<HTMLInputElement>): void{
        e.preventDefault();
        setPhoneNo(e.target.value);
    };
    function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) : void{
        e.preventDefault();
        setMessage(e.target.value);
    };

      const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
         if(!firstName || !lastName || !email || !phoneno || !message){
            window.alert("Please input your details");
            return;
         }
         else if(phoneno){
          const phoneNumber = "+2347086575277";
        const confirmed =  window.confirm(`Would you like to call ${phoneNumber}`);
          if(confirmed){
            window.location.href = `tel:${phoneNumber}`
          };
         }
         
         const text = 
         `Real Estate landing page project:
         Name: ${firstName} ${lastName}
         message: ${message}`

         const encodedText = encodeURIComponent(text);
         const phoneNumber = "+2347086575277";

         window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank", "noopener noreferrer")
      }

       const goToGitHubAcct = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.open("https://github.com/ola9emma8-coder", "_blank", "noopener noreferrer")
       };

    return(
        <div>

          {/* ================= MOBILE / TABLET (up to lg) ================= */}
          <div className="lg:hidden px-4 sm:px-6 md:px-10 mt-16">

             <div className="flex flex-col md:flex-row gap-8">
                 <div className="flex-1">
                   <motion.h1 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-playfair">
                 Let's Get In Touch
            </motion.h1>

            <motion.p initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: 0.2, ease: "easeIn"}} viewport={{amount: 0.2, once: true}}
            className="font-playfair text-xs sm:text-sm text-black tracking-tight mt-3">
                Ready to find your dream home, make a smart investment, or need real
                estate advice? We're to assist you.
            </motion.p>

           <motion.form initial={{opacity: 0, x: 60}} whileInView={{opacity: 1, x: 0}}
           transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
           onSubmit={handleSubmit} className="font-playfair">
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-5 mt-8">
                 <div className="flex flex-col gap-1">
                    <label htmlFor="firstname" 
                    className="text-md text-black font-bold font-playfair">First Name</label>
                    <input value={firstName} type="text"
                    placeholder={firstnameph}
                    onFocus={() => setFirstNamePh("")}
                    onBlur={() => setFirstNamePh("Enter your first name here")}
                    onChange={handleFirstNameChange}
                    className="px-5 py-2 placeholder:text-xs placeholder:font-playfair
                     placeholder:text-black border-gray-700/5 border-2
                    rounded-lg w-full
                    focus:ring-1 focus:ring-black focus:transition focus:duration-700 
                    focus:ease-in-out" />
                 </div>

                 <div className="flex flex-col gap-1">
                    <label htmlFor="lastname" 
                    className="text-md text-black font-bold font-playfair">Last Name</label>
                    <input value={lastName} type="text"
                    placeholder={lastnameph}
                    onFocus={() => setLastNamePh("")}
                    onBlur={() => setLastNamePh("Enter your last name here")}
                    onChange={handleLastNameChange}
                    className="px-5 py-2 placeholder:text-xs placeholder:font-playfair
                    placeholder:text-black
                    rounded-lg border-gray-700/5 border-2 w-full" />
                 </div>

                 <div className="flex flex-col gap-1">
                    <label htmlFor="email" 
                    className="text-md text-black font-bold font-playfair">Email</label>
                    <input value={email} type="email"
                    placeholder={emailph}
                    onFocus={() => setEmailPh("")}
                    onBlur={() => setEmailPh("Enter your email here")}
                    onChange={handleEmailChange}
                    className="px-5 py-2 placeholder:text-xs placeholder:text-black 
                    placeholder:font-playfair
                    rounded-lg border-gray-700/5 border-2 w-full" />
                 </div>

                 <div className="flex flex-col gap-1">
                    <label htmlFor="phone" 
                    className="text-md text-black font-bold font-playfair">Phone</label>
                    <input value={phoneno} type="number"
                    placeholder={phonenoph}
                    onFocus={() => setPhoneNoPh("")}
                    onBlur={() => setPhoneNoPh("Enter your phone no here")}
                    onChange={handlePhoneNoChange}
                    className="px-5 py-2 placeholder:text-xs placeholder:text-black placeholder:font-playfair
                   rounded-lg border-gray-700/5 border-2 w-full" />
                 </div>
            </div>

                 <div className="flex flex-col gap-1 mt-2">
                    <label htmlFor="message" 
                    className="text-md text-black font-bold font-playfair">Message</label>
                    <input value={message} type="text"
                    placeholder={messageph}
                    onFocus={() => setMesssagePh("")}
                    onBlur={() => setMesssagePh("Enter your phone no here")}
                    onChange={handleMessageChange}
                    className="px-5 py-7 placeholder:text-xs placeholder:text-black placeholder:font-playfair
                    rounded-lg border-gray-700/5 border-2 w-full" />
                 </div>            
                      
 
                 <button type="submit" className="text-center text-white 
                 font-bold w-full h-10 text-sm cursor-pointer
                 rounded-lg mt-3 bg-black">Submit Form</button>  
                 </motion.form>  
                 </div>
                  

             <motion.img initial={{opacity: 0, x:-60}} whileInView={{opacity: 1, x: 0}}
             transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}} 
             src="/images/map.jpeg" className="rounded-lg 
             w-full md:w-100 h-56 sm:h-72 md:h-110 object-cover mt-8 md:mt-0" />

           
             </div>

             <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
             transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
             className="bg-white shadow-sm rounded-lg
             w-full sm:w-80 border-white mt-8 mx-auto">
                 <div className="flex flex-row gap-3 p-3">
                    <img src="/images/contact.jpeg" className="w-24 sm:w-30 h-24 sm:h-30 object-cover
                    rounded-lg shrink-0" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-black font-playfair font-bold text-md">
                            Tranquil vista<br/>
                            <span>Residences</span>
                        </h2>
                        <p className="text-black text-xs font-playfair">
                            654 Prevail Hills, San Fransico
                        </p>
                        <button onClick={goToGitHubAcct} 
                        className="bg-black text-white font-bold text-center cursor-pointer
                        font-playfair text-xs w-32 h-7 rounded-l-3xl rounded-r-3xl">
                            Direction
                        </button>
                    </div>
                 </div>
                </motion.div>

          </div>

          {/* ================= DESKTOP (unchanged) ================= */}
          <div className="hidden lg:block">
             <div className="flex flex-row ml-45 mt-20 gap-5">
                 <div>
                   <motion.h1 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
            className="text-4xl font-bold text-black font-playfair">
                 Let's Get In Touch
            </motion.h1>

            <motion.p initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, delay: 0.2, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
            className="font-playfair text-xs text-black tracking-tight mt-3">
                Ready to find your dream home, make a smart investment, or need real<br/>
                estate advice? We're to assist you.
            </motion.p>

           <motion.form initial={{opacity: 0, x: 60}} whileInView={{opacity: 1, x: 0}}
           transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.7, once: true}}
           onSubmit={handleSubmit} className="font-playfair">
            <div className="grid grid-cols-2 mx-auto gap-5 mt-10">
                 <div className="flex flex-col gap-1">
                    <label htmlFor="firstname" 
                    className="text-md text-black font-bold font-playfair">First Name</label>
                    <input value={firstName} type="text"
                    placeholder={firstnameph}
                    onFocus={() => setFirstNamePh("")}
                    onBlur={() => setFirstNamePh("Enter your first name here")}
                    onChange={handleFirstNameChange}
                    className="px-10 py-2 placeholder:text-xs placeholder:font-playfair
                     placeholder:text-black border-gray-700/5 border-2 placeholder:-translate-x-8
                    rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg
                    focus:ring-1 focus:ring-black focus:transition focus:duration-700 
                    focus:ease-in-out" />
                 </div>

                 <div className="flex flex-col gap-1">
                    <label htmlFor="lastname" 
                    className="text-md text-black font-bold font-playfair">Last Name</label>
                    <input value={lastName} type="text"
                    placeholder={lastnameph}
                    onFocus={() => setLastNamePh("")}
                    onBlur={() => setLastNamePh("Enter your last name here")}
                    onChange={handleLastNameChange}
                    className="px-10 py-2 placeholder:text-xs placeholder:font-playfair
                    placeholder:text-black placeholder:-translate-x-8
                    rounded-tr-lg rounded-tl-lg border-gray-700/5 border-2 rounded-br-lg rounded-bl-lg" />
                 </div>

                 <div className="flex flex-col gap-1">
                    <label htmlFor="email" 
                    className="text-md text-black font-bold font-playfair">Email</label>
                    <input value={email} type="email"
                    placeholder={emailph}
                    onFocus={() => setEmailPh("")}
                    onBlur={() => setEmailPh("Enter your email here")}
                    onChange={handleEmailChange}
                    className="px-10 py-2 placeholder:text-xs placeholder:text-black 
                    placeholder:font-playfair placeholder:-translate-x-8
                    rounded-tr-lg rounded-tl-lg border-gray-700/5 border-2 rounded-br-lg rounded-bl-lg" />
                 </div>

                 <div className="flex flex-col gap-1">
                    <label htmlFor="phone" 
                    className="text-md text-black font-bold font-playfair">Phone</label>
                    <input value={phoneno} type="number"
                    placeholder={phonenoph}
                    onFocus={() => setPhoneNoPh("")}
                    onBlur={() => setPhoneNoPh("Enter your phone no here")}
                    onChange={handlePhoneNoChange}
                    className="px-10 py-2 placeholder:text-xs placeholder:text-black placeholder:font-playfair
                   rounded-tr-lg rounded-tl-lg placeholder:-translate-x-8
                    rounded-br-lg border-gray-700/5 border-2 rounded-bl-lg" />
                 </div>
            </div>

                 <div className="flex flex-col gap-1 mt-2">
                    <label htmlFor="message" 
                    className="text-md text-black font-bold font-playfair">Message</label>
                    <input value={message} type="text"
                    placeholder={messageph}
                    onFocus={() => setMesssagePh("")}
                    onBlur={() => setMesssagePh("Enter your phone no here")}
                    onChange={handleMessageChange}
                    className="px-10 py-7 placeholder:text-xs placeholder:text-black placeholder:font-playfair
                   rounded-tr-lg rounded-tl-lg placeholder:-translate-x-8 placeholder:-translate-y-5
                    rounded-br-lg border-gray-700/5 border-2 rounded-bl-lg" />
                 </div>            
                      
 
                 <button type="submit" className="text-center text-white 
                 font-bold w-full h-10 text-sm cursor-pointer
                 rounded-tr-lg rounded-tl-lg rounded-br-lg mt-3 rounded-bl-lg bg-black">Submit Form</button>  
                 </motion.form>  
                 </div>
                  

             <motion.img initial={{opacity: 0, x:-60}} whileInView={{opacity: 1, x: 0}}
             transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.7, once: true}} 
             src="/images/map.jpeg" className="rounded-tr-lg 
             rounded-tl-lg rounded-br-lg rounded-bl-lg w-100 h-110 object-cover" />

           
             </div>

             <br/><br/>
             <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}}
             transition={{duration: 0.3, ease: "easeIn"}} viewport={{amount: 0.5, once: true}}
             className="bg-white block m-auto shadow-sm rounded-tr-lg rounded-tl-lg
             rounded-br-lg rounded-bl-lg w-80 h-37 border-white translate-x-70
             -translate-y-100">
                 <div className="flex flex-row ml-3 gap-3 translate-y-3">
                    <img src="/images/contact.jpeg" className="w-30 h-30 object-cover
                    rounded-tr-lg rounded-tl-lg rounded-br-lg rounded-bl-lg" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-black font-playfair font-bold text-md">
                            Tranquil vista<br/>
                            <span className="-translate-y-3">Residences</span>
                        </h2>
                        <p className="text-black text-xs font-playfair">
                            654 Prevail Hills, San<br/>Fransico
                        </p>
                        <button onClick={goToGitHubAcct} 
                        className="bg-black text-white font-bold text-center cursor-pointer
                        font-playfair text-xs w-32 h-7 rounded-l-3xl rounded-r-3xl">
                            Direction
                        </button>
                    </div>
                 </div>
                </motion.div>
          </div>
            
        </div>
    )
}