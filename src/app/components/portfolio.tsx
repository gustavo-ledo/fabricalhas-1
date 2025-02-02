import Image from "next/image"

interface Props {
    cidade?: string;
}

export default function Portfolio({cidade}: Props) {
    return (
        <div className="max-w-screen-xl-xl space-y-10 mb-10 p-2 flex flex-col items-center h-auto">
            <div className="flex flex-col items-center space-y-2 w-full mt-6">
                <h1 className="text-2xl md:text-4xl font-semibold text-blue-800">Conheça nosso portifólio em {cidade}</h1>
                <h2 className="text-md md:text-xl max-w-screen-lg text-center text-amber-500">Soluções Personalizadas da Fabricalhas. Usos e Aplicações de Calhas, Rufos, Coifas, Curvas, Dutos, Perfis Metálicos e Exaustores Eólicos.</h2>
                <div className="w-[300px] md:w-[600px] mb-2 bg-amber-500 h-[2px]"></div>
                <p className="max-w-screen-xl text-sm text-blue-950 text-center mb-5">
                Conheça o amplo portfólio da Fabricalhas em {cidade}, com produtos como calhas, rufos, coifas, curvas, dutos, perfis metálicos e exaustores eólicos. Fabricados com materiais de alta qualidade, nossos itens proporcionam proteção confiável contra intempéries. Com uma equipe especializada, desenvolvemos soluções sob medida para atender às demandas específicas de cada cliente. Confie na Fabricalhas para garantir a proteção e durabilidade da sua propriedade!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl gap-x-2 gap-y-3 auto-rows-[200px] mt-2">
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100 md:col-span-2"></div>
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100"></div>
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100 md:row-span-2"></div>
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100"></div>
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100"></div>
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100 md:col-span-2"></div>
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100 md:col-span-2"></div>
                <div className="min-h-[50px] min-w-[400px] rounded-lg bg-neutral-100"></div>
            </div>
        </div>
    )
}