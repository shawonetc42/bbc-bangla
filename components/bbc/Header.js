import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { HiOutlinePencilSquare,HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from 'next/router';
const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
function Header() {
  const router=useRouter();
  const { data: session } = useSession();
  console.log("Session",session)


  return (
    <div>
        <div className="bg-red-700 flex justify-between p-3  border-b-[2px] ">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fab4621bafdc12878b2aabce3f7564525b91ead831cec87827ede4416ec98a36?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-[9.2] object-contain object-center w-[276px] justify-center items-center overflow-hidden max-w-full ml-96 max-md:ml-2.5 max-sm:-ml-1"
      />
      <div className='flex gap-4'>
      {session? <button onClick={()=>router.push('/create-post')} className='bg-gray-700 px-3
             text-white rounded-full text-[12px]'>
                <span className='hidden sm:block'>
                    CREATE POST</span> 
                    <HiOutlinePencilSquare 
                    className='sm:hidden text-[17px]' /></button>:null}
            {!session?<button className='bg-white
             text-gray-500 p-1 px-3 text-[12px] border-[1px]
             rounded-full' onClick={()=>signIn()}>
                <span className='hidden sm:block'>
                    SIGN IN</span>
                <HiArrowLeftOnRectangle
                 className='sm:hidden text-[17px]' /></button>
                 :<button className='bg-white
                 text-gray-500 p-1 px-3 text-[12px] border-[1px]
                 rounded-full' onClick={()=>signOut()}>
                    <span className='hidden sm:block'>
                        SIGN OUT</span>
                    <HiArrowLeftOnRectangle
                     className='sm:hidden text-[17px]' /></button>}
       {session?  
       <Image src={session?session?.user?.image:USER_IMAGE} alt='user image'
        className='rounded-full cursor-pointer' onClick={()=>router.push('/profile')}
        width={40} height={40} />:null}
        </div>
    </div>
    
    <div className="bg-white self-stretch flex w-full flex-col justify-center items-center px-16 py-3.5 max-md:max-w-full max-md:px-5">
      <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <a href='/' className="text-neutral-900 text-lg hover:bg-slate-500  leading-6 whitespace-nowrap mt-px self-start max-sm:-mt-px">
          মূলপাতা
        </a>
        <a href='/' className="text-neutral-900 text-lg hover:bg-slate-500  leading-6 self-start">
          বিশ্ব
        </a>
        <a href='/' className="text-neutral-900 text-lg hover:bg-slate-500 leading-6 self-start">
          রাজনীতি
        </a>
        <a href='/' className="text-neutral-900 text-base hover:bg-slate-500 leading-6 self-start">
          অর্থনীতি
        </a>
        <a href='/' className="text-neutral-900 text-base hover:bg-slate-500 leading-6 self-center my-auto">
          স্বাস্থ্য
        </a>
        <a href='/' className="text-neutral-900 text-lg hover:bg-slate-500 leading-6 self-center my-auto">
          খেলা
        </a>
        <a href='/' className="text-neutral-900 text-base hover:bg-slate-500  leading-6 self-start">
          প্রযুক্তি
        </a>
        <a href='/' className="text-neutral-900 text-lg hover:bg-slate-500  leading-6 self-start">
          ভিডিও
        </a>
        <a href='/' className="text-neutral-900 text-base hover:bg-slate-500 leading-6 whitespace-nowrap self-start">
          সর্বাধিক পঠিত
        </a>
      </div>
      
    </div>
    </div>
  )
}

export default Header