export type Language = 'en' | 'es';

export const translations = {
    en: {
        header: {
            title: "THE DEVELOPER CHRONICLE",
            subtitle: "All the Code That's Fit to Print",
            price: "PRICE: HIRE ME",
            departments: {
                bureau: "The Innovation Times & Project Press",
                cloud: "Career Gazette",
                tech: "The Tech Telegraph & Life Bytes"
            },
            nav: {
                home: "Home",
                experience: "Experience"
            }
        },
        quotes: {
            mainQuote: "In the realm of code, elegance is not optional; it's a necessity."
        },
        social: {
            title: "TELEGRAPH OFFICE",
            follow: "FOLLOW",
            connect: "CONNECT",
        },
        contact: {
            title: "CORRESPONDENCE",
            email: "Send a Telegraph",
            availability: "Currently accepting new opportunities",
            status: "AVAILABLE"
        },
        forecast: {
            title: "CODE ORACLE",
            cloud: "CLOUD CONDITIONS: 100% Chance Everything Will Go Wrong (but don’t worry, I’m here!)",
            quality: "CODE QUALITY: So Perfect It Would Make a Programmer Cry",
            deployment: "DEPLOYMENT OUTLOOK: Deployment in 3, 2, 1... or Maybe Next Month!",
        },
        news: {
            fallback1: "BREAKING: Developer Achieves Perfect Lighthouse Score, Users Amazed!",
            fallback2: "EXCLUSIVE: Local Functions Report 100% Test Coverage",
            fallback3: "TRENDING: CSS Wizardry Transforms UI Into Digital Art",
            fallback4: "JUST IN: Git Commits So Clean They Made Other Developers Cry"
        },
        experience: {
            title: "PROFESSIONAL EXPERIENCE",
            subtitle: "A Chronicle of Technical Excellence",
            jobs: [
                {
                    title: "Full Stack Developer",
                    company: "Karimnot Inc",
                    period: "August 2023 - August 2024",
                    description: "During my time at the company, I participated in the development and maintenance of web applications.",
                    achievements: [
                        "Developed frontends using React.js along with libraries like MUI and Tailwind, as well as backends using Express and Koa, PostgreSQL as the database, and AWS S3 for file storage.",
                        "Participated in communication with clients for a successful implementation of the developed solutions.",
                        "Provided technical assistance to clients, helping with problem-solving and responding to inquiries."
                    ]
                },
                {
                    title: "Full Stack Developer",
                    company: "National Technological Institute of Mexico / Oaxaca Campus / Graduate Studies and Research Division",
                    period: "January 2020 - June 2020",
                    description: "Responsible for the design and development of an interactive educational platform, ensuring an optimized user experience and organized project execution.",
                    achievements: [
                        "Developed an interactive educational platform using Vue.js, Laravel, and MariaDB for database management.",
                        "Designed and implemented simple and intuitive user interfaces, improving the user experience.",
                        "Coordinated the development of the platform using agile methodologies such as Scrum and Kanban, as well as Git and GitHub for change tracking and collaboration."
                    ]
                }
            ]
        },
        academic: {
            header: "Academic Experience",
            subheader: "History of Professional Preparation",
            title: "Technological Institute of Oaxaca",
            degree: "Engineering in Computer Systems",
            specialization: "ISIC2 / Software Engineering with Emerging Technologies",
        },
        theme: {
            morning: "Morning edition",
            evening: "Evening edition"
        },
        mainProject: {
            title: "GATHERING PLANNER",
            subtitle: "Bringing People Together",
            description: "Developing an application designed to facilitate planning and organizing gatherings with family and friends. This project allows users to create events, send invitations, and manage RSVPs effortlessly. Features include customizable event details, reminders, and integration with calendars to ensure everyone stays informed.",
            image: "/portfolio-site/projects/gatheringplanner.svg",
            imageDescription: "Gathering Planner Screenshot",
            quote: "Creating memorable moments, one gathering at a time.",
            technologies: ["React", "Node.js", "Firebase", "Tailwind CSS"],
            link: "https://example.com/gathering-planner"
        },
        projects: [
            {
                title: "PORTFOLIO WITH WINDSURF",
                subtitle: "Creating a portfolio with the help of Windsurf",
                description: "Utilized the integrated chat system that implemented the decisions made during the development process, documenting the history of interactions with the user.",
                image: "/portfolio-site/projects/portafolio.png",
                quote: "Windsurf, the future of programming",
                technologies: ["Astro", "Tailwind", "Windsurf", "Codeium"],
                link: "https://concatenateline.github.io/portafolio-site/"
            },
            {
                title: "FORGOTTEN PORTFOLIO",
                subtitle: "Creating a Portfolio with the help of a template",
                description: "Created a portfolio with the help of a sample template in Astro and Tailwind.",
                image: "/portfolio-site/projects/oldportafolio.png",
                quote: "Testing Astro",
                technologies: ["Astro", "Tailwind", "TypeScript", "VSCode"],
                link: "https://concatenateline.github.io/old-portafolio-site/"
            }
        ],
        footer: {
            typography: "This portfolio is typeset in Playfair Display and Source Serif Pro",
            rights: " The Developer Chronicle. All Rights Reserved.",
            warning: "Please note that the information provided may not be 100% accurate.",
            sideEffects: "Side effects may include excessive enthusiasm and sudden bursts of creativity."
        },
        sections: {
            projects: "TECHNICAL PORTFOLIO HIGHLIGHTS",
            technicalGazette: "TECHNICAL GAZETTE",
        }
    },
    es: {
        header: {
            title: "LA CRÓNICA DEL DESARROLLADOR",
            subtitle: "Todo el Código que Vale la Pena Imprimir",
            price: "PRECIO: CONTRÁTAME",
            departments: {
                bureau: "La Gaceta de Innovación & Proyectos",
                cloud: "Crónicas Profesionales",
                tech: "El Telégrafo Tech & Bytes de Vida"
            },
            nav: {
                home: "Inicio",
                experience: "Experiencia"
            }
        },
        quotes: {
            mainQuote: "En el ámbito del código, la elegancia no es opcional; es una necesidad."
        },
        social: {
            title: "OFICINA DE TELÉGRAFOS",
            follow: "SEGUIR",
            connect: "CONECTAR"
        },
        contact: {
            title: "CORRESPONDENCIA",
            email: "Enviar un Telégrafo",
            availability: "Actualmente aceptando nuevas oportunidades",
            status: "DISPONIBLE"
        },
        forecast: {
            title: "ORÁCULO DEL CÓDIGO",
            cloud: "CONDICIONES EN LA NUBE: 100% Probabilidad de que Todo Salga Mal (pero no te preocupes, ¡estoy aquí!)",
            quality: "CALIDAD DEL CÓDIGO: Tan Perfecto que Haría Llorar a un Programador",
            deployment: "PERSPECTIVA DE DESPLIEGUE: ¡Despliegue en 3, 2, 1... o Tal Vez el Próximo Mes!",
        },
        news: {
            fallback1: "ÚLTIMA HORA: ¡Desarrollador Logra Puntuación Perfecta en Lighthouse!",
            fallback2: "EXCLUSIVA: Funciones Locales Reportan 100% de Cobertura en Pruebas",
            fallback3: "TENDENCIA: Magia CSS Transforma UI en Arte Digital",
            fallback4: "RECIÉN LLEGADO: Commits de Git Tan Limpios Que Hicieron Llorar a Otros Desarrolladores"
        },
        experience: {
            title: "EXPERIENCIA PROFESIONAL",
            subtitle: "Una Crónica de Excelencia Técnica",
            jobs: [
                {
                    title: "Desarrollador Full Stack",
                    company: "Karimnot Inc",
                    period: "Agosto 2023 - Agosto 2024",
                    description: "Durante mi tiempo en la empresa, participe en el desarrollo y mantenimiento de aplicaciones web.",
                    achievements: [
                        "Desarrolle frondends utilizando Reactjs junto con librerias como Mui y Tailwind asi como backends utilizando Express y Koajs, PostgresSql como base de datos y AWS S3 para almacenamiento de archivos",
                        "Participe en la communicación con clientes para una implementacion exitosa de las soluciones desarrolladas",
                        "Proporcione asistencia tecnica a clientes, ayudando con la solucion de problemas y repondiendo a consultas",
                    ]
                },
                {
                    title: "Desarrollador Full Stack",
                    company: "Tecnológico Nacional de México / Campus Oaxaca / División de Estudios de Postgrado e Investigación",
                    period: "Enero 2020 - Junio 2020",
                    description: "Responsable del diseño y desarrollo de una plataforma educativa interactiva, asegurando una experiencia de usuario optimizada y una ejecución del proyecto organizada.",
                    achievements: [
                        "Desarrolle una plataforma educativa interactiva utilizando Vue.js, Laravel y MariaDB para la administración de la base de datos",
                        "Diseñe e implemente interfaces de usuario simples e intuitivas mejorando la experiencia de los usuarios",
                        "Coordine el desarrollo de la plataforma utilizando metodologías agiles como Scrum y Kanban asi como Git y GitHub para el seguimiento de cambios y colaboración",
                    ]
                }
            ]
        },
        academic: {
            header: "Experiencia Académica",
            subheader: "Historia de preparación profesional",
            title: "Instituto Tecnológico de Oaxaca",
            degree: "Ingenieria en Sistemas Computacionales",
            specialization: "ISIC2 / Ingeniería De Software Con Tecnologías Emergentes",
        },
        theme: {
            morning: "Edición matutina",
            evening: "Edición vespertina"
        },
        mainProject: {
            title: "PLANIFICADOR DE REUNIONES",
            subtitle: "Reuniendo a las Personas",
            description: "Desarrollando una aplicación diseñada para facilitar la planificación y organización de reuniones con familiares y amigos. Este proyecto permite a los usuarios crear eventos, enviar invitaciones y gestionar las confirmaciones de asistencia sin esfuerzo. Las características incluyen detalles de eventos personalizables, recordatorios e integración con calendarios para asegurar que todos estén informados.",
            image: "/projects/gatheringplanner.svg",
            imageDescription: "Imagen de muestra del proyecto Gathering Planner",
            quote: "Creando momentos memorables, una reunión a la vez.",
            technologies: ["React", "Node.js", "Firebase", "Tailwind CSS"],
            link: "https://example.com/gathering-planner"
        },
        projects: [
            {
                title: "PORTAFOLIO CON WINDSURF",
                subtitle: "Creando un portafolio con la ayuda de Windsurf",
                description: "Utilice el sistema de chat integrado que implemento las deciciones tomadas durante el proceso de desarrollo, documentando el historial de interacciones con el usuario.",
                image: "/project-analytics.jpg",
                quote: "Windsurf, el futuro de la programación",
                technologies: ["Astro", "Tailwind", "Windsurf", "Codeium"],
                link: "https://concatenateline.github.io/portafolio-site/"
            },
            {
                title: "PORTAFOLIO OLVIDADO",
                subtitle: "Creando un Portafolio con la ayuda de un template",
                description: "Cree un portafolio con la ayuda de un template de ejemplo en Astro y Tailwind.",
                image: "/project-micro.jpg",
                quote: "Probando Astro",
                technologies: ["Astro", "Tailwind", "TypeScript", "VSCode"],
                link: "https://concatenateline.github.io/old-portafolio-site/"
            }
        ],
        footer: {
            typography: "Este portafolio está tipografiado en Playfair Display y Source Serif Pro.",
            rights: " La Crónica del Desarrollador. Todos los Derechos Reservados.",
            warning: "Por favor, tenga en cuenta que la información proporcionada puede no ser 100% precisa.",
            sideEffects: "Los efectos secundarios pueden incluir entusiasmo excesivo y explosiones repentinas de creatividad."
        },
        sections: {
            projects: "DESTACADOS DEL PORTAFOLIO TÉCNICO",
            technicalGazette: "GACETA TÉCNICA",
        }
    }
};
