import React from "react";
import cards_data from "../../assets/cards/Cards_data";
import Container from "../Container";
const TitleCards = ({headingLine}) => {
  return (
    <>
      <Container>
        <div className="titleCards mb-[6.5px] p-2 ">
          <h2 className="mb-5 mt-0.5 text-[18px]">{headingLine}</h2>
          <div className="w-[1250px]">

          <div className="cardlist flex gap-x-3 overflow-x-auto    scrollbar-hide relative">
            {cards_data.map((card, index) => {
              return (
                <div className="singleCard ">
                  <div className="w-[180px] ">
                    <img
                      src={card.image}
                      alt="cardImage"
                      className="object-contain object-center rounded-[4px] cursor-pointer "
                      />
                  </div>

                  <p className=" absolute bottom-1 pl-1 font-semibold text-[12px] whitespace-nowrap">
                    {card.name}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TitleCards;
