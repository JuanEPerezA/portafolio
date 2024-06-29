import lenguaje from '../Configs/lenguaje';

const DatosJEPA = (idioma) => {
  return {
    misEstudios: [
      {
        "id": 1,
        "nombre": "Niño Jesus de Praga",
        "año": 2009,
        "imagen": "bgLogoLCGS",
        "educacion": lenguaje.primaria[idioma],
        "edTitulo": lenguaje.primaria[idioma],
      },
      {
        "id": 2,
        "nombre": "IE Luís Carlos Galán Sarmiento",
        "año": 2015,
        "imagen": "bgLogoLCGS",
        "educacion": lenguaje.bachiller[`${idioma}`],
        "edTitulo": lenguaje.bachiller[`${idioma}`],
      },
      {
        "id": 3,
        "nombre": "SENA",
        "año": 2018,
        "imagen": "bgLogoSENA",
        "educacion": lenguaje.profesional[`${idioma}`],
        "edTitulo": lenguaje.profesional2[`${idioma}`],
      }
    ],
    misTrabajos: [
        {
          "id": 1,
          "nombre": "Nexos Software S.A.S",
          "año": "02/2018 - 08/2018",
          "imagen": "bgLogoNexos",
          "puesto": lenguaje.expNexos[idioma]
        },
        {
          "id": 2,
          "nombre": "HYG Consultores S.A.S",
          "año": "04/2019 – 10/2020",
          "imagen": "bgLogoHyG",
          "puesto": lenguaje.desarrolladorWeb[idioma]
        },
        {
          "id": 3,
          "nombre": "Proyectos Millennium S.A.S",
          "año": "11/2021 – 07/2022",
          "imagen": "bgLogoMillennium",
          "puesto": lenguaje.desarrolladorWeb[idioma]
        },
        {
          "id": 4,
          "nombre": "Trendi - Trends & Innovation S.A.S",
          "año": "07/2022 – 03/2024",
          "imagen": "bgLogoTrendi",
          "puesto": lenguaje.full[idioma]
        },
    ],
    misProyectos: [
      {
        "id": 1,
        "nombre": "Vive L’amour",
        "descripcion": lenguaje.pyViveLamour[idioma],
        "imagen": "iconoVL.jpg",
        "tecnologias": [
          {
            "id": 1,
            "nombre": "MongoDB",
            'icon': false
          },
          {
            "id": 2,
            "nombre": "Express",
            'icon': false
          },
          {
            "id": 3,
            "nombre": "Node JS",
            'icon': "fa-brands fa-node-js"
          },
          {
            "id": 4,
            "nombre": "React JS",
            'icon': "fa-brands fa-react"
          },
          {
            "id": 5,
            "nombre": "Bootstrap",
            'icon': "fa-brands fa-bootstrap"
          },
        ],
        "info": [
          {
            "codigoDisponible": false,
            "repositorio": "https://github.com/JuanEPerezA",
            "linkApp": "https://vive-lamour.vercel.app/"
          }
        ]
      },
      {
        "id": 2,
        "nombre": "Triki (Tic Tac Toe)",
        "descripcion": lenguaje.pyTriki[idioma],
        "imagen": "Triki.png",
        "tecnologias": [
          {
            "id": 1,
            "nombre": "React JS",
            'icon': "fa-brands fa-react"
          },
          {
            "id": 2,
            "nombre": "Vite",
            'icon': false
          },
          {
            "id": 3,
            "nombre": "CSS",
            'icon': "fa-brands fa-css3-alt"
          },
        ],
        "info": [
          {
            "codigoDisponible": true,
            "repositorio": "https://github.com/JuanEPerezA/triki_react",
            "linkApp": "https://triki-jepa.vercel.app/"
          }
        ]
      },
      {
        "id": 3,
        "nombre": "To Do List",
        "descripcion": lenguaje.pyToDoList[idioma],
        "imagen": "2.jpg",
        "tecnologias": [
          {
            "id": 1,
            "nombre": "MongoDB",
            'icon': false
          },
          {
            "id": 2,
            "nombre": "Express",
            'icon': false
          },
          {
            "id": 3,
            "nombre": "Node JS",
            'icon': "fa-brands fa-node-js"
          },
          {
            "id": 4,
            "nombre": "React JS",
            'icon': "fa-brands fa-react"
          },
          {
            "id": 5,
            "nombre": "Bootstrap",
            'icon': "fa-brands fa-bootstrap"
          },
        ],
        "info": [
          {
            "codigoDisponible": false,
            "repositorio": "https://github.com/JuanEPerezA/",
            "linkApp": "https://todolist-jepa.vercel.app/visitante"
          }
        ]
      },
    ],
    misConocimientos: [
        {
          "id": 1,
          "nombre": "PHP",
        },
        {
          "id": 2,
          "nombre": "SLIM",
        },
        {
          "id": 3,
          "nombre": "TWIG",
        },
        {
          "id": 4,
          "nombre": "REACT JS",
        },
        {
          "id": 5,
          "nombre": "GIT",
        },
        {
          "id": 6,
          "nombre": "SQL",
        },
        {
          "id": 7,
          "nombre": "WS",
        },
    ]
  };
};

export default DatosJEPA;
