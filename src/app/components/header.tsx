
import Image from "next/image"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "../components/ui/menubar"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import WhatsappIcon from "./setIcons/whatsapp"
import { ChevronDown, LocateIcon, MailIcon, MapPin, Smartphone } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "../components/ui/hover-card"


export default function Header() {
    return (
        <header className="shadow-md flex-col">
            <div className="w-full hidden md:flex justify-center bg-blue-700 h-[30px]">
                <div className="flex w-[60%] text-sm text-neutral-50 justify-around items-center">
                    <p className="flex items-center space-x-1"><Smartphone className="h-4" /><span>(41) 3031-5616</span></p>
                    <p className="flex items-center space-x-1"><MailIcon className="h-4" /><span>calhaserufosarauacaria.gmail.com</span></p>
                    <p className="flex items-center space-x-1"><MapPin className="h-4" /><span>Rua Coudelaria de Tindiquera, 942, Sabiá - Araucária PR</span></p>
                </div>
            </div>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between object-contain items-center mx-auto max-w-screen-lg">
                    <a href="#" className="flex items-center">
                        <Image src="/fabricalhas-logo.jpg" className="h-[100px] w-[100px] object-contain  lg:h-[100px] lg:w-[200px]" alt="fabricalhasaraucaria" height={200} width={200} />
                    </a>
                    <div className="flex items-center justify-center lg:order-2">
                        <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center"><WhatsappIcon/><span>Fale conosco</span></a>
                        
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block font-semibold py-2 pr-4 pl-3 text-amber-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Início</a>
                            </li>
                            <li>
                                <a href="#" className="block font-semibold py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-blue-700">Quem Somos</a>
                            </li>
                            <li>
                                <a href="#" className="block font-semibold py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-blue-700">Serviços</a>
                            </li>
                            <li>
                                <a href="#" className="block font-semibold py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-blue-700">
                                    <HoverCard>
                                        <HoverCardTrigger className="flex space-x-1  items-center"><span className="font-semibold">Produtos</span><ChevronDown className="h-4"/></HoverCardTrigger>
                                        <HoverCardContent className="flex-col text-blue-700 font-light w-[200px] justify-center space-y-6 relative top-6 col-span-1 items-center">
                                            <div><a href="">Calhas</a></div>
                                            <div><a href="">Rufos</a></div>
                                            <div><a href="">Condutores de calhas</a></div>
                                            <div> <a href="">Dutos e Curvas</a></div>
                                            <div><a href="">Exaustores Eólicos</a></div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block font-semibold py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-blue-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-blue-700">Portfólio</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}