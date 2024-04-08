"use client"

import Image from "next/image";
import pepe from "@/public/Images/pepecat.png"
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {Content} from "@/app/content";
import {BoxArrowUpRight, Copy, Globe, Telegram, TwitterX} from "react-bootstrap-icons";

export default function Home() {

    const handleCopy = (text: string) => {
        if (window) {
            window.navigator.clipboard.writeText(text).then(() => {})
        }
    }

  return (
      <main className="pb-12">
          <section role="main" className={"px-2 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-8"}>
              <article role={"banner"} className={"flex flex-col sm:flex-row items-center justify-between"}>
                  <div className={"flex flex-col gap-4 items-center"}>
                      <h1 className={"text-3xl md:text-4xl font-bold uppercase"}>Welcome to new era with <br/> <span
                          className={"leading-[3rem] md:leading-[4rem] bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-[3rem] md:text-[4rem]"}>{Content.token} Token</span>
                      </h1>
                      <Button size={"lg"} className={"uppercase gap-4 flex items-center justify-between"}>
                          Buy on {Content.market} <BoxArrowUpRight/>
                      </Button>

                      <div className={"flex gap-2 items-center mt-8"}>
                          CA:
                          <Input defaultValue={Content.hash}/>
                          <Button onClick={() => handleCopy(Content.hash)} variant={"secondary"}>
                              <span className={"mr-2"}>COPY</span>
                              <Copy/>
                          </Button>
                      </div>
                  </div>

                  <picture className={""}>
                      <Image src={pepe} alt={"PepeCatWifHat"} width={300} height={300}
                             className={"w-[250px] h-[250px] md:w-[300px] md:h-[300px]"}/>
                  </picture>
              </article>
          </section>
          <section className={"max-w-screen-lg mx-auto mt-8 px-4"}>
              <h2 className={"text-4xl my-8 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-center"}>INTRODUCING
                  PEPECATWIFHAT TOKEN ($PCWH)</h2>
              <article>
                  <p>
                      $PCWH is a purr-fectly hilarious token built on the Solana blockchain. Combining the
                      internet&apos;s
                      beloved Pepe the Frog, adorable cats, and stylish hats, it&apos;s a recipe for crypto comedy gold!
                      This
                      meme-inspired gem brings non-stop fun and furry fashion to the blockchain, with NFTs showcasing
                      unique Pepe, cat, and hat combinations. Join the community of meme enthusiasts, cat lovers, and
                      hat aficionados, as we embark on a meow-nificent journey together. So grab your popcorn, put on
                      your favorite hat, and get ready to unleash the power of PepeCatwifhat Token on Solana&apos;s
                      speedy
                      network. Let the memes and meows reign supreme! 😸🎩 <span className={"text-cyan-400"}>#PCWH</span>
                      <span className={"text-cyan-400"}>#MemeMagic</span>
                  </p>
              </article>
          </section>

          <section className={"max-w-screen-lg mx-auto mt-8 px-4"}>

              <h2 className={"text-4xl md:text-[5rem] md:leading-[6rem] my-8 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-center"}>LIVE
                  CHART</h2>

              <style jsx>
                  {`
                      #dexscreener-embed {
                          position: relative;
                          width: 100%;
                          padding-bottom: 125%;
                      }

                      @media (min-width: 1400px) {
                          #dexscreener
                          -embed {
                              padding-bottom: 65%;
                          }
                      }

                      #dexscreener-embed
                      iframe {
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          top: 0;
                          left: 0;
                          border: 0;
                      }
                  `}
              </style>
              <div id="dexscreener-embed">
                  <iframe
                      src={`${Content.link}?embed=1&theme=dark`}></iframe>
              </div>
          </section>

          <section className={"max-w-screen-lg mx-auto mt-8 px-4 flex flex-col items-center"}>
              <h2 className={"text-4xl my-8 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-center"}>JOIN US ON SOCIAL MEDIA</h2>
              <ul className={"flex gap-4"}>
                  <li>
                      <Telegram size={42}/>
                  </li>
                  <li>
                      <TwitterX size={42}/>
                  </li>
                  <li>
                      <Globe size={42}/>
                  </li>
              </ul>
          </section>
      </main>
  );
}
