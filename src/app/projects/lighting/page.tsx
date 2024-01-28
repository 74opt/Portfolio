// These imports will be removed in migration and figuring out what things actually do lmao
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";

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
        </div>
      </div>
    </main>
  )
}
