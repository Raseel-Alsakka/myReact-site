import contact from'./assets/contact-img.svg'
function Information(){
    return(
        <>
        <div className="relative w-screen h-screen bg-gradient-to-r from-purple-600 to-blue-500">
<div className=" w-full h-screen">
<div className='flex justify-between'>
<img className='w-lg pt-32' src={contact}></img>
<div className=' pl-15'>
<div className='m-6 '>
<h1 className='text-white mb-8 text-3xl '>Get In Touch</h1>
<input type='text' className='text-white border border-white mr-7  rounded-4xl  h-12 pl-3 ' placeholder="First Name" ></input>
<input type='text' className='text-white border border-white   rounded-4xl  h-12 pl-3  ' placeholder="Last Name" ></input>
</div>
<div className=''>
<input type='email' className='text-white border border-white mr-7 pl-3 rounded-4xl  h-12 ' placeholder="Email Address"  ></input>
<input type='phone number' className='text-white border border-white  rounded-4xl  h-12 pl-3  ' placeholder="phone Number" ></input>
</div>
<div className=''>
<textarea className='border border-white text-white mt-8  w-[450px] h-60 rounded-4xl pl-5 pt-5' placeholder='Mesaage'></textarea>
</div>
<div>
    <button type='submit' className='bg-white text-black text-center w-20 h-10 font-bold mr-[380px] mt-3'>send</button>
</div>
</div>

<div>
   
</div>

</div>

</div>

        </div>
        </>
    )
}
export default Information