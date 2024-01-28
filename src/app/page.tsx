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
      <h1 className="p-10 text-5xl font-extrabold self-center tracking-tight sm:text-[5rem]">
        Matthieu De Robles
      </h1>
      <div className="flex items-start flex-row gap-8">
        <Link href="projects/lighting" className="group flex flex-row justify-center items-center">
          <div className="rounded-xl border-2 overflow-hidden object-fill group-hover:cursor-pointer transition duration-300 group-hover:blur-sm group-hover:scale-105">
            <Image src="/portfolio_images/theatre/lighting/jje/IMG_8597.JPG" width={800} height={600} alt="Judge Jury Executioner Image"/>
          </div>
          <h2 className="absolute select-none text-opacity-0 text-5xl font-bold text-gray-100 transition duration-400 group-hover:text-opacity-90 group-hover:cursor-pointer">
            Lighting Design
          </h2>
        </Link>
        <Link href="projects/stage_management" className="group flex flex-col justify-center items-center">
          <div className="rounded-xl border-2 overflow-hidden object-fill group-hover:cursor-pointer transition duration-300 group-hover:blur-sm group-hover:scale-105">
            <Image src="/portfolio_images/theatre/stage_management/clue/clue-5.jpg" width={800} height={600} alt="Stage Management Image"/>
          </div>
          <h2 className="absolute select-none text-opacity-0 text-5xl font-bold text-gray-100 transition duration-400 group-hover:text-opacity-90 group-hover:cursor-pointer">
            Stage Management
          </h2>
        </Link>
      </div>
      <div className="flex mt-auto items-center place-content-around text-blue-700 text-4xl font-semibold border-t-4 border-gray-400 min-w-full bg-blue-100">
        <Link href="about" className="p-3">
          About
        </Link>
        <div className="p-3">
          Contact
        </div>
      </div>
    </main>
  );

// T3 App's default template page
/*
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
*/
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
