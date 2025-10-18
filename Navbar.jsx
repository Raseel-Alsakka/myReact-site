import logo from './assets/logo.svg'
import icon1 from './assets/nav-icon1.svg'
import icon2 from './assets/nav-icon2.svg'
import icon3 from './assets/nav-icon3.svg'
import { Link } from 'react-scroll'

function Navbar(){
    return(
        <>
        <div className='fixed top-0 left-0 right-0 flex items-center justify-between z-10 h-16 w-full bg-[#121212]'>
   <div className="flex items-center">
     <img 
       src={logo} 
       className='w-24 absolute left-10'
       alt="Website Logo"
     />
   </div>
   <div className='flex items-center gap-8 pr-7'>
     <nav className='flex gap-6 '>
       <Link to='Home' className='text-xl text-white cursor-pointer'>Home</Link>
       <Link to='skills' className='text-xl  text-white cursor-pointer'>Skills</Link>
       <Link to='projects' className='text-xl  text-white cursor-pointer' >Projects</Link >
     </nav>
     <div className='flex items-center gap-4 '>
       <div className="  border-1 p-1 border-white rounded-full">
        <a href='#'> <img src={icon1} className='w-4 h-4' alt="Social Icon 1"/></a>
       </div>
       
       <div className=" border-1 p-1 border-white rounded-full">
         <a href='#'><img src={icon2} className='w-4 h-4' alt="Social Icon 2"/></a>
       </div>
      
       <div className="  border-1 p-1 border-white rounded-full">
         <a href='#'><img src={icon3} className='w-4 h-4' alt="Social Icon 3"/></a>
       </div>
     </div>

    <a href="#"className="text-white  rounded-md border border-white cursor-pointer p-1 text-xl">
  Let's Contact
</a>
   </div>
</div>
        </>
    )
}
export default Navbar