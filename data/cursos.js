
export const cursos = [
    {
        id: "curso-web",
        nombreCurso: "Curso Desarrollador Web Full Stack",
        descripcion: "Tu carrera profesional en desarrollo web full stack empieza aquí. Aprendizaje y preparación para entrevistas. Desarrolla habilidades a tu propio ritmo.",
        imagen: "../assets/img/cursos/curso_web.jpg",
        precio: "$92.000",
        profesor: {
            nombreCompleto:"Paula Cortéz",
            extractos:["Ingeniera en sistemas graduada de la Universidad Nacional de La Matanza, cuenta con certificaciones en HTML5, CSS3, JavaScript avanzado y frameworks modernos como React y Vue.js."," Ha liderado equipos de desarrollo, diseñado aplicaciones web responsivas y participado en conferencias y workshops sobre programación y tecnologías web."],
            valoracion: "★★★★☆"
        },
        clases: [
            {
                titulo: "Introducción",
                contenido: [
                    {
                        titulo: "Video: ¿Qué es la programación?",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Objetivos y expectativas",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Herramientas necesarias",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "HTML Básico",
                contenido: [
                    {
                        titulo: "Video: Estructura de un documento HTML",
                        duracion: "20 min"
                    },
                    {
                        titulo: "Video: Etiquetas comunes en HTML",
                        duracion: "25 min"
                    },
                    {
                        titulo: "Examen: Preguntas sobre HTML básico",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "CSS Básico",
                contenido: [
                    {
                        titulo: "Video: Introducción a CSS",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Video: Selectores y propiedades básicas",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Examen: Preguntas sobre CSS básico",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "JavaScript Básico",
                contenido: [
                    {
                        titulo: "Video: Introducción a JavaScript",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Video: Variables y tipos de datos",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: Preguntas sobre JavaScript básico",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Desarrollo Frontend",
                contenido: [
                    {
                        titulo: "Video: Introducción al desarrollo frontend",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Video: Frameworks y librerías populares",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Examen: Preguntas sobre desarrollo frontend",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Desarrollo Backend",
                contenido: [
                    {
                        titulo: "Video: Introducción al desarrollo backend",
                        duracion: "1h"
                    },
                    {
                        titulo: "Video: Bases de datos y APIs",
                        duracion: "1h"
                    },
                    {
                        titulo: "Examen: Preguntas sobre desarrollo backend",
                        duracion: "25 min"
                    }
                ]
            },
            {
                titulo: "Proyecto Final",
                contenido: [
                    {
                        titulo: "Video: Descripción del proyecto final",
                        duracion: "1h"
                    },
                    {
                        titulo: "Video: Requisitos y criterios de evaluación",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Entrega del proyecto final",
                        duracion: "Variable"
                    }
                ]
            }
        ]
    },
    {
        id: "curso-bdd",
        nombreCurso: "Curso de Bases de Datos Relacionales",
        descripcion: "Domina el diseño, administración y optimización de bases de datos. Aprende SQL, modelado de datos y gestión de información a tu propio ritmo.",
        imagen: "../assets/img/cursos/curso_bdd.jpg",
        precio: "$127.000",
        profesor: {
            nombreCompleto: "Juan Martínez",
            extractos: [
                "Licenciado en Informática especializado en sistemas de gestión de datos. Cuenta con certificaciones en SQL Server, Oracle Database y MySQL.",
                "Ha liderado proyectos de implementación de bases de datos empresariales, optimización de consultas y modelado de información para grandes organizaciones."
            ],
            valoracion: "★★★★★"
        },
        clases: [
            {
                titulo: "Introducción a las Bases de Datos",
                contenido: [
                    {
                        titulo: "Video: ¿Qué es una base de datos?",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Objetivos y usos de las BD",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Tipos de bases de datos",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Modelo Relacional",
                contenido: [
                    {
                        titulo: "Video: Conceptos de tablas, filas y columnas",
                        duracion: "20 min"
                    },
                    {
                        titulo: "Relaciones entre entidades",
                        duracion: "25 min"
                    },
                    {
                        titulo: "Examen: Modelo relacional",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "Lenguaje SQL",
                contenido: [
                    {
                        titulo: "Video: Consultas básicas SELECT",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Video: INSERT, UPDATE y DELETE",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Examen: SQL básico",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "Normalización",
                contenido: [
                    {
                        titulo: "Video: Concepto de normalización",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Formas normales",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: Ejercicios de normalización",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Consultas Avanzadas",
                contenido: [
                    {
                        titulo: "Video: Joins y subconsultas",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Video: Funciones agregadas y vistas",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Examen: SQL avanzado",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Administración de Bases de Datos",
                contenido: [
                    {
                        titulo: "Video: Seguridad y usuarios",
                        duracion: "1h"
                    },
                    {
                        titulo: "Video: Respaldo y recuperación",
                        duracion: "1h"
                    },
                    {
                        titulo: "Examen: Administración de BD",
                        duracion: "25 min"
                    }
                ]
            },
            {
                titulo: "Proyecto Final",
                contenido: [
                    {
                        titulo: "Video: Diseño de una base de datos completa",
                        duracion: "1h"
                    },
                    {
                        titulo: "Video: Implementación en un SGBD",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Entrega del proyecto final",
                        duracion: "Variable"
                    }
                ]
            }
        ]
    },
    {
        id: "curso-office",
        nombreCurso: "Curso Certificado de Microsoft Office",
        descripcion: "Aprendé a dominar Microsoft Office: Word, Excel y PowerPoint. Mejora tu productividad, crea documentos profesionales y colabora en la nube.",
        imagen: "../assets/img/cursos/curso_office.png",
        precio: "$75.000",
        profesor: {
            nombreCompleto: "María López",
            extractos: [
                "Especialista en ofimática con más de 10 años formando en entornos educativos y empresariales. Experta en Word, Excel, PowerPoint y herramientas de colaboración.",
                "Ha coordinado capacitaciones para empresas y desarrollado material didáctico para mejorar la productividad y el trabajo en equipo en la nube."
            ],
            valoracion: "★★★★☆"
        },
        clases: [
            {
                titulo: "Introducción a Microsoft Office",
                contenido: [
                    {
                        titulo: "Video: Qué es Microsoft Office y sus aplicaciones principales",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Instalación y configuración básica",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Navegación por la interfaz y menús comunes",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Microsoft Word",
                contenido: [
                    {
                        titulo: "Video: Creación y edición de documentos básicos",
                        duracion: "20 min"
                    },
                    {
                        titulo: "Formato de texto, párrafos y estilos",
                        duracion: "25 min"
                    },
                    {
                        titulo: "Examen: Word esencial",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "Microsoft Excel",
                contenido: [
                    {
                        titulo: "Video: Introducción a hojas de cálculo y celdas",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Formulas básicas, funciones y formato condicional",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Examen: Excel básico",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "Microsoft PowerPoint",
                contenido: [
                    {
                        titulo: "Video: Creación de presentaciones efectivas",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Animaciones, transiciones y diseño de diapositivas",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: PowerPoint práctico",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Herramientas Avanzadas",
                contenido: [
                    {
                        titulo: "Video: Integración entre Word, Excel y PowerPoint",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Plantillas, macros básicas y recursos en línea",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Examen: Herramientas avanzadas",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Colaboración y la Nube",
                contenido: [
                    {
                        titulo: "Video: Trabajo colaborativo con OneDrive y Teams",
                        duracion: "1h"
                    },
                    {
                        titulo: "Control de versiones y permisos de archivo",
                        duracion: "1h"
                    },
                    {
                        titulo: "Examen: Colaboración en Office",
                        duracion: "25 min"
                    }
                ]
            },
            {
                titulo: "Proyecto Final",
                contenido: [
                    {
                        titulo: "Video: Creación de un informe profesional o presentación",
                        duracion: "1h"
                    },
                    {
                        titulo: "Video: Entrega y buenas prácticas de documentación",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Entrega del proyecto final",
                        duracion: "Variable"
                    }
                ]
            }
        ]
    },
    {
        id: "curso-ia",
        nombreCurso: "Curso de Inteligencia Artificial",
        descripcion: "Aprendé los conceptos básicos, aplicaciones reales y herramientas esenciales que están revolucionando la tecnología. Un curso pensado para curiosos, estudiantes y profesionales que quieran dar sus primeros pasos en la era de la inteligencia artificial.",
        imagen: "../assets/img/cursos/curso_ia.jpg",
        precio: "$142.200",
        profesor: {
            nombreCompleto: "Zoe Robledo",
            extractos: [
                "Ingeniera en informática graduada de la Universidad de Buenos Aires, especializada en inteligencia artificial y ciencia de datos. Cuenta con certificaciones en aprendizaje automático, redes neuronales y procesamiento de lenguaje natural, además de experiencia práctica en el uso de herramientas como TensorFlow y Python para proyectos de análisis predictivo e IA aplicada.",
                "Ha liderado proyectos de inteligencia artificial aplicados a la educación y la industria, desarrollado modelos de machine learning para la toma de decisiones y participado en conferencias y workshops sobre inteligencia artificial, ciencia de datos y tecnologías emergentes."
            ],
            valoracion: "★★★★☆"
        },
        clases: [
            {
                titulo: "Introducción a la IA",
                contenido: [
                    {
                        titulo: "Video: ¿Qué es la Inteligencia Artificial?",
                        duracion: "20 min"
                    },
                    {
                        titulo: "Video: Historia y aplicaciones actuales",
                        duracion: "25 min"
                    },
                    {
                        titulo: "Examen: Conceptos básicos de IA",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "Fundamentos de Machine Learning",
                contenido: [
                    {
                        titulo: "Video: ¿Qué es el aprendizaje automático?",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Video: Tipos de aprendizaje (supervisado, no supervisado, reforzado)",
                        duracion: "35 min"
                    },
                    {
                        titulo: "Examen: Fundamentos de ML",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Redes Neuronales Básicas",
                contenido: [
                    {
                        titulo: "Video: Concepto de neurona artificial",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Video: Estructura de una red neuronal simple",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: Redes neuronales básicas",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Procesamiento de Datos",
                contenido: [
                    {
                        titulo: "Video: Limpieza y preparación de datos",
                        duracion: "45 min"
                    },
                    {
                        titulo: "Video: Conjuntos de datos y su importancia",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Examen: Procesamiento de datos",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Herramientas y Frameworks de IA",
                contenido: [
                    {
                        titulo: "Video: Introducción a Python para IA",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Video: Librerías populares (TensorFlow, PyTorch, Scikit-learn)",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Examen: Herramientas y frameworks",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Aplicaciones de la IA",
                contenido: [
                    {
                        titulo: "Video: IA en la vida cotidiana (salud, educación, finanzas)",
                        duracion: "1h"
                    },
                    {
                        titulo: "Video: Ética y desafíos de la inteligencia artificial",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: Aplicaciones y ética",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Proyecto Final",
                contenido: [
                    {
                        titulo: "Video: Descripción del proyecto final",
                        duracion: "45 min"
                    },
                    {
                        titulo: "Video: Requisitos y criterios de evaluación",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Entrega del proyecto: Mini modelo de IA básico",
                        duracion: "Variable"
                    }
                ]
            }
        ]
    },
    {
        id: "curso-java",
        nombreCurso: "Curso Programación Básica en Java",
        descripcion: "Aprende Java desde cero hasta avanzado. Domina programación orientada a objetos, colecciones, manejo de archivos y conexión a bases de datos con proyectos prácticos.",
        imagen: "../assets/img/cursos/curso_java.png",
        precio: "$126.000",
        profesor: {
            nombreCompleto: "Juan Lopez",
            extractos: [
                "Ingeniero en Sistemas especializado en desarrollo con Java. Más de 10 años de experiencia en aplicaciones empresariales y backend.",
                "Ha trabajado en proyectos de software a gran escala, integración de APIs, frameworks como Spring y Hibernate, y soluciones orientadas a objetos."
            ],
            valoracion: "★★★★★"
        },
        clases: [
            {
                titulo: "Introducción a Java",
                contenido: [
                    {
                        titulo: "Video: Historia y características del lenguaje",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Instalación de JDK y entorno de desarrollo",
                        duracion: "20 min"
                    },
                    {
                        titulo: "Primer programa en Java",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Fundamentos del Lenguaje",
                contenido: [
                    {
                        titulo: "Video: Variables, tipos de datos y operadores",
                        duracion: "25 min"
                    },
                    {
                        titulo: "Estructuras de control (if, switch, bucles)",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Examen: Fundamentos de Java",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Programación Orientada a Objetos",
                contenido: [
                    {
                        titulo: "Video: Clases y objetos",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Herencia, polimorfismo y encapsulamiento",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: POO en Java",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Manejo de Colecciones",
                contenido: [
                    {
                        titulo: "Video: Arrays y ArrayList",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Map, Set y colecciones avanzadas",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: Colecciones en Java",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Manejo de Archivos y Excepciones",
                contenido: [
                    {
                        titulo: "Video: Excepciones y try-catch",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Lectura y escritura de archivos",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: Archivos y excepciones",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Java Avanzado",
                contenido: [
                    {
                        titulo: "Video: Interfaces y clases abstractas",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Uso de hilos y concurrencia",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Examen: Java avanzado",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Proyecto Final",
                contenido: [
                    {
                        titulo: "Video: Creación de una aplicación en Java",
                        duracion: "1h"
                    },
                    {
                        titulo: "Uso de base de datos con JDBC",
                        duracion: "45 min"
                    },
                    {
                        titulo: "Entrega del proyecto final",
                        duracion: "Variable"
                    }
                ]
            }
        ]
    },
    {
        id: "curso-ingles",
        nombreCurso: "Curso de Certificado de Ingles",
        descripcion: "Aprende inglés desde cero hasta un nivel avanzado. Mejora tu gramática, vocabulario, comprensión auditiva y habilidades de conversación.",
        imagen: "../assets/img/cursos/curso_ingles.jpg",
        precio: "$134.000",
        profesor: {
            nombreCompleto: "Emilia Leiva",
            extractos: [
                "Licenciada en Lenguas Modernas con especialización en enseñanza del inglés como segunda lengua. Más de 10 años de experiencia en docencia internacional.",
                "Ha trabajado en programas de intercambio, formación de empresas y preparación de exámenes internacionales como TOEFL, IELTS y Cambridge."
            ],
            valoracion: "★★★★★"
        },
        clases: [
            {
                titulo: "Introducción al Inglés",
                contenido: [
                    {
                        titulo: "Video: Alfabeto y pronunciación",
                        duracion: "15 min"
                    },
                    {
                        titulo: "Saludos y presentaciones",
                        duracion: "20 min"
                    },
                    {
                        titulo: "Examen: Introducción",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "Gramática Básica",
                contenido: [
                    {
                        titulo: "Verbo to be",
                        duracion: "20 min"
                    },
                    {
                        titulo: "Artículos y sustantivos",
                        duracion: "25 min"
                    },
                    {
                        titulo: "Examen: Gramática básica",
                        duracion: "15 min"
                    }
                ]
            },
            {
                titulo: "Vocabulario y Expresiones",
                contenido: [
                    {
                        titulo: "Vocabulario cotidiano",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Expresiones comunes",
                        duracion: "25 min"
                    },
                    {
                        titulo: "Examen: Vocabulario básico",
                        duracion: "10 min"
                    }
                ]
            },
            {
                titulo: "Comprensión Auditiva",
                contenido: [
                    {
                        titulo: "Escucha de diálogos simples",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Prácticas de listening",
                        duracion: "30 min"
                    },
                    {
                        titulo: "Examen: Listening",
                        duracion: "20 min"
                    }
                ]
            },
            {
                titulo: "Conversación",
                contenido: [
                    {
                        titulo: "Role play de situaciones reales",
                        duracion: "50 min"
                    },
                    {
                        titulo: "Prácticas en pareja o grupo",
                        duracion: "40 min"
                    },
                    {
                        titulo: "Examen: Conversación básica",
                        duracion: "25 min"
                    }
                ]
            },
            {
                titulo: "Inglés Intermedio",
                contenido: [
                    {
                        titulo: "Tiempos verbales",
                        duracion: "1h"
                    },
                    {
                        titulo: "Lectura de textos",
                        duracion: "1h"
                    },
                    {
                        titulo: "Examen: Nivel intermedio",
                        duracion: "30 min"
                    }
                ]
            },
            {
                titulo: "Preparación para Exámenes",
                contenido: [
                    {
                        titulo: "Práctica TOEFL/IELTS",
                        duracion: "1h"
                    },
                    {
                        titulo: "Examen: Simulacro",
                        duracion: "1h"
                    },
                    {
                        titulo: "Entrega del proyecto final",
                        duracion: "Variable"
                    }
                ]
            }
        ]
    }

]


//JS Dialog HTML