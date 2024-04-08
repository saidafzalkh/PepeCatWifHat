"use client"

import Image from "next/image";
import pepe from "@/public/Images/pepecat.png"
import pepe_teen from "@/public/Images/teen.png"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input"
import {Content} from "@/app/content";
import {BoxArrowUpRight, Copy, Globe, List, Telegram, TwitterX} from "react-bootstrap-icons";
import {toast} from "sonner";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import {useState} from "react";

export default function Home() {

    const handleCopy = (text: string) => {
        if (window) {
            window.navigator.clipboard.writeText(text).then(() => {
                toast('Copy to clipboard');
            })
        }
    }

    const [isTOCOpen, setIsTOCOpen] = useState(false);

    return (
        <main className="pb-12 animated-background bg-gradient-to-r from-red-400 via-yellow-500 to-pink-400">

            <header
                className={"pt-8 flex items-center justify-end px-2 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg mx-auto"}>

                <Button variant={'ghost'} onClick={(e) => {
                    setIsTOCOpen(true);
                }}>
                    <List size={42}/>
                </Button>

                <Sheet open={isTOCOpen}>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Table of Content</SheetTitle>
                            <SheetDescription>
                                <nav>
                                    <ul className={"flex flex-col gap-2"}>
                                        <li>
                                            <Link className={"text-xl hover:text-blue-500 "}
                                                  onClick={(e) => {
                                                      setIsTOCOpen(false);
                                                  }}
                                                  href={"#main"}
                                            >
                                                Main
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={"text-xl hover:text-blue-500 "}
                                                  onClick={(e) => {
                                                      setIsTOCOpen(false);
                                                  }}
                                                  href={"#about"}
                                            >
                                                Information
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={"text-xl hover:text-blue-500 "}
                                                  onClick={(e) => {
                                                      setIsTOCOpen(false);
                                                  }}
                                                  href={"#tokenomics"}
                                            >
                                                Tokenomics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={"text-xl hover:text-blue-500 "}
                                                  onClick={(e) => {
                                                      setIsTOCOpen(false);
                                                  }}
                                                  href={"#chart"}
                                            >
                                                Live Chart
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className={"text-xl hover:text-blue-500 "}
                                                  onClick={(e) => {
                                                      setIsTOCOpen(false);
                                                  }}
                                                  href={"#footer"}
                                            >
                                                Links
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </header>

            <section id={"main"} role="main" className={"px-2 lg:px-0 md:max-w-screen-md lg:max-w-screen-lg mx-auto"}>
                <article role={"banner"} className={"flex flex-col-reverse sm:flex-row items-center justify-between"}>
                    <div className={"flex flex-col gap-4 items-center"}>
                        <h1 className={"text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase"}>Welcome
                            to new
                            era
                            with <br/> <span
                                className={"animated-background text-3xl sm:leading-[3rem] md:leading-[4rem] bg-gradient-to-r from-blue-500 to-cyan-900 bg-clip-text text-transparent text-[3rem] md:text-[4rem]"}>{Content.token} Token</span>
                        </h1>
                        <Button size={"lg"} className={"uppercase gap-4 flex items-center justify-between"}>
                            Buy on {Content.market} <BoxArrowUpRight/>
                        </Button>

                        <div className={"flex gap-2 items-center mt-8"}>
                            <span className={"text-white font-bold text-xl"}>CA:</span>
                            <Input defaultValue={Content.ca}/>
                            <Button onClick={() => handleCopy(Content.ca)} variant={"secondary"}>
                                <span className={"mr-2"}>COPY</span>
                                <Copy/>
                            </Button>
                        </div>
                    </div>

                    <picture className={"mb-4"}>
                        <Image src={pepe} alt={"PepeCatWifHat"} width={300} height={300}
                               className={"w-[250px] h-[250px] md:w-[300px] md:h-[300px]"}/>
                    </picture>
                </article>
            </section>

            <section id={"about"} className={"max-w-screen-lg mx-auto mt-8 px-4"}>
                <h2 className={"text-4xl my-8 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-center"}>INTRODUCING
                    PEPECATWIFHAT TOKEN ($PCWH)</h2>
                <div className={"flex flex-col sm:flex-row w-full items-center gap-4"}>
                    <picture className={"w-full sm:w-1/2 flex items-center justify-center"}>
                        <Image src={pepe_teen} alt={"PepeCatWifHat"} width={300} height={300}
                               className={"w-[250px] h-[250px] md:w-[300px] md:h-[300px]"}/>
                    </picture>
                    <article className={"w-full sm:w-1/2"}>
                        <p className={"text-white"}>
                            $PCWH is a purr-fectly hilarious token built on the Solana blockchain. Combining the
                            internet&apos;s
                            beloved Pepe the Frog, adorable cats, and stylish hats, it&apos;s a recipe for crypto comedy
                            gold!
                            This
                            meme-inspired gem brings non-stop fun and furry fashion to the blockchain, with NFTs
                            showcasing
                            unique Pepe, cat, and hat combinations. Join the community of meme enthusiasts, cat lovers,
                            and
                            hat aficionados, as we embark on a meow-nificent journey together. So grab your popcorn, put
                            on
                            your favorite hat, and get ready to unleash the power of PepeCatwifhat Token on
                            Solana&apos;s
                            speedy
                            network. Let the memes and meows reign supreme! 😸🎩 <span
                            className={"text-purple-800"}>#PCWH</span>
                            <span className={"text-purple-800"}>#MemeMagic</span>
                        </p>
                    </article>
                </div>
            </section>

            <section id={"tokenomics"} className={"max-w-screen-lg mx-auto mt-8 px-4"}>
                <h2 className={"text-4xl my-8 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-center"}>TOKENOMICS</h2>

                <div className={"flex flex-col md:flex-row gap-4"}>
                    <div
                        className={"w-full md:w-1/3 p-4 flex flex-col items-center gap-2 border-2 border-white rounded-xl text-white"}>
                        <h4 className={"text-xl font-bold"}>Total Supply</h4>
                        <p className={"text-xl"}>{Content.supply}</p>
                    </div>
                    <div
                        className={"w-full md:w-1/3 p-4 flex flex-col items-center gap-2 border-2 border-white rounded-xl text-white"}>
                        <h4 className={"text-xl font-bold"}>LP Burned</h4>
                        <p className={"text-xl"}>{Content.lp}</p>
                    </div>
                    <div
                        className={"w-full md:w-1/3 p-4 flex flex-col items-center gap-2 border-2 border-white rounded-xl text-white"}>
                        <h4 className={"text-xl font-bold"}>CA</h4>
                        <div className={"flex gap-2"}>
                            <Input defaultValue={Content.ca} className={"max-w-[150px] text-black"}/>
                            <Button onClick={() => handleCopy(Content.ca)} variant={"secondary"}>
                                <span className={"mr-2"}>COPY</span>
                                <Copy/>
                            </Button>
                        </div>
                    </div>
                </div>

                <a href={Content.dextools}
                   className={"w-full mt-12 flex flex-col-reverse sm:flex-row items-center justify-center sm:gap-4"}>
                    <div className={"bg-white rounded-2xl px-14"}>
                        <svg fill="none" height="312.5" viewBox="0 -.058 754.779 867.058" width="181.15"
                             xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"
                                  fill="#05a3c9" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <h4 className={"text-white mb-4 sm:mb-0 text-4xl sm:text-[4rem] font-bold"}>DEXTOOLS</h4>
                </a>
            </section>

            <section id={"chart"} className={"max-w-screen-lg mx-auto mt-8 px-4"}>

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

            <footer id={"footer"} className={"max-w-screen-lg mx-auto mt-8 px-4 flex flex-col items-center"}>
                <h2 className={"text-4xl my-8 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient text-center"}>JOIN
                    US ON SOCIAL MEDIA</h2>
                <ul className={"flex gap-4"}>
                    <li>
                        <a href={Content.telegram} title={"Telegram"} className={"block"}>
                            <Telegram size={42} className={"hover:fill-blue-700 cursor-pinter"}/>
                        </a>
                    </li>
                    <li>
                        <a href={Content.twitter} className={"block"}>
                            <TwitterX size={42} className={"hover:fill-gray-900 cursor-pinter"}/>
                        </a>
                    </li>
                    <li>
                        <a href={Content.website} className={"block"}>
                            <Globe size={42} className={"hover:fill-purple-500 cursor-pinter"}/>
                        </a>
                    </li>
                </ul>
            </footer>
        </main>
    );
}
