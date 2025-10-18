import Pimg1 from "./assets/project-img1.png";
import Pimg2 from "./assets/project-img2.png";
import Pimg3 from "./assets/project-img3.png";
import { useState } from "react";

function Tab1() {
  const [ishover1, setishover1] = useState("-translate-y-200 ");
  const [ishover2, setishover2] = useState("-translate-y-200 ");
  const [ishover3, setishover3] = useState("-translate-y-200 ");
  const [ishover4, setishover4] = useState("-translate-y-200 ");
  const [ishover5, setishover5] = useState("-translate-y-200 ");
  const [ishover6, setishover6] = useState("-translate-y-200 ");
  function sta(index) {
    if (index === 0) {
      return ishover1;
    }
    if (index === 1) {
      return ishover2;
    }
    if (index === 2) {
      return ishover3;
    }
    if (index === 3) {
      return ishover4;
    }
    if (index === 4) {
      return ishover5;
    }
    if (index === 5) {
      return ishover6;
    }
  }
  const Images = [
    {
      src: Pimg1,
      setIsHoverEn: () => setishover1("-translate-y-50 "),
      setIsHoverLe: () => setishover1("-translate-y-200 "),
    },
    {
      src: Pimg2,
      setIsHoverEn: () => setishover2("-translate-y-50 "),
      setIsHoverLe: () => setishover2("-translate-y-200 "),
    },
    {
      src: Pimg3,
      setIsHoverEn: () => setishover3("-translate-y-50 "),
      setIsHoverLe: () => setishover3("-translate-y-200 "),
    },
    {
      src: Pimg1,
      setIsHoverEn: () => setishover4("-translate-y-50 "),
      setIsHoverLe: () => setishover4("-translate-y-200 "),
    },
    {
      src: Pimg2,
      setIsHoverEn: () => setishover5("-translate-y-50 "),
      setIsHoverLe: () => setishover5("-translate-y-200 "),
    },
    {
      src: Pimg3,
      setIsHoverEn: () => setishover6("-translate-y-50 "),
      setIsHoverLe: () => setishover6("-translate-y-200 "),
    },
  ];

  return (
    <>
      <div className=" bg-black  ">
        <div className=" grid grid-rows-2 grid-cols-3 gap-3 w-[100%]  m-auto ">
          {Images.map((img, index) => (
            <div
              key={index}
              className=" overflow-hidden  w-[275px] h-[200px] ml-15"
              onMouseEnter={() => {
                img.setIsHoverEn();
              }}
              onMouseLeave={() => {
                img.setIsHoverLe();
              }}
            >
              <img src={img.src}></img>
              <div
                className={`bg-purple-400 opacity-90 text-white font-bold  w-[275px] h-[200px] text-xl rounded-2xl ${sta(
                  index
                )} transition-all duration-1000 delay-0 ease-in-out `}
              >
                <h1 className="pt-24 w-full ">Business Startup </h1>
                <h1 className="italic text-white opacity-60 ">
                  Design & Development
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Tab1;


           