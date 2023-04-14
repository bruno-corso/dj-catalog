import './App.css';
import Banner from './components/Banner';
import Estilo from './components/Estilo';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Rodape from './components/Rodape';

function App() {

  const paises = [
    {
      "name": "",
      "abbreviation": ""
    },
    {
      "name": "Algeria",
      "abbreviation": "DZ"
    },
    {
      "name": "Argentina",
      "abbreviation": "AR"
    },
    {
      "name": "Bangladesh",
      "abbreviation": "BD"
    },
    {
      "name": "Brazil",
      "abbreviation": "BR"
    },
    {
      "name": "Canada",
      "abbreviation": "CA"
    },
    {
      "name": "China",
      "abbreviation": "CN"
    },
    {
      "name": "Colombia",
      "abbreviation": "CO"
    },
    {
      "name": "DR Congo",
      "abbreviation": "CD"
    },
    {
      "name": "Egypt",
      "abbreviation": "EG"
    },
    {
      "name": "Ethiopia",
      "abbreviation": "ET"
    },
    {
      "name": "France",
      "abbreviation": "FR"
    },
    {
      "name": "Germany",
      "abbreviation": "DE"
    },
    {
      "name": "India",
      "abbreviation": "IN"
    },
    {
      "name": "Indonesia",
      "abbreviation": "ID"
    },
    {
      "name": "Iran",
      "abbreviation": "IR"
    },
    {
      "name": "Israel",
      "abbreviation": "IL"
    },
    {
      "name": "Italy",
      "abbreviation": "IT"
    },
    {
      "name": "Japan",
      "abbreviation": "JP"
    },
    {
      "name": "Kenya",
      "abbreviation": "KE"
    },
    {
      "name": "Malaysia",
      "abbreviation": "MY"
    },
    {
      "name": "Mexico",
      "abbreviation": "MX"
    },
    {
      "name": "Morocco",
      "abbreviation": "MA"
    },
    {
      "name": "Myanmar",
      "abbreviation": "MM"
    },
    {
      "name": "Pakistan",
      "abbreviation": "PK"
    },
    {
      "name": "Peru",
      "abbreviation": "PE"
    },
    {
      "name": "Philippines",
      "abbreviation": "PH"
    },
    {
      "name": "Poland",
      "abbreviation": "PL"
    },
    {
      "name": "Russia",
      "abbreviation": "RU"
    },
    {
      "name": "Saudi Arabia",
      "abbreviation": "SA"
    },
    {
      "name": "South Africa",
      "abbreviation": "ZA"
    },
    {
      "name": "South Korea",
      "abbreviation": "KR"
    },
    {
      "name": "Spain",
      "abbreviation": "ES"
    },
    {
      "name": "Tanzania",
      "abbreviation": "TZ"
    },
    {
      "name": "Turkey",
      "abbreviation": "TR"
    },
    {
      "name": "Uganda",
      "abbreviation": "UG"
    },
    {
      "name": "Ukraine",
      "abbreviation": "UA"
    },
    {
      "name": "United Kingdom",
      "abbreviation": "GB"
    },
    {
      "name": "United States",
      "abbreviation": "US"
    },
    {
      "name": "Uzbekistan",
      "abbreviation": "UZ"
    },
    {
      "name": "Vietnam",
      "abbreviation": "VN"
    }
  ]

  const vertentes = [
    {
      nome: "",
      background_img: 'none.jpg',
    },
    {
      nome: 'Full On',
      background_img: 'fullon.jpg',
    },
    {
      nome: 'Progressive',
      background_img: 'prog.jpg',
    },
    {
      nome: 'Dark Psy',
      background_img: 'darkpsy.jpg'
    },
    {
      nome: 'Goa',
      background_img: 'goa.jpg',
    }
  ]

  const [djs, SetDj] = useState([]);

  const adicionarDj = (pacoteDj) => {
    SetDj([...djs, pacoteDj]);
    console.log(djs)
  }

  return (
    <div className="App">
      <Banner
        nome="DJ's Catalog"
      />
      <Formulario
        listaDeVertentes={vertentes.map(vertente => vertente.nome)}
        listaDeNomePais={paises.map(pais => pais.name)}
        ArrayPaises={paises}
        incluirNovoDj={pacoteDj => adicionarDj(pacoteDj)}
      />
      {vertentes.map(vertente =>
        <Estilo
          key={vertente.nome}
          vertente_estilo={vertente.nome}
          background={vertente.background_img}
          listaDeDj={djs.filter(artista => artista.estilo_vertente === vertente.nome)}
        />
       )}
      <Rodape />
    </div>
  );
}

export default App;
