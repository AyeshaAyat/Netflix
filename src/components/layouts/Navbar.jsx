import React from "react";
import Image from "../Image";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import downIcon from "../../assets/caret_icon.svg";
import Container from "../Container";

const Navbar = () => {
  return (
    <>
      <section className="Navbar mt-7 ml-7  ">
        <Container>
          <div className="main flex mt-8 ml-7">
            <div className="nav-left flex gap-x-15 ">
              <Image imgSrc={logo} imgAlt={logo} className="w-[90px] ml-2" />
              <div className="">
                <ul className="flex gap-x-5  ">
                  <li className="hover:text-gray-700 cursor-pointer text-[14px]">
                    Home
                  </li>
                  <li className="hover:text-gray-700 cursor-pointer text-[14px]">
                    TV Shows
                  </li>
                  <li className="hover:text-gray-700 cursor-pointer text-[14px]">
                    Movies
                  </li>
                  <li className="hover:text-gray-700 cursor-pointer text-[14px]">
                    New & popular
                  </li>
                  <li className="hover:text-gray-700 cursor-pointer text-[14px]">
                    My List
                  </li>
                  <li className="hover:text-gray-700 cursor-pointer text-[14px]">
                    Browse by Language
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-right flex gap-x-5 ml-70">
              <div className="flex gap-x-5 ">
                <Image
                  imgSrc={searchIcon}
                  imgAlt={searchIcon}
                  className="w-[16px] cursor-pointer "
                />
                <p className="text-[13px] mt-1 "> Children</p>
                <Image
                  imgSrc={bellIcon}
                  imgAlt={bellIcon}
                  className="w-[16px] cursor-pointer"
                />
              </div>
              <div className="profile flex ">

              <Image
                imgSrc={profileIcon}
                imgAlt={profileIcon}
                className="w-[22px] cursor-pointer rounded-[2px]"
                />
              <Image imgSrc={downIcon} imgAlt={downIcon} className="w-[7px] cursor-pointer ml-1.5 mt-2" />
                </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
