import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { Document, Page } from 'react-pdf';

export default async function UI() {
  noStore();

  return (
    <main className="flex flex-col items-center min-h-screen text-blue-800 bg-stone-100">
      <Link href="/" className="p-10 text-5xl font-extrabold self-center tracking-tight sm:text-[5rem] transition duration:200 hover:scale-110">
        Matthieu De Robles
      </Link>
      <div className="flex flex-col">
        <div className="py-8 px-16 text-3xl font-bold">
          Hi, I&apos;m Matt!
        </div>
        <div className="pt-2 px-16 text-2xl">
          I&apos;m a student at the City University of New York&apos;s <b>Hunter College</b>, an undergrad double majoring in <b>Computer Science and Theatre</b>. I&apos;ve worked as a <b>stage manager, lighting designer, and stagehand</b> throughout various productions these past few years. I&apos;m always looking for new opportunities to learn and grow, so feel free to reach out! Thanks for visiting! 
        </div>
        <div className="flex flex-row">
          <div>
            <div className="px-16 pt-10 pb-2 text-3xl font-bold">
              Resume
            </div>
            <object className="scale-120 px-16 pb-10" data="/resume.pdf?#zoom=83" type="application/pdf" width="840vw" height="990vh"></object>
          </div>
          <div>
            <div className="px-32 pt-10 pb-3 text-3xl font-bold">
              Check Me Out or Contact Me!
            </div>
            <div className="px-32 pb-3 flex flex-row">
              <Image src="/linkedin.png" alt="LinkedIn Logo" width={32} height={16}></Image>
              <a className="pl-1 text-2xl hover:underline" href="https://www.linkedin.com/in/matthieu-de-robles-086a6228a/">LinkedIn</a>
            </div>
            <div className="px-32 pb-3 flex flex-row">
              <Image src="/github.png" alt="GitHub Logo" width={32} height={16}></Image>
              <a className="pl-1 text-2xl hover:underline" href="https://github.com/74opt">Github</a>
            </div>
            <div className="px-32 pb-3 flex flex-row">
              <Image src="/gmail.png" alt="Gmail Logo" width={36} height={12}></Image>
              <a className="pl-1 text-2xl hover:underline" href="mailto:matthieuderobles@gmail.com">Email</a>
            </div>
            {/* Email Form??? */}
          </div>
        </div>
      </div>
    </main>
  )
}

