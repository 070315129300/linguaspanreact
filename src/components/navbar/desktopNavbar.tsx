import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

const DesktopNavbar = () => {
  return (
    <div className="hidden xl:flex justify-center ">
      <div
        className={` w-full 2xl:max-w-[980px] flex justify-between items-center pt-3`}
      >
        <div className="relative">
          <Image
            src="/images/Linguaspan-authLogo.svg"
            alt=""
            className={` w-auto h-[67px] `}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="flex items-center gap-x-8">
          <div className="">
            <Accordion type="single" collapsible className="bg-white  ">
              <AccordionItem value="item-1" className={`px-5`}>
                <AccordionTrigger className="text-[#040408] uppercase font-medium">
                  <p>Contribute</p>
                </AccordionTrigger>
                <AccordionContent
                  className="max-w-[140px]  md:min-w-[235px] !z-1000 !bg-white text-white space-y-3 
                        bg-white text-[#7B7583]"
                >
                  <div className="bg-[#e5e5ea] w-full">
                    <p className="font-bold text-[#00013A] p-3">
                      Voice Collection
                    </p>
                  </div>

                  <div className="flex items-center gap-x-2 pl-3">
                    <div className="">
                      <Image
                        src="/icons/microphone.svg"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-[#4F4F4F]">Speak</p>
                  </div>
                  <hr />
                  <div className="flex items-center gap-x-2 pl-3">
                    <div className="">
                      <Image
                        src="/icons/sound.png"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-[#4F4F4F]">Listen</p>
                  </div>
                  <div className="bg-[#fdf3f0] w-full p-3">
                    <p className="font-bold text-[#F2876A]">
                      Sentence Collection
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2 pl-3">
                    <div className="">
                      <Image
                        src="/icons/message-edit.svg"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-[#4F4F4F]">Write</p>
                  </div>
                  <hr />
                  <div className="flex items-center gap-x-2 pl-3">
                    <div className="">
                      <Image
                        src="/icons/firstline.svg"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-[#4F4F4F]">Review</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-[#040408] uppercase font-medium">Languages</div>
          <div className="text-[#040408] uppercase font-medium">About</div>
        </div>

        <div className="">
          <div className="">
            <Accordion type="single" collapsible className="bg-white  ">
              <AccordionItem value="item-1" className={`px-5`}>
                <AccordionTrigger className="flex gap-x-2 bg-[#00013A] rounded-[20px] text-white uppercase font-medium px-4">
                <div className="relative">
                    <Image
                        src="/icons/alien.svg"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                  <p>IP</p>
                </AccordionTrigger>
                <AccordionContent
                  className="max-w-[140px]  md:min-w-[235px] !z-1000 !bg-white text-white space-y-3 
                        bg-white text-[#7B7583]"
                >
                
                  <div className="flex items-center gap-x-2 pl-3">
                    <div className="">
                      <Image
                        src="/icons/keyboard-open.svg"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-[#4F4F4F]">Dashboard</p>
                  </div>
                  <hr />
                  <div className="flex items-center gap-x-2 pl-3">
                    <div className="">
                      <Image
                        src="/icons/profile-add.png"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-[#4F4F4F]">Profile</p>
                  </div>
                  <hr/>
                  <div className="flex items-center gap-x-2 pl-3">
                    <div className="">
                      <Image
                        src="/icons/logout.png"
                        alt=""
                        className={` w-auto h-[27px] `}
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                    <p className="text-[#4F4F4F]">Logout</p>
                  </div>
                
                  
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
