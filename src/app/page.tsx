import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";

import { CreatePost } from "@component/app/_components/create-post";
import { getServerAuthSession } from "@component/server/auth";
import { api } from "@component/trpc/server";

export default function Page() {
  noStore();

  // Working with this for now to model the homepage, will have to fix file structures and pages later
  return (
    <main className="flex flex-col items-center min-h-screen text-blue-800 bg-stone-100">
      <Link href="/" className="p-10 text-5xl font-extrabold self-center tracking-tight sm:text-[5rem] transition duration:200 hover:scale-110">
        Matthieu De Robles
      </Link>
      <div className="flex items-start flex-row gap-8">
        <Link href="projects/lighting" className="group flex flex-row justify-center items-center">
          <div className="rounded-xl border-2 overflow-hidden object-fill group-hover:cursor-pointer transition duration-300 group-hover:blur-sm group-hover:scale-105">
            <Image src="/portfolio_images/theatre/lighting/jje/IMG_8597.JPG" width={800} height={600} alt="Lighting Design Image"/>
          </div>
          <h2 className="absolute select-none text-opacity-0 text-5xl font-bold text-gray-50 transition duration-400 group-hover:text-opacity-90 group-hover:cursor-pointer">
            Lighting Design
          </h2>
        </Link>
        <Link href="projects/stage_management" className="group flex flex-col justify-center items-center">
          <div className="rounded-xl border-2 overflow-hidden object-fill group-hover:cursor-pointer transition duration-300 group-hover:blur-sm group-hover:scale-105">
            <Image src="/portfolio_images/theatre/stage_management/clue/clue-5.jpg" width={800} height={600} alt="Stage Management Image"/>
          </div>
          <h2 className="absolute select-none text-opacity-0 text-5xl font-bold text-gray-50 transition duration-400 group-hover:text-opacity-90 group-hover:cursor-pointer">
            Stage Management
          </h2>
        </Link>
      </div>
      <div className="flex mt-auto items-center place-content-around text-blue-700 text-4xl font-semibold border-t-4 border-gray-400 min-w-full bg-blue-100">
        <Link href="about" className="p-3 hover:underline">
          About
        </Link>
        {/* This is going to be commented out for now because I don't see a use for it
        <Link href="contact" className="p-3 hover:underline">
          Contact
        </Link>
        */}
      </div>
    </main>
  );
}
