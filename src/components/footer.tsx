import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-[80px] flex justify-center">
      <div className="bg-black flex justify-between  min-h-[360px] w-full px-[120px] py-[70px]">
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <div className="">
              <Image
                src="/images/linguafooterlogo.svg"
                alt=""
                className={` w-auto h-[60px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p className="text-white font-light mt-4 leading-tight">
              Content available under a <span className="underline decoration-[0.5px] underline-offset-2">Creative
              <br /> Commons license</span>
            </p>
          </div>
          <div className="flex gap-x-4">
            <div className="">
              <Image
                src="/icons/facebook1.svg"
                alt=""
                className={` w-auto h-[30px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="">
              <Image
                src="/icons/instagram.svg"
                alt=""
                className={` w-auto h-[30px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="">
              <Image
                src="/icons/x.svg"
                alt=""
                className={` w-auto h-[30px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="text-[#AFAFB0]    ">
            <div className="flex items-center gap-x-[55px]">
                <div className=" flex flex-col gap-y-2">
                    <p><Link href="">Privacy</Link></p>
                    <p><Link href="">Terms</Link></p>
                    <p><Link href="">Cookies</Link></p>
                </div>
                <div className="w-[0.2px] h-[80px] bg-[#DADADA]"></div>
                <div className=" flex flex-col gap-y-2">
                    <p><Link href="">About</Link></p>
                    <p><Link href="">Github</Link></p>
                </div>
            </div>
           
        </div>
        <div className="text-white relative">
            <p className="text-2xl leading-relaxed">Sign up for The Voice newsletters, goal<br/> reminders and progress updates</p>
            <div className="mt-5">
                <input type="email" placeholder="Enter your email" className="w-[450px] h-[50px] placeholder:text-[#AFAFB0] placeholder:text-sm bg-[#373639] rounded-[30px] p-7 mt-4"/>
                <button className="absolute -translate-x-[110px] translate-y-[22px] px-3 text- text-white bg-[#00013A] rounded-[30px] text-center  w-[100px] py-[10px]">Submit</button>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
