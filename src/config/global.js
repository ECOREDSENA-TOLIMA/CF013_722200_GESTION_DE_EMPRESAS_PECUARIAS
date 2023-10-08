export default {
  global: {
    componenteFormativo: 'Plan de mercadeo en la empresa pecuaria',
    descripcionCurso:
      'El análisis de mercado permite conocer el entorno al que se enfrenta la empresa, es necesario un estudio detallado a partir de la segmentación de los clientes, la implementación de herramientas y métodos de investigación, para conocer las expectativas y necesidades de estos; posteriormente, se formula el plan de mercadeo, dando respuesta a las necesidades de los clientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos del plan de mercadeo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Áreas del plan de mercadeo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Variables del estudio de mercadeo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Entorno organizacional',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estructura del plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Objetivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias, tácticas y plan de acción',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cronograma y presupuesto',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Evaluación y control en la empresa pecuaria',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_13_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Plan de mercadeo',
      referencia:
        'Miñarro, M. (2020). Plan de marketing: qué es y cómo hacer uno paso a paso.',
      tipo: 'Página web',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-un-plan-de-marketing-y-como-hacer-uno',
    },
    {
      tema: 'Indicadores de gestión',
      referencia:
        'Hoyos, E. & Henao, I. (2020). Propuesta del plan de mercadeo para una empresa agroavícola para el periodo 2020.',
      tipo: 'Trabajo de Grado',
      link:
        'https://es.scribd.com/document/591833070/Propuesta-de-Plan-de-Mercadeo#',
    },
  ],
  glosario: [
    {
      termino: 'Consumidor',
      significado:
        'Se conoce también como cliente o usuario, es toda aquella persona natural o jurídica que realiza un pago a cambio de recibir un beneficio.',
    },
    {
      termino: 'Estrategia de mercado',
      significado:
        'Diseño y creación de acciones que llevan al cumplimiento del objetivo trazado, logrando incrementar las ventas y una ventaja competitiva.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Conjunto de técnicas, estrategias y objetivos para lograr el posicionamiento de un producto o servicio.',
    },
    {
      termino: 'Segmento',
      significado:
        'Subgrupo de personas que muestran características similares entre ellos y comparten algunas necesidades y atributos en especial.',
    },
    {
      termino: 'SIM',
      significado:
        'Acrónimo de Sistema de Investigación de Mercados, pero también de Sistema de Información de Mercados.',
    },
    {
      termino: 'Variables de mercadeo',
      significado:
        'Son aquellos elementos que se deben identificar, conocer y analizar para diseñar un plan de mercadeo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Berenguer, Quintanilla & Gómez (2014). Comportamiento del consumidor. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Hoyos, R. (2019). Plan de <i>marketing</i>, diseño, implementación y control. ECOE Ediciones.',
      link:
        'https://www.ecoeediciones.mx/wp-content/uploads/2015/09/Plan-de-Marketing-1ra-edici%C3%B3n.pdf',
    },
    {
      referencia:
        'Kotler, P. & Armstrong, G. (2019). Principios de <i>marketing. Pearson.</i',
      link: '',
    },
    {
      referencia:
        'Sastre, M., M. & Polo, H. (2014). Entorno e información de mercados.',
      link:
        'https://es.scribd.com/read/424097787/UF1779-Entorno-e-informacion-de-mercados',
    },
    {
      referencia: 'Zamarreño, G. (2020). Fundamentos de <i>marketing</>.',
      link: 'https://es.scribd.com/read/476328868/Fundamentos-de-Marketing',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ocampo Henao ',
          cargo: 'Experto temático',
          centro: 'Regional Tolima  - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Ángela María Zapata Guzmán ',
          cargo: 'Diseñadora instruccional',
          centro: 'Ecosistema de Recursos Educativos Digitales RED',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia ',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable Equipo diseño curricular',
          centro:
            'Regional Santander  -  Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto ',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
