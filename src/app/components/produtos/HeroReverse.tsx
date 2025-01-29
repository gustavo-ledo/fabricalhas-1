import WhatsappIcon from "../setIcons/whatsapp";
import Image from "next/image";

interface Props {
    firstImg?: any;
    secondImg?: any;
    title: string;
    description: string;
    text: string;
    secondText: string;
    extraText?: string;
    extraText2?: string;
}

export default function HeroReverse({firstImg, secondImg, title, description, text, secondText, extraText2, extraText}: Props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-1 gap-4 mt-8">
                     <Image src={firstImg} alt="fabricalhasaraucaria" className="w-full object-cover h-96 rounded-lg" height={500} width={500} />
                     <Image src={secondImg} alt="fabricalhasaraucaria"  className="mt-4 object-cover h-96 w-full lg:mt-10 rounded-lg" height={500} width={500} />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-blue-900">{title}</h2>
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-amber-500">{description}</h2>
                    <p className="mb-4 text-blue-900">{text}<br /><br />{secondText}</p>
                    <p className="text-blue-900">{extraText}<br /><br />{extraText2}</p>
                    <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center mt-4 w-[250px]"><WhatsappIcon height="20" width="20"/><span>Fale conosco</span></a>
                </div>
            </div>
        </section>
    )
}