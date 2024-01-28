// These imports will be removed in migration and figuring out what things actually do lmao
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";

// Need to figure out function naming convention, this page is being based off of page.tsx
export default async function Page() {
  noStore();

  return (
    <main className="flex flex-col items-center min-h-screen text-blue-800 bg-stone-100">
      <h1 className="p-10 text-5xl font-extrabold self-center tracking-tight sm:text-[5rem]">
        Matthieu De Robles
      </h1>
    </main>
  )
}