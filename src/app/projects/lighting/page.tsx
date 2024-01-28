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
      <div>
        lights :)
      </div>
    </main>
  )
}