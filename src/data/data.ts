import {
   Git,
   Github,
   JavaScript,
   CSS,
   MySQL,
   Nextjs,
   React,
   TailwindCSS,
   TypeScript,
   Go,
   MicrosoftSQLServer,
   PostgreSQL,
   Figma,
   Nodejs,
} from '@/components/Icons';
import {
   TbBrandLinkedin,
   TbBrandGithub,
   TbDeviceDesktop,
   TbServer,
   TbDatabase,
   TbGitFork,
   TbAlignBoxLeftStretch,
} from 'react-icons/tb';

export const cv = {
   basics: {
      name: 'Fabrizio Gutiérrez',
      level: 'Ingeniero de Sistemas',
      label: 'Full-Stack Web Developer',
      phone: '',
      image: 'https://avatars.githubusercontent.com/u/91578919?s=400&u=224bf569574504a79fb2e7b9cb40de788e9b0378&v=4',
      email: 'gutierrezfabrizio02@gmail.com',
      url: '',
      summary: {
         p1: 'Desarrollando aplicaciones web completas, combinando lógica backend con interfaces modernas y funcionales. ',
         p2: '+1 año de experiencia creando soluciones full stack con enfoque en rendimiento, claridad de datos y arquitectura limpia. ',
         p3: 'Mi fortaleza está en el desarrollo frontend, donde disfruto construir interfaces intuitivas, eficientes y fáciles de usar, siempre alineadas con la lógica del sistema.',
      },
      location: {
         address: '',
         postalCode: '',
         city: 'Falcón',
         countryCode: 'VE',
         country: 'Venezuela',
      },
      profiles: [
         {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/fabrizio-miguel-gutierrez-hernandez/',
            icon: TbBrandLinkedin,
         },
         {
            name: 'GitHub',
            url: 'https://github.com/Fabriziomgh',
            icon: TbBrandGithub,
         },
      ],
   },
   work: [
      {
         company: 'Besser Solutions',
         position: 'Programador Junior',
         url: 'https://bessersolutions.com/',
         startDate: '2024-06-20',
         endDate: null,
         description:
            'Construcción de APIs RESTful para migración entre bases de datos, utilizando tecnologías como Golang y Gin.Optimización de consultas SQL y gestión de bases de datos relacionales para asegurar eficiencia en el manejo de la información. Colaboración en el diseño de interfaces de usuario mediante herramientas como Figma, trabajando en conjunto con equipos de diseño. Documentación detallada de código y procesos para facilitar el mantenimiento y escalabilidad de los proyectos.',
         highlights: [
            'Programación backend (Golang)',
            'Desarrollo de APIs y consumo de servicios REST',
            'Figma',
            'PostgreSQL',
            'SQL Server',
         ],
         isActive: true,
      },
      // {
      //    company: 'MangoNetwork C.A',
      //    position: 'Analista de Soporte Técnico',
      //    url: 'https://www.mangonet.com.ve/punto-fijo',
      //    startDate: '2024-07-16',
      //    endDate: '2024-10-14',
      //    description:
      //       'Gestión proactiva de carteras de clientes en el sector de telecomunicaciones. Resolución de incidencias técnicas a través de herramientas como SmartOLT, asegurando la satisfacción del cliente y la optimización de los servicios. Configuración de equipos de internet y soporte técnico remoto, contribuyendo a la mejora continua de los procesos y la eficiencia operativa.',
      //    highlights: [
      //       'Soporte técnico',
      //       'Telecomunicaciones',
      //       'Configuración de equipos',
      //       'Mikrowisp',
      //       'SmartOLT',
      //    ],
      //    isActive: false,
      // },
      {
         company: 'Instituto Nacional de los Espacios Acuáticos',
         position: 'División de Tecnología - Programador',
         url: 'https://www.inea.gob.ve/',
         startDate: '2023-10-03',
         endDate: '2025-08-24',
         description:
            'Diseño y desarrollo de un sistema de gestión de expedientes para los trabajadores utilizando tecnologías como React para la interfaz de usuario y MySQL para la base de datos para agilizar las funciones dentro del area. Soporte técnico dentro del departamento de Recursos Humanos, asegurando la eficiencia y el funcionamiento óptimo de los sistemas informáticos.',
         highlights: [
            'Soporte técnico',
            'Desarrollo y programación',
            'Configuración de equipos',
            'Redes',
         ],
      },
   ],
   volunteer: [
      {
         organization: 'Organization',
         position: 'Volunteer',
         url: 'https://organization.com/',
         startDate: '2012-01-01',
         endDate: '2013-01-01',
         summary: 'Description…',
         highlights: ["Awarded 'Volunteer of the Month'"],
      },
   ],
   education: [
      {
         institution: 'UNEFA',
         url: 'http://www.unefa.edu.ve/portal/',
         area: 'Ingeniería de Sistemas',
         studyType: 'Ingeniería',
         startDate: '2019-01-01',
         endDate: '2024-06-01',
         score: '4.0',
         courses: ['PHP', 'SQL Básico', 'JavaScript', 'SO'],
      },
   ],
   awards: [
      {
         title: 'Award',
         date: '2014-11-01',
         awarder: 'Company',
         summary: 'There is no spoon.',
      },
   ],
   certificates: [
      {
         name: 'Programación Básica',
         date: '2022-02-21',
         issuer: 'Platzi',
         url: 'https://platzi.com/p/fabrizio.miguel.gutierres/curso/1050-basico-programacion/diploma/detalle/',
      },
      {
         name: 'Master JavaScript with Node.js',
         date: '2024-11-04',
         issuer: 'Udemy',
         url: 'https://www.udemy.com/certificate/UC-20a7294e-baa2-4ae8-81c2-b6a7d6f007c3/',
      },
      {
         name: ' Tailwind CSS Start to Mastery',
         date: '2024-11-04',
         issuer: 'Udemy',
         url: 'https://www.udemy.com/certificate/UC-8413a096-07f3-4bf3-af18-6cf751c32755/',
      },
   ],
   publications: [
      {
         name: 'Publication',
         publisher: 'Company',
         releaseDate: '2014-10-01',
         url: 'https://publication.com',
         summary: 'Description…',
      },
   ],
   skills: [
      {
         title: 'Frontend',
         icon: TbDeviceDesktop,
         technologies: [
            {
               name: 'JavaScript',
               icon: JavaScript,
               description:
                  'Lenguaje de programación versátil para desarrollo web, habilitando interactividad en sitios web y aplicaciones.',
               category: 'Frontend',
            },
            {
               name: 'TypeScript',
               icon: TypeScript,
               description:
                  'Superset de JavaScript que añade tipado estático para desarrollo más robusto, mantenible y escalable.',
               category: 'Frontend',
            },
            {
               name: 'React',
               icon: React,
               description:
                  'Biblioteca de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables.',
               category: 'Frontend',
            },
            {
               name: 'Next.js',
               icon: Nextjs,
               description:
                  'Framework de React para aplicaciones web con renderizado del lado del servidor y generación estática.',
               category: 'Frontend',
            },
            {
               name: 'CSS',
               icon: CSS,
               description:
                  'Lenguaje de hojas de estilo para describir la presentación de documentos HTML, controlando diseño y apariencia.',
               category: 'Frontend',
            },
            {
               name: 'Tailwind CSS',
               icon: TailwindCSS,
               description:
                  'Framework de CSS utility-first para crear diseños personalizados de forma rápida y eficiente.',
               category: 'Frontend',
            },
         ],
      },
      {
         title: 'Backend',
         icon: TbServer,
         technologies: [
            {
               name: 'Golang',
               icon: Go,
               description:
                  'Lenguaje de programación compilado, concurrente y eficiente desarrollado por Google para sistemas escalables.',
               category: 'Backend',
            },
            {
               name: 'Node.js',
               icon: Nodejs,
               description:
                  'Entorno de ejecución de JavaScript del lado del servidor que permite construir aplicaciones escalables y de alto rendimiento',
               category: 'Backend',
            },
         ],
      },
      {
         title: 'Base de Datos',
         icon: TbDatabase,
         technologies: [
            {
               name: 'PostgreSQL',
               icon: PostgreSQL,
               description:
                  'Sistema de gestión de bases de datos relacional avanzado, open source y con soporte para JSON.',
               category: 'Database',
            },
            {
               name: 'Microsoft SQL Server',
               icon: MicrosoftSQLServer,
               description:
                  'Sistema de gestión de bases de datos relacional desarrollado por Microsoft para entornos empresariales.',
               category: 'Database',
            },
            {
               name: 'MySQL',
               icon: MySQL,
               description:
                  'Sistema de gestión de bases de datos relacional open source ampliamente utilizado en aplicaciones web.',
               category: 'Database',
            },
         ],
      },
      {
         title: 'Control de Versiones',
         icon: TbGitFork,
         technologies: [
            {
               name: 'Git',
               icon: Git,
               description:
                  'Sistema de control de versiones distribuido para rastrear cambios en el código fuente de forma eficiente.',
               category: 'Versiones',
            },
            {
               name: 'GitHub',
               icon: Github,
               description:
                  'Plataforma de desarrollo colaborativo basada en Git para alojar proyectos y facilitar el trabajo en equipo.',
               category: 'Versiones',
            },
         ],
      },
      {
         title: 'Diseño',
         icon: TbAlignBoxLeftStretch,
         technologies: [
            {
               name: 'Figma',
               icon: Figma,
               description:
                  'Herramienta de diseño colaborativo en la nube para crear interfaces de usuario y prototipos interactivos.',
               category: 'Diseño',
            },
         ],
      },
   ],

   languages: [
      {
         language: 'Español',
         level: 'Nativo',
      },
      {
         language: 'Inglés',
         level: 'B1',
      },
   ],
   interests: [
      {
         name: 'Tecnología',
         keywords: ['Ferrets', 'Unicorns'],
      },
   ],
   references: [
      {
         name: 'Jane Doe',
         reference: 'Reference…',
      },
   ],
   projects: [
      {
         name: 'World Rank',
         img: '/img/world-rank.png',
         isActive: true,
         description:
            'World Rank es una web que te permite ver todos los datos de un país en concreto, como tambien variedad de filtros para mostrar diferente información',
         highlights: ['react', 'next', 'tailwind'],
         url: 'https://world-rank-beta.vercel.app/',
         github: 'https://github.com/Fabriziomgh/world-rank',
      },
      {
         name: 'JS Quizz',
         img: '/img/quizz.png',
         isActive: true,
         description:
            'JS Quiz es una aplicación web que permite a los usuarios responder preguntas y obtener su puntuación al final del cuestionario',
         highlights: ['react', 'zustand', 'material-ui'],
         url: 'https://js-quizz.vercel.app/',
         github: 'https://github.com/Fabriziomgh/js-quizz',
      },
      {
         name: 'Movies App',
         img: '/img/movies-app.png',
         isActive: false,
         description:
            'Una pequeña app donde puedes ver las películas más populares del momento, y buscar cualquier pelicula que desees',
         highlights: ['react', 'react-native', 'expo', 'typescript'],
         url: undefined,
         github: 'https://github.com/Fabriziomgh/movies-app',
      },
   ],
};
