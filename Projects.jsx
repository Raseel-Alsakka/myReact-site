
import { Link } from 'react-scroll'
import { useState } from 'react'
import Tab1 from'./Tab1'
import Tab3 from'./Tab3'

function Projects(){
    const[tabs,settabs]=useState("tab1") 
    
    return(
    <>
<div className=" relative w-screen h-screen bg-black " id='projects'> 
    <div className=" w-full h-screen">
        <h1 className="text-4xl  text-white pt-5 pb-3">Projects</h1>
        <div className=" flex justify-center items-center">
        <p className="text-white w-1/2 pb-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum aspernatur et consequatur animi voluptatibus rerum atque ad numquam ipsum pariatur veniam earum neque, deleniti unde quos excepturi blanditiis hic. lore</p>
    </div>
    <div className='pb-2'>
    <div className=" flex justify-around  bg-[#121212] rounded-3xl  w-[500px]  h-8 text-white m-auto">
<Link to='tab1' className='text-lg' onClick={()=>{settabs("tab1")}} >
<div className=' relative flex justify-center items-center w-[170px] hover:bg-gradient-to-r from-blue-500 to-purple-600  h-8 rounded-4xl '>
Tab 1
<span className="absolute right-0 h-6  border border-white"></span>
</div>
</Link>
<div className='relative flex justify-center items-center w-[170px] hover:bg-gradient-to-r from-blue-500 to-purple-600  h-8 rounded-4xl m-0 '>
<a href="#" className='text-lg '>Tab 2</a>
<span className="absolute right-0 h-6  border border-white"></span>
</div>
 <Link to='tab3' className='text-lg' onClick={()=>{settabs("tab3")}}>
 <div className=' flex justify-center items-center w-[170px] hover:bg-gradient-to-r from-blue-500 to-purple-600  h-8 rounded-4xl '>
Tab 3
</div>
</Link>
</div>
</div>
<div id='tab1'>
{tabs==="tab1"&&(<Tab1/>)}
    </div>
    <div id='tab3'>
        {tabs==="tab3"&&(<Tab3/>)}
    </div>
    </div>
    </div>
    </>
)
}
export default Projects