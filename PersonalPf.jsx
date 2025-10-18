import banner from './assets/banner-bg.png';

import header from './assets/header-img.svg'
import './index.css'
import Navbar from './Navbar';
function PersonalPf() {
  return (
    <>
   <Navbar/>
    <div id='Home' className='relative w-screen h-screen'>
    <div className="absolute inset-0 -z-10 w-full h-screen ">
      <img 
        src={banner} 
        alt="Background"
        className=" object-fill"
      />
</div>
<div className="flex justify-between items-center   ">
  <div className="w-1/2 space-y-4  ">
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold">
      Welcome to my portfolio
    </p>
    <h1 className="text-4xl font-bold text-white">
      Hi! I'm Raseel, <span className="text-purple-600">Front End Developer</span>
    </h1>
    <p className="text-gray-500  text-lg">
      I create beautiful, responsive websites with modern technologies.
      Let's build something amazing together!
    </p>
  </div>
<div className ='w-1/4 pt-48'>
<img src={header}  className='w-[400px] h-auto float pr-5' ></img>
</div>
</div>
<div>
  <a href="#" className=" flex justify-between text-xl text-white pb-5 pt-24 pl-7 ">Let's Connect  </a>
</div>
</div>

</>



  );
}

export default PersonalPf;