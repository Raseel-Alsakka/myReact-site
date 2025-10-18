import React from "react";
import Slider from "react-slick";
import color from "./assets/color-sharp.png";
import meter from "./assets/meter1.svg";
import meter3 from "./assets/meter3.svg";
import meter2 from "./assets/meter2.svg";

function Skills() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <>
      <div className=" relative w-screen h-screen bg-black " id="skills">
        <div className="absolute  w-full h-full  ">
          <img src={color} className="fill"></img>
        </div>
        <div className="pt-12 pl-48 ">
          <div className="bg-neutral-950 w-[80%] h-[500px] rounded-4xl pt-12 top-28   ">
            <h1 className="pb-7 text-white text-3xl ">Skills</h1>
            <p className="pb-7 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              dignissimos harum, laboriosam velit placeat, ad dolor pariatur
              sapiente tenetur, amet at officiis. Maxime, eaque debitis a vitae
              omnis consequatur blanditiis.
            </p>
            <div className="">
              <Slider {...settings}>
                <div>
                  <img src={meter} className="pb-2"></img>
                  <h1 className="text-white text-xl relative right-11">
                    Web Development
                  </h1>
                </div>
                <div>
                  <img src={meter2} className="pb-2"></img>
                  <h1 className="text-white text-xl relative right-11  ">
                    Brand Identity
                  </h1>
                </div>
                <div>
                  <img src={meter3} className="pb-2"></img>
                  <h1 className="text-white text-xl relative right-11 ">
                    Logo Design
                  </h1>
                </div>
                <div>
                  <img src={meter2} className="pb-2"></img>
                  <h1 className="text-white text-xl relative right-11  ">
                    Brand Identity
                  </h1>
                </div>
                <div>
                  <img src={meter} className="pb-2"></img>
                  <h1 className="text-white text-xl relative right-11">
                    Web Development
                  </h1>
                </div>
                <div>
                  <img src={meter3} className="pb-2"></img>
                  <h1 className="text-white text-xl relative right-11 ">
                    Logo Design
                  </h1>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
