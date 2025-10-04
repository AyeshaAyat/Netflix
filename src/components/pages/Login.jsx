import React from "react";
import Container from "../Container";
import logo from "../../assets/logo.png";
import Image from "../Image";
const Login = () => {
  return (
    <>
      <Container>
        <div className='relative main bg-[url("/src/assets/background_banner.jpg")] bg-cover bg-no-repeat w-full h-[600px]'>
          <div className="loginLogo">
            <Image
              imgSrc={logo}
              imgAlt={logo}
              className="w-[128px] ml-25 pt-6"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r bg-[#0000007e] pointer-events-none "></div>
          <div className="loginForm  bg-[#000000BF]  m-auto mt-10  w-max py-10 ">
            <h1 className="text-[24px] font-semibold ml-8 pb-4">Sign Up</h1>
            <div className="px-8  ">
              <input
                className="block h-[35px] pl-2 w-[265px] bg-[#333] text-[13px]  mt-4"
                type="text"
                placeholder="Your name"
              />
              <input
                className="block h-[35px] pl-2 w-[265px] bg-[#333] text-[13px]  mt-4"
                type="text"
                placeholder="Email"
              />
              <input
                className="block h-[35px] pl-2 w-[265px] bg-[#333] text-[13px]  mt-4"
                type="text"
                placeholder="Password"
              />
              <button className="cursor-pointer hover:bg-[#e50914]/60 h-[35px] w-[265px] mt-6 text-[13px] py-1 rounded-[3px] font-semibold bg-[#e50914]">
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
