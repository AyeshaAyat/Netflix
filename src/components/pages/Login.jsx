import React from "react";
import Container from "../Container";
import logo from "../../assets/logo.png";
import Image from "../Image";
const Login = () => {
// const signIn ()
// const handleSwitchCardBtn =(()=>{

//     alert="sabdhan"
// })


  return (
    <>
      <Container>
        <div className='relative main bg-[url("/src/assets/loginBanner.jpg")] bg-cover bg-no-repeat  h-[600px]'>
          <div className="loginLogo">
            <Image
              imgSrc={logo}
              imgAlt={logo}
              className="w-[130px] ml-22 pt-11"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r  bg-[#0000007e] pointer-events-none "></div>
          <div className="loginForm  bg-black/83 m-auto mt-12 rounded-[4px]  w-max py-8 ">
            <h1 className="text-[24px] font-semibold ml-8 pb-4">Sign Up</h1>
            <div className="px-8  ">
              <input
                className="block h-[35px] pl-2 w-[250px] bg-[#666] text-[13px]  mt-4"
                type="text"
                placeholder="Your name"
              />
              <input
                className="block h-[35px] pl-2 w-[250px] bg-[#666] text-[13px]  mt-4"
                type="text"
                placeholder="Email"
              />
              <input
                className="block h-[35px] pl-2 w-[250px] bg-[#666] text-[13px]  mt-4"
                type="text"
                placeholder="Password"
              />
              <button className="cursor-pointer hover:bg-[#e50914]/40 h-[35px] w-[250px] mt-6 text-[13px] py-1 rounded-[3px] font-semibold bg-[#e50914]">
                Sign Up
              </button>
            </div>
            <div className=" flex justify-between mt-2 ">
              <div className="flex ml-8 gap-x-1">
                <input type="checkbox" className="size-3" />
                <p className="text-[9.5px] text-[#b3b3b3]">Remember Me</p>
              </div>
              <p className="text-[9.5px] cursor-default text-[#b3b3b3] mr-8 underline">Need Help?</p>
            </div>
            <div className="switchCard flex mt-8 ml-9 gap-x-2">
                 <p className="text-[9px] text-[#b3b3b3]">Already Have Account?</p>
                 <button  className="cursor-pointer text-[8px]" >Sign in Now</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
