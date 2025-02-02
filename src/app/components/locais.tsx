import Link from 'next/link'; // Remova se não estiver usando Next.js

interface Props {
    cidade: string;
}


export default function Locais({cidade}: Props) {
  const cities = [
    { 
      displayName: 'Aráucaria–PR',
      folderName: 'calhas-e-rufos-em-araucaria'
    },
    { 
      displayName: 'Fazenda Rio Grande–PR',
      folderName: 'calhas-e-rufos-fazenda-rio-grande-pr'
    },
    { 
      displayName: 'Colombo–PR',
      folderName: 'calhas-e-rufos-colombo-pr'
    },
    { 
      displayName: 'Curitiba',
      folderName: 'calhas-e-rufos-curitiba-pr'
    },
    { 
      displayName: 'São José dos Pinhais',
      folderName: 'calhas-e-rufos-sao-jose-dos-pinhais-pr'
    },
    { 
      displayName: 'Campo Largo–PR',
      folderName: 'calhas-e-rufos-campo-largo-pr'
    },
    { 
      displayName: 'Pinhais',
      folderName: 'calhas-e-rufos-pinhais-pr'
    },
    { 
      displayName: 'Boqueirão, Curitiba–PR',
      folderName: 'calhas-e-rufos-boqueirao-curitiba-pr'
    },
    { 
      displayName: 'Cidade Industrial de Curitiba',
      folderName: 'calhas-e-rufos-cidade-industrial-de-curitiba'
    },
    { 
      displayName: 'Santa Felicidade, Curitiba–PR',
      folderName: 'calhas-e-rufos-santa-felicidade-curitiba-pr'
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Cabeçalho Principal */}
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-5xl font-bold text-blue-800 mb-2">
          Abrangência Regional: Calhas e Rufos em {cidade}
        </h1>
        <h2 className="text-lg md:text-xl text-gray-600">
          Alcance Regional da Fabricalhas
        </h2>
      </header>

      {/* Grid de Cidades */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cities.map((city) => (
          <Link
            key={city.folderName}
            href={`/${city.folderName}`}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600 transition-colors" />
            <span className="hover:underline">{city.displayName}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}