export type Language = 'en' | 'es';

export const translations = {
    en: {
        header: {
            title: "THE DEVELOPER CHRONICLE",
            subtitle: "All the Code That's Fit to Print",
            price: "PRICE: HIRE ME",
            departments: {
                bureau: "The Innovation Times & Project Press",
                cloud: "The Code Archives & Career Gazette",
                tech: "The Tech Telegraph & Life Bytes"
            },
            nav: {
                home: "Home",
                experience: "Experience"
            }
        },
        social: {
            title: "TELEGRAPH OFFICE",
            follow: "FOLLOW",
            connect: "CONNECT"
        },
        contact: {
            title: "CORRESPONDENCE",
            email: "Send a Telegraph",
            availability: "Currently accepting new opportunities",
            status: "AVAILABLE"
        },
        experience: {
            title: "PROFESSIONAL EXPERIENCE",
            subtitle: "A Chronicle of Technical Excellence",
            jobs: [
                {
                    title: "Senior Software Engineer",
                    company: "Tech Innovations Inc.",
                    period: "2020 - Present",
                    description: "Led development of cloud-native applications and microservices architecture. Improved system performance by 200% and reduced operational costs by 40%.",
                    achievements: [
                        "Architected and implemented scalable cloud solutions",
                        "Mentored junior developers and established best practices",
                        "Introduced automated testing, achieving 95% coverage"
                    ]
                },
                {
                    title: "Full Stack Developer",
                    company: "Digital Solutions Corp",
                    period: "2018 - 2020",
                    description: "Developed and maintained enterprise-level web applications using React and Node.js. Implemented CI/CD pipelines and automated deployment processes.",
                    achievements: [
                        "Reduced deployment time by 70% through automation",
                        "Implemented responsive design patterns",
                        "Integrated third-party APIs and payment systems"
                    ]
                },
                {
                    title: "Software Developer",
                    company: "StartUp Ventures",
                    period: "2016 - 2018",
                    description: "Full-stack development of innovative web applications. Worked directly with clients to gather requirements and implement solutions.",
                    achievements: [
                        "Developed MVP for successful startup product",
                        "Implemented agile methodologies",
                        "Reduced bug count by 80% through TDD"
                    ]
                }
            ]
        },
        academic: {
            title: "ACADEMIC DISPATCH",
            degree: "Master's in Computer Science",
            specialization: "Distributed Systems & Cloud Computing",
            achievements: [
                "Published research on distributed systems optimization",
                "Led graduate research team on cloud computing",
                "Awarded Academic Excellence Scholarship",
                "Perfect GPA in Advanced System Design"
            ]
        },
        theme: {
            morning: "Morning edition",
            evening: "Evening edition"
        },
        projects: {
            mainTitle: "REVOLUTIONARY CLOUD ARCHITECTURE DEPLOYMENT",
            mainSubtitle: "Senior Software Engineer Pioneers Scalable Solutions",
            mainDescription: "Architected and implemented a high-performance distributed system handling 10M+ daily transactions. Reduced infrastructure costs by 60% while improving response times by 300%.",
            mainQuote: "A masterclass in modern cloud architecture and distributed systems design",
            title: "TECHNICAL PORTFOLIO HIGHLIGHTS",
            aiTitle: "AI-POWERED CODE ANALYSIS PLATFORM",
            aiSubtitle: "Machine Learning Meets Software Development",
            aiDescription: "Developed an innovative code analysis platform that uses AI to detect patterns, vulnerabilities, and optimization opportunities in real-time. The system processes over 1M lines of code daily with 99.9% accuracy.",
            aiQuote: "Revolutionary approach to automated code review and optimization",
            blockchainTitle: "BLOCKCHAIN-BASED SUPPLY CHAIN SOLUTION",
            blockchainSubtitle: "Transforming Supply Chain Transparency",
            blockchainDescription: "Created a decentralized supply chain tracking system using blockchain technology. Implemented smart contracts for automated compliance and reduced verification time by 85%.",
            blockchainQuote: "Setting new standards in supply chain transparency and efficiency",
            analyticsTitle: "REAL-TIME ANALYTICS DASHBOARD",
            analyticsSubtitle: "Data Visualization Reimagined",
            analyticsDescription: "Built a highly responsive analytics platform processing 50TB of data daily. Features include real-time visualization, predictive analytics, and custom reporting tools.",
            analyticsQuote: "Turning complex data into actionable insights",
            microservicesTitle: "MICROSERVICES MIGRATION SUCCESS",
            microservicesSubtitle: "Legacy System Modernization",
            microservicesDescription: "Led the successful migration of a monolithic application to a microservices architecture. Improved deployment frequency by 400% and reduced system downtime by 75%.",
            microservicesQuote: "Exemplary execution of modern architectural principles"
        },
        footer: {
            warning: "Warning: Reading this portfolio may cause sudden urges to refactor code and optimize algorithms",
            sideEffects: "Side effects may include improved coding practices and an appreciation for clean architecture"
        }
    },
    es: {
        header: {
            title: "LA CRÓNICA DEL DESARROLLADOR",
            subtitle: "Todo el Código que Vale la Pena Imprimir",
            price: "PRECIO: CONTRÁTAME",
            departments: {
                bureau: "La Gaceta de Innovación & Proyectos",
                cloud: "Archivos de Código & Crónicas Profesionales",
                tech: "El Telégrafo Tech & Bytes de Vida"
            },
            nav: {
                home: "Inicio",
                experience: "Experiencia"
            }
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
        experience: {
            title: "EXPERIENCIA PROFESIONAL",
            subtitle: "Una Crónica de Excelencia Técnica",
            jobs: [
                {
                    title: "Ingeniero de Software Senior",
                    company: "Tech Innovations Inc.",
                    period: "2020 - Presente",
                    description: "Lideré el desarrollo de aplicaciones nativas en la nube y arquitectura de microservicios. Mejoré el rendimiento del sistema en un 200% y reduje los costos operativos en un 40%.",
                    achievements: [
                        "Arquitectura e implementación de soluciones escalables en la nube",
                        "Mentoría a desarrolladores junior y establecimiento de mejores prácticas",
                        "Introducción de pruebas automatizadas, alcanzando 95% de cobertura"
                    ]
                },
                {
                    title: "Desarrollador Full Stack",
                    company: "Digital Solutions Corp",
                    period: "2018 - 2020",
                    description: "Desarrollé y mantuve aplicaciones web empresariales usando React y Node.js. Implementé pipelines de CI/CD y procesos de despliegue automatizado.",
                    achievements: [
                        "Reduje el tiempo de despliegue en un 70% mediante automatización",
                        "Implementé patrones de diseño responsivo",
                        "Integré APIs de terceros y sistemas de pago"
                    ]
                },
                {
                    title: "Desarrollador de Software",
                    company: "StartUp Ventures",
                    period: "2016 - 2018",
                    description: "Desarrollo full-stack de aplicaciones web innovadoras. Trabajé directamente con clientes para recopilar requisitos e implementar soluciones.",
                    achievements: [
                        "Desarrollé MVP para producto startup exitoso",
                        "Implementé metodologías ágiles",
                        "Reduje el conteo de errores en un 80% mediante TDD"
                    ]
                }
            ]
        },
        academic: {
            title: "DESPACHO ACADÉMICO",
            degree: "Maestría en Ciencias de la Computación",
            specialization: "Sistemas Distribuidos & Computación en la Nube",
            achievements: [
                "Investigación publicada sobre optimización de sistemas distribuidos",
                "Líder del equipo de investigación en computación en la nube",
                "Beca de Excelencia Académica",
                "GPA perfecto en Diseño Avanzado de Sistemas"
            ]
        },
        theme: {
            morning: "Edición matutina",
            evening: "Edición vespertina"
        },
        projects: {
            mainTitle: "DESPLIEGUE REVOLUCIONARIO DE ARQUITECTURA EN LA NUBE",
            mainSubtitle: "Ingeniero Senior de Software Pionero en Soluciones Escalables",
            mainDescription: "Arquitectura e implementación de un sistema distribuido de alto rendimiento que maneja más de 10M de transacciones diarias. Reducción de costos de infraestructura en un 60% mientras se mejoran los tiempos de respuesta en un 300%.",
            mainQuote: "Una clase magistral en arquitectura moderna en la nube y diseño de sistemas distribuidos",
            title: "DESTACADOS DEL PORTAFOLIO TÉCNICO",
            aiTitle: "PLATAFORMA DE ANÁLISIS DE CÓDIGO IMPULSADA POR IA",
            aiSubtitle: "Aprendizaje Automático se Une al Desarrollo de Software",
            aiDescription: "Desarrollo de una plataforma innovadora de análisis de código que utiliza IA para detectar patrones, vulnerabilidades y oportunidades de optimización en tiempo real. El sistema procesa más de 1M de líneas de código diariamente con una precisión del 99.9%.",
            aiQuote: "Enfoque revolucionario para la revisión y optimización automatizada de código",
            blockchainTitle: "SOLUCIÓN DE CADENA DE SUMINISTRO BASADA EN BLOCKCHAIN",
            blockchainSubtitle: "Transformando la Transparencia en la Cadena de Suministro",
            blockchainDescription: "Creación de un sistema descentralizado de seguimiento de cadena de suministro utilizando tecnología blockchain. Implementación de contratos inteligentes para el cumplimiento automatizado y reducción del tiempo de verificación en un 85%.",
            blockchainQuote: "Estableciendo nuevos estándares en transparencia y eficiencia de la cadena de suministro",
            analyticsTitle: "PANEL DE ANÁLISIS EN TIEMPO REAL",
            analyticsSubtitle: "Visualización de Datos Reimaginada",
            analyticsDescription: "Construcción de una plataforma de análisis altamente responsiva que procesa 50TB de datos diariamente. Incluye visualización en tiempo real, análisis predictivo y herramientas de informes personalizados.",
            analyticsQuote: "Convirtiendo datos complejos en información accionable",
            microservicesTitle: "ÉXITO EN LA MIGRACIÓN A MICROSERVICIOS",
            microservicesSubtitle: "Modernización de Sistema Legacy",
            microservicesDescription: "Liderazgo en la migración exitosa de una aplicación monolítica a una arquitectura de microservicios. Mejora en la frecuencia de despliegue en un 400% y reducción del tiempo de inactividad del sistema en un 75%.",
            microservicesQuote: "Ejecución ejemplar de principios arquitectónicos modernos"
        },
        footer: {
            warning: "Advertencia: Leer este portafolio puede causar impulsos repentinos de refactorizar código y optimizar algoritmos",
            sideEffects: "Los efectos secundarios pueden incluir mejores prácticas de codificación y una apreciación por la arquitectura limpia"
        }
    }
};
