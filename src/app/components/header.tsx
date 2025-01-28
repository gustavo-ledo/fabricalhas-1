'use client'
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Smartphone, MailIcon, MapPin } from "lucide-react";
import WhatsappIcon from "./setIcons/whatsapp";
import { useRouter } from "next/navigation";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const route = useRouter();

  const QuemSomos = () => {
    route.push('/quem-somos')
  }

  return (
    <header className="shadow-md flex-col">
      {/* Barra superior */}
      <div className="w-full hidden md:flex justify-center bg-blue-700 h-[30px]">
        <div className="flex w-[60%] text-sm text-neutral-50 justify-around items-center">
          <p className="flex items-center space-x-1">
            <Smartphone className="h-4" />
            <span>(41) 3031-5616</span>
          </p>
          <p className="flex items-center space-x-1">
            <MailIcon className="h-4" />
            <span>calhaserufosarauacaria@gmail.com</span>
          </p>
          <p className="flex items-center space-x-1">
            <MapPin className="h-4" />
            <span>Rua Coudelaria de Tindiquera, 942, Sabiá - Araucária PR</span>
          </p>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/Logos_fabricalhas/logo_final.png"
              className="h-[100px] w-[100px] object-contain lg:h-[100px] lg:w-[200px]"
              alt="fabricalhasaraucaria"
              height={500}
              width={500}
            />
          </a>

          {/* Botão Fale Conosco e Toggle Menu Mobile */}
          <div className="flex items-center lg:order-2">
            <a
              href="https://api.whatsapp.com/send?phone=5541992340296"
              className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 flex items-center space-x-2 text-center"
            >
              <WhatsappIcon height="20" width="20" />
              <span>Fale conosco</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Menu Mobile */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:flex lg:w-auto w-full mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium">
              <li>
                <a href="/" className="block py-2 text-blue-700 font-semibold">
                  Início
                </a>
              </li>
              <li>
                <a href="#" onClick={QuemSomos} className="block py-2 text-blue-700 font-semibold">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 text-blue-700 font-semibold">
                  Serviços
                </a>
              </li>
              {/* Dropdown Produtos */}
              <li className="relative z-10">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center py-2 text-blue-700 font-semibold w-full"
                >
                  Produtos <ChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 w-[200px] bg-gray-100 rounded shadow-md mt-2 space-y-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 text-blue-700"
                      >
                        Calhas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 text-blue-700"
                      >
                        Rufos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 text-blue-700"
                      >
                        Condutores de Calhas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 text-blue-700"
                      >
                        Coifas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 text-blue-700"
                      >
                        Dutos e Curvas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 text-blue-700"
                      >
                        Exaustores Eólicos
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#" className="block py-2 text-blue-700 font-semibold">
                  Portfólio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
