import {
   Git,
   Github,
   JavaScript,
   MySQL,
   Nextjs,
   React,
   TailwindCSS,
   TypeScript,
} from '@/components/Icons';
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb';

export const cv = {
   basics: {
      name: 'Fabrizio Gutiérrez',
      level: 'Ingeniero de Sistemas',
      label: 'Programador Web - Frontend',
      phone: '',
      image: 'https://avatars.githubusercontent.com/u/91578919?s=400&u=224bf569574504a79fb2e7b9cb40de788e9b0378&v=4',
      email: 'gutierrezfabrizio02@gmail.com',
      url: '',
      summary:
         'Habilidad y conocimientos para diseñar experiencias web interactivas, funcionales y eficientes. Mi compromiso con la mejora continua y mi pasión por la tecnología me motivan a mantenerme siempre actualizado con las últimas tendencias y mejores prácticas en el desarrollo Frontend. Me entusiasma el desarrollo ágil y el trabajo colaborativo en equipos multidisciplinarios para lograr soluciones innovadoras y de alto impacto',
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
         name: 'MangoNetwork C.A',
         position: 'Analista de Soporte Técnico',
         url: 'https://www.mangonet.com.ve/punto-fijo',
         startDate: '2024-07-16',
         endDate: '2024-10-14',
         summary:
            'Gestión proactiva de carteras de clientes en el sector de telecomunicaciones. Resolución de incidencias técnicas a través de herramientas como SmartOLT, asegurando la satisfacción del cliente y la optimización de los servicios. Configuración de equipos de internet y soporte técnico remoto, contribuyendo a la mejora continua de los procesos y la eficiencia operativa.',
         highlights: [
            'Soporte técnico',
            'Telecomunicaciones',
            'Configuración de equipos',
            'Mikrowisp',
            'SmartOLT',
         ],
      },
      {
         name: 'Instituto Nacional de los Espacios Acuáticos',
         position: 'División de Tecnología - Programador',
         url: 'https://www.inea.gob.ve/',
         startDate: '2023-10-03',
         endDate: '2024-01-24',
         summary:
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
   skills: {
      technologies: [
         {
            name: 'Javascript',
            icon: JavaScript,
         },
         {
            name: 'Typescript',
            icon: TypeScript,
         },
         {
            name: 'React.js',
            icon: React,
         },
         {
            name: 'Next.js',
            icon: Nextjs,
         },
         {
            name: 'Tailwind CSS',
            icon: TailwindCSS,
         },
         {
            name: 'Git',
            icon: Git,
         },
         {
            name: 'Github',
            icon: Github,
         },
         {
            name: 'MySQL',
            icon: MySQL,
         },
      ],
      technicalSkills: [
         {
            categoria: 'Lenguajes de Programación',
            descripcion:
               'Conocimientos y habilidades en JavaScript y TypeScript, con énfasis en desarrollo Frontend',
         },
         {
            categoria: 'Desarrollo Frontend',
            descripcion:
               'Conocimientos y habilidades en React.js, Next.js y TailwindCSS para creación de interfaces modernas',
         },
         {
            categoria: 'Control de Versiones',
            descripcion:
               'Manejo de Git y GitHub para seguimiento de cambios y trabajo colaborativo',
         },
         {
            categoria: 'Bases de Datos',
            descripcion:
               'Manejo de MySQL para gestión y almacenamiento estructurado de información',
         },
         {
            categoria: 'Manejo de Equipos',
            descripcion:
               'Habilidades en gestión y mantenimiento de hardware, dominio de S.O Windows',
         },
      ],
      softSkills: [
         {
            categoria: 'Comunicación Efectiva',
            descripcion:
               'Claridad en expresión de ideas tanto verbal como escrita',
         },
         {
            categoria: 'Trabajo en Equipo',
            descripcion:
               'Colaboración efectiva para alcanzar objetivos comunes',
         },
         {
            categoria: 'Resolución de Problemas',
            descripcion:
               'Identificación y solución eficiente de desafíos técnicos',
         },
         {
            categoria: 'Adaptabilidad',
            descripcion: 'Ajuste rápido a nuevos entornos y tecnologías',
         },
         {
            categoria: 'Gestión del Estrés',
            descripcion: 'Mantenimiento de productividad bajo presión',
         },
         {
            categoria: 'Puntualidad',
            descripcion:
               'Organización eficiente del tiempo y cumplimiento de plazos',
         },
      ],
   },
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
         url: null,
         github: 'https://github.com/Fabriziomgh/movies-app',
      },
   ],
};
