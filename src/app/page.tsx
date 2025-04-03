import Image from "next/image";
import styles from "./page.module.css";
import { Lato, Nunito_Sans } from "next/font/google";
import DesktopNavbar from "@/components/navbar/desktopNavbar";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
});


export default function Home() {
  return (
    <div className={`${nunitoSans.className}`}>

      {/* Hero Section */}
      <div className="">
        <DesktopNavbar/>

      </div>

    </div>
  );
}
