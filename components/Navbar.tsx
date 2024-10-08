import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center fixed top-5 left-0 ">
      <div className="h-14 border rounded-full flex items-center shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex space-x-4 mx-2 justify-between items-center">
          <Link href="https://muhammadkaifnazeer.netlify.app/" target="_blank">
            <Image
              src={"/kaif.jpg"}
              alt="Kaif"
              width={200}
              height={200}
              className="rounded-full w-10 h-10 hover:grayscale transition duration-200 cursor-pointer"
            />
          </Link>
          {/* github link */}
          <Link
            href={"https://github.com/MuhammadKaifNazeer"}
            target="_blank"
            aria-label="github"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon",
                className: "rounded-full ml-3 w-10 h-10",
              }),
            )}
          >
            <GitHubLogoIcon className="w-6 h-6" />
          </Link>

          <Link
            href={"https://x.com/MuhammadKaif999"}
            target="_blank"
            aria-label="Twitter"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon",
                className: "rounded-full ml-3 w-10 h-10",
              }),
            )}
          >
            <svg
              className="h-4 w-4 fill-current"
              height="23"
              viewBox="0 0 1200 1227"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/muhammadkaifnazeer/"}
            target="_blank"
            aria-label="linkedin"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon",
                className: "rounded-full ml-3 w-10 h-10",
              }),
            )}
          >
            <LinkedInLogoIcon className="w-6 h-6" />
          </Link>

          <div className="w-px bg-border h-8 " />
          <Link
            href={"https://www.linkedin.com/in/muhammadkaifnazeer/"}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "outline",
                className: "rounded-full ml-3 h-10 hidden sm:block",
              }),
            )}
          >
            Say Hello! 👋
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
