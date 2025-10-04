import React from "react";
import Navbar from "../layouts/Navbar";
import herotitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import Container from "../Container";
import Image from "../Image";
import TitleCards from "../layouts/TitleCards";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="BannerPart">
        <Container>
          <div className=" hero ">
            <div className="relative">
              <img
                src="/public/hero_banner.jpg"
                alt="/public/hero_banner.jpg"
                className="object-fill bg-no-repeat object-center h-[650px] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent"></div>
              <div className="heroCaption absolute bottom-0 pl-13 ">
                <Image
                  imgSrc={herotitle}
                  imgAlt={herotitle}
                  className="w-[24%] mb-5.5 "
                />

                <p className="text-[10px] w-[420px] mb-3">
                  Discovering his ties to a secret ancient order, a young man
                  living in modern Istanbul embarks on a quest to save the city
                  from an immortal enemy.
                </p>
                <div className="gap-x-3 flex mt-4.5 mb-7 ">
                  <button className="gap-x-1 bg-white hover:bg-[#ffffffbf] text-[13px] flex font-semibold cursor-pointer rounded-[2px]  text-black items-center py-1 px-3">
                    <>
                      <img src={playIcon} className="w-[15px] " />
                      Play
                    </>
                  </button>
                  <button className="gap-x-1 bg-[#6d6d6eb3] hover:bg-[#6d6d6e66] text-[13px] flex font-semibold cursor-pointer rounded-[2px]  text-white items-center py-1 px-2">
                    <>
                      <img src={infoIcon} className=" w-[18px]" />
                      More Info
                    </>
                  </button>
                </div>
                <TitleCards headingLine="Popular on Netflix" />
              </div>
            </div>
            <div className="more-cards  gap-y-15 mt-10  pl-13">
              <TitleCards headingLine="Blockbuster Movies" />
              <TitleCards headingLine="Trending Now" />

              <TitleCards headingLine="Upcoming" />
              <TitleCards headingLine="Available in Netflix" />
            </div>
            <Footer/>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
