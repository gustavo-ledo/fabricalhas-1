import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Props {
    title: string;
    subTitle: string;
    description: string;
    Img?: string;
}

export default function Hero({ title, subTitle, description, Img }: Props) {
    return (
        <section className="bg-blue-700 ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto space-y-3 place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight text-white leading-none md:text-4xl xl:text-5xl dark:text-white">{title}</h1>
                    <h1 className="max-w-2xl mb-2 font-light text-white lg:mb-2 md:text-lg lg:text-lg dark:text-gray-400">
                    {subTitle}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">{description}</p>
                </div>
                <div className="flex lg:mt-0 lg:col-span-5 lg:flex">
              {
                Img &&
                <Image
                src={Img}
                className="w-full h-96 object-contain"
                alt="fabricalhasaraucaria"
                height={1500}
                width={1500}
           />
              }
               

                </div>                
            </div>
        </section>
    )
}