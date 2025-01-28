export default function Numbers() {
    return (
        <section className="bg-white h-[80vh] flex items-center">
            <div className="max-w-screen-xl space-y-5 px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <h1 className="md:text-5xl text-3xl font-semibold text-blue-800">Nossos números!</h1>
                <p>Na Fabricalhas, especializada em calhas e rufos, você encontra a combinação perfeita de qualidade e preço justo!</p>
                <dl className="grid max-w-screen-xl gap-8 mx-auto text-blue-800 sm:grid-cols-3 dark:text-white">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-6xl md:text-7xl font-extrabold">+10</dt>
                        <dd className="font-light md:text-xl text-blue-900 dark:text-blue-400">Anos de Experiência</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-6xl md:text-7xl font-extrabold">+37,000</dt>
                        <dd className="font-light md:text-xl text-blue-900 dark:text-blue-400">Projetos Completos</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-6xl sm:text-6xl md:text-7xl font-extrabold">+35,000</dt>
                        <dd className="font-light md:text-xl text-blue-900 dark:text-blue-900">Clientes Satisfeitos</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}