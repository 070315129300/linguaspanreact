import Image from "next/image";
import styles from "./page.module.css";
import { Lato, Nunito_Sans } from "next/font/google";
import DesktopNavbar from "@/components/navbar/desktopNavbar";
import Footer from "@/components/footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
});

export default function Home() {
  return (
    <div className={`${nunitoSans.className}`}>
      {/* Hero Section */}
      <div className="relative md:px-[100px] lg:px-[200px] 2xl:px-[320px] bg-hero2-mobile  md:bg-hero2 bg-cover bg-no-repeat  xl:h-auto w-screen pb-[100px]">
        <DesktopNavbar />

        {/* hero text */}
        <div className="font-bold tracking-[0.5px] text-5xl flex flex-col justify-center items-center gap-y-3 mt-[56px]">
          <p>
            We help teach{" "}
            <span className="text-[#00013A] italic">machines</span> how
          </p>
          <div className="flex items-center">
            <p>You</p>
            <div className="px-2">
              <Image
                src="/images/africa.svg"
                alt=""
                className={` w-auto h-[58px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p>people speak</p>
          </div>
        </div>

        {/* hero big button */}
        <div className="flex justify-center relative">
          <div className="mt-[80px] ">
            {/* dotted arc image */}
            <div className=" ">
              <Image
                src="/images/dotted-curved-arc.svg"
                alt=""
                className={` w-auto h-[450px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            {/* review write listen speak icons */}

            <div className="group px-2 z-10 cursor-pointer absolute -translate-y-[403px] translate-x-[56px]">
              <Image
                src="/icons/write.svg"
                alt=""
                className={` w-auto h-[95px] group-hover:drop-shadow-[0px_4px_10px_rgba(255,165,0,0.6)]`}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="w-[1px] h-[70px] -translate-y-4 translate-x-12 bg-[#f7d285] opacity-0 group-hover:opacity-100"></div>

              {/* Tooltip Box (Hidden by Default, Shown on Hover) */}
              <div className="absolute top-[100%] -translate-y-4 -translate-x-14 bg-[rgba(250,223,166,0.8)] text-black p-3 rounded-xl shadow-md w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-center">"Write"</p>
                <p className="text-center">
                  Select "write" to start contributing to our Open data
                  collection
                </p>
              </div>
            </div>
            <div className="group px-2 z-10 absolute cursor-pointer -translate-y-[475px] translate-x-[190px] ">
              <Image
                src="/icons/speak.svg"
                alt=""
                className={`w-auto h-[95px] group-hover:drop-shadow-[0px_4px_10px_rgba(255,119,0,0.6)]`}
                width={0}
                height={0}
                sizes="100vw"
              />
              {/* Line Connecting Tooltip */}
              <div className="w-[1px] h-[70px] -translate-y-4 translate-x-12 bg-orange-500 opacity-0 group-hover:opacity-100"></div>

              {/* Tooltip Box (Hidden by Default, Shown on Hover) */}
              <div className="absolute top-[100%] -translate-y-4 -translate-x-14 bg-[#EFB5A5] text-black p-3 rounded-xl shadow-md w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-center">"Speak"</p>
                <p className="text-center">
                  Select "speak" to start contributing to our Open data
                  collection
                </p>
              </div>
            </div>
            <div className="group px-2 absolute cursor-pointer z-10 -translate-y-[475px] translate-x-[355px]">
              <Image
                src="/icons/listen.svg"
                alt=""
                className={` w-auto h-[95px] group-hover:drop-shadow-[0px_4px_10px_rgba(179,209,219,0.6)]`}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="w-[1px] h-[70px] -translate-y-4 translate-x-12 bg-[#b5d5df] opacity-0 group-hover:opacity-100"></div>

              {/* Tooltip Box (Hidden by Default, Shown on Hover) */}
              <div className="absolute top-[100%] -translate-y-4 -translate-x-14 bg-[rgba(181,213,223,0.7)] text-black p-3 rounded-xl shadow-md w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-center">"Listen"</p>
                <p className="text-center">
                  Select "listen" to start contributing to our Open data
                  collection
                </p>
              </div>
            </div>
            <div className="group px-2 absolute cursor-pointer z-10 -translate-y-[403px] translate-x-[500px]">
              <Image
                src="/icons/review.svg"
                alt=""
                className={` w-auto h-[95px] group-hover:drop-shadow-[0px_4px_10px_rgba(0,0,0,0.2)]`}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="w-[1px] h-[70px] -translate-y-4 translate-x-12 bg-black opacity-0 group-hover:opacity-100"></div>

              {/* Tooltip Box (Hidden by Default, Shown on Hover) */}
              <div className="absolute top-[100%] -translate-y-4 -translate-x-14 bg-[rgba(184,181,181,0.9)] text-black p-3 rounded-xl shadow-md w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-center">"Review"</p>
                <p className="text-center">
                  Select "review" to start contributing to our Open data
                  collection
                </p>
              </div>
            </div>
            <div className="px-2 absolute translate-x-[70px] -translate-y-[400px]">
              <Image
                src="/images/heroBigButton.svg"
                alt=""
                className={` w-auto h-[490px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------- */}
      <div className="lg:px-[120px] ">
        <div className="flex justify-center gap-x-4 pt-[80px] ">
          <div className="">
            <Image
              src="/images/man1.svg"
              alt=""
              className={` w-auto h-[250px] rounded-lg`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="">
            <Image
              src="/images/man2.png"
              alt=""
              className={` w-auto h-[250px] rounded-lg`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="flex flex-col items-center rounded-lg bg-[#e6f7f8] h-fit py-4 px-6 gap-y-3">
            <p className="text-[#4F4F4F] text-center">
              Start speaking, listening,
              <br /> writing and reviewing
              <br />
              numerous languages
            </p>
            <div className=" w-full">
              <button
                type="button"
                className="px-3 text-lg text-white bg-[#00013A] rounded-[30px] text-center  w-full py-3"
              >
                Join us
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/woman1.svg"
              alt=""
              className={` w-auto h-[250px] rounded-lg`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="">
            <Image
              src="/images/man3.svg"
              alt=""
              className={` w-auto h-[250px] rounded-lg`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        {/* voices div */}
        <div className="flex items-center justify-between px-2 mt-4">
          <div className="bg-black text-lg flex gap-x-2 items-center py-3 px-7 rounded-lg">
            <div className="">
              <Image
                src="/images/sound1.png"
                alt=""
                className={` w-auto h-[60px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p className="text-white leading-tight">
              Over 1Million
              <br /> Voices
            </p>
          </div>
          <div className="flex items-center bg-white px-4 !py-2 gap-x-4 h-[60px] shadow-lg rounded-xl">
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
          </div>
          <div className="bg-black text-lg  flex gap-x-1 items-center py-3 px-7 rounded-lg">
            <div className="">
              <Image
                src="/images/sound.svg"
                alt=""
                className={` w-auto h-[60px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p className="text-white leading-tight">
              Over 1Million
              <br /> Sentences
            </p>
          </div>
        </div>
      </div>

      {/* --africa logo */}
      <div className="flex justify-center px-[125px] mt-[100px]">
        <div className="flex justify-between items-center w-full pb-[90px] rounded-[20px] bg-white drop-shadow-2xl p-10">
          <div className="flex flex-col gap-y-8">
            <div className="">
              <Image
                src="/images/sound3.svg"
                alt=""
                className={` w-auto h-[50px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p className="max-w-[500px] leading-relaxed text-3xl text-[#040408] italic">
              The Voice is an initiative to help teach machines how real people
              speak.
            </p>
            <div className="">
              <Image
                src="/images/bigAfrica.svg"
                alt=""
                className={` w-auto h-[390px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-10 text-2xl text-[#4F4F4F]">
            <p className="max-w-[528px] leading-relaxed">
              Voice is natural, voice is human. That&apos;s why we&apos;re
              excited about creating usable voice technology for our machines.
              But to create voice systems, developers need an extremely large
              amount of voice data
            </p>
            <p className="leading-relaxed max-w-[528px]">
              Most of the data used by large companies isn&apos;t available to
              the majority of people. We think that stifles innovation. So
              we&apos;ve launched Common{" "}
              <span className="uppercase text-[#00013A] font-semibold">
                LEARN MORE
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center  px-[124px] pt-[120px] ">
        <div className="p-12 bg-white w-full justify-between flex drop-shadow-xl rounded-2xl ">
        <div className="">
          <Image
            src="/images/chart1.svg"
            alt=""
            className={` w-auto h-[390px] `}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="">
          <Image
            src="/images/chart2.svg"
            alt=""
            className={` w-auto h-[390px] `}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        </div>
        
      </div>
      <div className="flex justify-center px-[124px] pt-[120px] ">
        <div className="bg-white w-full drop-shadow-2xl rounded-[20px] ">
          <div className="flex justify-between items-center pt-12 px-[80px]">
            <div className="">
              <Image
                src="/images/ai-brain.svg"
                alt=""
                className={` w-auto h-[380px] `}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="flex items-center">
              <p className="text-[#040408] leading-[65px] text-5xl italic font-semibold">Want to <br/>donate<br/>your<br/>voice?</p>
              <div className="cursor-pointer">
                <Image
                  src="/images/blue-mic.svg"
                  alt=""
                  className={` w-auto h-[170px] `}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </div>

          </div>
          <div className="">
            <div className="">
                  <Image
                    src="/images/wave.png"
                    alt=""
                    className={` w-full `}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
