// These imports will be removed in migration and figuring out what things actually do lmao
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Carousel from "@component/app/_components/carousel";

export default async function Page() {
  noStore();

  return (
    <main className="flex flex-col items-center min-h-screen text-blue-800 bg-stone-100">
      <Link href="/" className="p-10 text-5xl font-extrabold self-center tracking-tight sm:text-[5rem] transition duration:200 hover:scale-110">
        Matthieu De Robles
      </Link>
      <div className="flex flex-col">
        <div className="flex flex-col justify-start pr-16 max-w-4xl">
          <h1 className="pt-8 pb-2 text-3xl font-bold">
            Judge, Jury, and Executioner
          </h1>
          <div className="text-xl">
            Judge, Jury, and Executioner was a production written, directed, and produced solely by Hunter College students within Hunter Theatre Company, telling the tale of a few unfortunate souls who must vote on who deserves to rise to heaven or fall to hell.   
          </div>
          <Carousel images={[
            "/portfolio_images/theatre/lighting/jje/IMG_8533.JPG",
            "/portfolio_images/theatre/lighting/jje/IMG_8597.JPG",
            "/portfolio_images/theatre/lighting/jje/IMG_8615.JPG",
            "/portfolio_images/theatre/lighting/jje/IMG_8621.JPG",
            "/portfolio_images/theatre/lighting/jje/IMG_8636.JPG",
            "/portfolio_images/theatre/lighting/jje/IMG_8652.JPG",
            "/portfolio_images/theatre/lighting/jje/IMG_8698.JPG",
            "/portfolio_images/theatre/lighting/jje/IMG_8708.JPG"
          ]}/>
          <h1 className="pt-8 pb-2 text-3xl font-bold">
            Digital Black Box Rendering
          </h1>
          <div className="text-xl">
            This is a render of a black box theatre I created as a project to scale down Hadestown to fit the spatial and financial constraints of a black box theatre. Illustrated within is the set and lights that would be utilized for the production. 
          </div>
          <Carousel images={[
            "/portfolio_images/theatre/lighting/hadestown_digital/hadestown1.png",
            "/portfolio_images/theatre/lighting/hadestown_digital/hadestown2.png",
            "/portfolio_images/theatre/lighting/hadestown_digital/hadestown3.png",
            "/portfolio_images/theatre/lighting/hadestown_digital/hadestown4.png",
            "/portfolio_images/theatre/lighting/hadestown_digital/hadestown5.png"
          ]}/>
        </div>
      </div>
    </main>
  )
}
