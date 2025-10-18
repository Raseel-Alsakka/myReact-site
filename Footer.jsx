import color from "./assets/color-sharp.png";
import color2 from "./assets/color-sharp2.png";
import logo from "./assets/logo.svg";
import icon1 from "./assets/nav-icon1.svg";
import icon2 from "./assets/nav-icon2.svg";
import icon3 from "./assets/nav-icon3.svg";
function Footer() {
  return (
    <>
      <div className=" w-screen h-screen " style={{  backgroundColor:"black",backgroundImage: `url(${color2}) ,url(${color})`,backgroundSize:"cover" }}>
       
          <div className="bg-white w-3/4 h-[45%] rounded-4xl relative z-20 -mt-17 ml-35">
            <div className="flex justify-between">
              <div className="w-[25%] pt-16 pl-15">
                <h1 className="font-bold text-2xl">
                  Subscribe to our Newsletter & Never miss latest update
                </h1>
              </div>
              <div className="w-[500px] h-20 border border-purple-500 rounded-4xl mt-20 mr-10">
                <div className="flex">
                  <p className="text-purple-500 pt-7 pl-7">Email Address</p>
                  <div className="pt-4 pl-32">
                    <p className="text-white bg-purple-700 w-52 h-12 pt-3 rounded-3xl">
                      Submit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative top-28 ">
            <div className="flex justify-between items-end">
              <div className="pl-7">
                <img src={logo}></img>
              </div>
              <div className="flex items-center gap-4 pr-10 ">
                <div className="  border-1 p-1 border-white rounded-full">
                  <a href="#">
                    {" "}
                    <img src={icon1} className="w-4 h-4" alt="Social Icon 1" />
                  </a>
                </div>

                <div className=" border-1 p-1 border-white rounded-full">
                  <a href="#">
                    <img src={icon2} className="w-4 h-4" alt="Social Icon 2" />
                  </a>
                </div>

                <div className="  border-1 p-1 border-white rounded-full">
                  <a href="#">
                    <img src={icon3} className="w-4 h-4" alt="Social Icon 3" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className=" text-white pl-[1050px] pt-3">
                Copyright 2025 All right resorved
              </p>
            </div>
          </footer>
        </div>
    
    </>
  );
}
export default Footer;
