import Image from "next/image"
import WhatsappIcon from "./setIcons/whatsapp"
import { Mail, PhoneCall } from "lucide-react"

export default function Footer() {
    return(
        <footer className="p-4 border-b border-2 border-t-blue-500 shadow-xl bg-white sm:p-6">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Image
                            src="/Logos_fabricalhas/logo_final.png"
                            className="h-[100px] w-[100px] object-contain lg:h-[100px] lg:w-[200px]"
                            alt="fabricalhasaraucaria"
                            height={500}
                            width={500}
                        />
                        <p className="w-[300px] text-blue-800">A Fabricalhas é referência em Araucária na fabricação e instalação de calhas e rufos, garantindo proteção eficiente e durável contra os efeitos do clima.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-xl font-semibold border-b-amber-500 border-b-2 text-blue-800 uppercase dark:text-white">Entre em contato</h2>
                            <ul className=" text-blue-800">
                                <li className="mb-4">
                                    <a href="https://api.whatsapp.com/send?phone=5541992340296" className="hover:underline flex space-x-1 items-center"><WhatsappIcon height="20px" width="20px" /><span>Whatsapp</span></a>
                                </li>
                                <li className="mb-4">
                                    <a href="tel:413031-5616%20" target="_blank" className="hover:underline flex space-x-1 items-center"><PhoneCall className="h-[20px] w-[20px]" /> <span>Ligar pelo telefone</span></a>
                                </li>
                                <li className="mb-4">
                                    <a href="mailto:calhaserufosarauacaria@gmail.com" target="_blank" className=" hover:underline flex space-x-1 items-center"><Mail className="h-[20px] w-[20px]" /> <span>Enviar um E-mail</span></a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-xl font-semibold border-b-amber-500 border-b-2 text-blue-800 uppercase dark:text-white">Politicas</h2>
                            <ul className=" text-blue-800">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Politicas de Cookies</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Politicas de Privacidade</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl border-b-amber-500 border-b-2 font-semibold text-blue-800 uppercase dark:text-white">Formas de Pagamento</h2>
                            <ul className=" text-blue-800">
                                <li className="mb-4">
                                <Image
                                    src="/pagamento.png"
                                    className="h-[100px] w-[170px] object-contain"
                                    alt="fabricalhasaraucaria"
                                    height={500}
                                    width={500}
                                />
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h2 className="mb-6 text-xl border-b-amber-500 border-b-2 font-semibold text-blue-800 uppercase dark:text-white">Como chegar</h2>
                            <ul className=" text-blue-800">
                                <li className="mb-4 w-[200px] lg:w-[250px]">
                                    <a href="https://maps.app.goo.gl/kzHo9toH1RvdRixQ7" target="_blank">R. Coudelaria de Tindiquera, 942 - Sabia - Araucária - PR CEP: 83708-040</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blue-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-blue-800">© 2025 Fabricalhas. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 items-center sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/people/Fabricalhas-Fabricalhas/pfbid0yk17iCDc5hMnDvXGYJVELwfHDV5jQ9ZFyUZSF2p5FZ5g4sWDHEaHzZY65Q3dZ8L5l/" className="text-blue-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                        </a>
                        <a href="https://www.instagram.com/fabricalhas.1/" className="text-blue-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                        </a>
                       <a href="https://api.whatsapp.com/send?phone=5541992340296" className="text-blue-500 hover:text-gray-900 dark:hover:text-white">
                        <WhatsappIcon height="17px" width="17px" />
                       </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}