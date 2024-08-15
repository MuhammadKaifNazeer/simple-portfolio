import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-6 sm:mx-10 lg:mx-56">
      <Navbar />
      <section className="max-w-[280px] sm:max-w-7xl mx-auto sm:h-screen flex flex-col sm:flex-row mt-[6rem] sm:mt-0 items-center justify-between">
        <div className="sm:w-3/5 ">
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
            Het there!
          </p>
          <h1 className="mt-2 sm:mt-0 scroll-m-20 text-2xl sm:text-3xl font-extrabold tracking-tight lg:text-4xl">
            i&apos;m Kaif, A Full-Stack Web Developer. ready to build your
            next...
          </h1>
          <blockquote className="mt-3 sm:mt-6 text-sm sm:text-md border-l-2 pl-3 sm:pl-6 italic">
            Turning innovative ideas into elegant web solutions that captivate
            and engage.
          </blockquote>
        </div>
        <div className="mt-[1.5rem] sm:mt-0">
          <Card className="p-5 rounded-[45px] bg-background h-72 w-72">
            <Link
              href="https://muhammadkaifnazeer.netlify.app/"
              target="_blank"
            >
              <Image
                src={"/kaif.jpg"}
                alt="Kaif"
                width={600}
                height={600}
                className="h-full w-full rounded-[25px] hover:grayscale transition duration-200 cursor-pointer"
              />
            </Link>
          </Card>
        </div>
      </section>
    </main>
  );
}
