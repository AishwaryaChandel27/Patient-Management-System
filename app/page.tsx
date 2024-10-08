import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoFull from '../public/assets/icons/logo-full.svg';
import Patients from "@/components/forms/Patients";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen"> 
       <section className="remove-scrollbar container my-auto">
         <div className="sub-container max-w-[496px] ">
         <Image 
              src={logoFull} 
                height={1000}
                  width={1000}
                    alt="patient"
                      className="mb-12 h-10 w-fit"
          />
          <Patients/>
          <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
          ©carepulse 2024
          </p>
          <Link href="./admin=true" className="text-green-500"> 
          Admin
          </Link>
          </div>
         </div>
       </section>
           <Image
           src="/assets/images/onboarding-img.png"
           height={1000}
           width={1000}
           alt="Patients"
           className="side-img max-w-[50%]"
           />
      </div>
  );
}
