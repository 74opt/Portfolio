import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Carousel from "@component/app/_components/carousel";

// TODO: possibly, build react components for each show and the header
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
                    Once Upon A Mattress (Script Scans Coming Soon!)
                </h1>
                <div className="text-xl">
                    Once Upon A Mattress, a musical based off of the 1835 tale of &quot;The Princess and the Pea&quot;, was performed by Brooklyn Technical High School&apos;s 2023 spring semester.
                </div>
                <Carousel images={[
                    "/portfolio_images/theatre/stage_management/ouam/23_musical-12.jpg",
                    "/portfolio_images/theatre/stage_management/ouam/23_musical-16.jpg",
                    "/portfolio_images/theatre/stage_management/ouam/23_musical-17.jpg",
                    "/portfolio_images/theatre/stage_management/ouam/23_musical-19.jpg",
                    "/portfolio_images/theatre/stage_management/ouam/23_musical-42.jpg",
                    "/portfolio_images/theatre/stage_management/ouam/23_musical-58.jpg",
                    "/portfolio_images/theatre/stage_management/ouam/20230331-OUAM-40.jpg",
                    "/portfolio_images/theatre/stage_management/ouam/20230331-OUAM-131.jpg",

                ]}/>
                <h1 className="pt-8 pb-2 text-3xl font-bold">
                    Clue (Script Scans Coming Soon!)
                </h1>
                <div className="text-xl">
                    Clue, based on the cult classic 1985 film written and directed by Johnathan Lynn, adapted for the stage by Sandy Rustin in 2017, was performed by Brooklyn Technical High School&apos; 2022-2023 fall and winter semester, and was my first show as a stage manager.
                </div>
                <Carousel images={[
                    "/portfolio_images/theatre/stage_management/clue/clue-5.jpg",
                    "/portfolio_images/theatre/stage_management/clue/clue-7.jpg",
                    "/portfolio_images/theatre/stage_management/clue/clue-9.jpg",
                    "/portfolio_images/theatre/stage_management/clue/clue-12.jpg",
                    "/portfolio_images/theatre/stage_management/clue/clue-13.jpg",
                    "/portfolio_images/theatre/stage_management/clue/clue-73.jpg",
                    "/portfolio_images/theatre/stage_management/clue/clue-95.jpg",
                    "/portfolio_images/theatre/stage_management/clue/clue-99.jpg",
                ]}/>
                </div>
            </div>
        </main>       
    );
}