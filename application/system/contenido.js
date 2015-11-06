/* 
*  Esta configuración corresponde al contenido de un objeto de aprendizaje del
*  curso de transferencia de conocimiento. Para llenar este contenido por favor
*  inicie por asignar un indice dentro del objeto "macrorecursos" para cada 
*  macrorecurso definido en la arquitectura aprobada para el curso, es decir:
*  
*  1: portada 
*  2: sensibilización de apertura
*  3: contextualización
*  4: contenido y actividades
*  5: recordemos
*  6: preguntas de conocimiento
*  7: sensibilización de cierre
*  
*  Cada uno de estos macrorecursos cuenta con atributos que definen su nombre y 
*  un id que permita al software identificarlo con mas facilidad. Esta información
*  no debe cambiar entre un objeto y otro.
*  
*  También cuentan con un atributo recursos, el cual conserva la información de 
*  cada recurso contenido en un macrorecurso específico. El atributo recursos es
*  también un objeto Javascript y debe asignarse un índice numérico (iniciando 
*  desde 1) que aumenta en 1 para cada recurso.
*  
*  Cada uno de estos recursos cuenta con atributos que definen su nombre, tipo y estilo.
*  El tipo para un recurso siempre debe ser "layout", el cual corresponde a una disposición
*  (retícula) de elementos. Es en el atributo estilo donde podemos definir la reticula 
*  específica que va a utilizar el recurso, por medio de un identificador previamente 
*  definido para las variaciones disponibles.
*  
*  También cuentan con un atributo componentes, el cual conserva la información de 
*  cada contenido a situarse en un espacio de la retícula definida en estilo.
*  El atributo componentes es también un objeto Javascript y debe asignarse un índice
*  numérico (iniciando desde 1) que aumenta en 1 para cada componente.
*  
*  Cada uno de estos componentes cuenta con atributos que definen su tipo y estilo.
*  Algunos componentes como los títulos podrían tener además atributos propios (mostrar_icono).
*  El tipo para un componente representa los posibles contenidos que pueden asignarse a 
*  una sección de layout, estos incluyen entre otros:
*  
*  título
*  párrafo
*  imagen
*  botón
*  reproductor
*  lista
*  organizadores gráficos
*  actividades.
*  
*  Sin embargo, cada actividad correspondrá a un tipo de componente diferente (drag_drop, pick_many, etc...).
*  
*  El atributo estilo, al igual que para los recursos definirá la disposición de elementos
*  dentro del componente (por ejemplo, si una lista es vertical u horizontal).
*  
*  También cuentan con un atributo elementos, el cual conserva la información de 
*  cada elemento a distribuirse dentro de un componente. El atributo elementos es también 
*  un objeto Javascript y debe asignarse un índice numérico (iniciando desde 1) 
*  que aumenta en 1 para cada componente.
*  
*  Los atributos de cada objeto consignado en el atributo elementos son propios de cada
*  componente y se encuentran listados en el listado de elementos. 
*/

var macrorecursos = {
    1: {
        id: "portada",
        nombre: "portada",
        recursos: {
            1: {
                nombre: "portada",
                tipo: "layout",
                estilo: "layout_portada",
                componentes: {
                    1: {
                        tipo: "imagen",
                        estilo: "fondo_portada",
                        elementos: {
                            url: "img/fondo_portada.png"
                        }
                    },
                    2: {
                        tipo: "organizador",
                        estilo: "organizador_saberes",
                        elementos: {
                            tabs: {
                                1: {
                                    tag: "",
                                    titulo: "Saberes",
                                    parrafos: {
                                        1: "<viñeta> Las TIC: Conceptualización.",
                                        2: "<viñeta> Recursos, herramientas y programas.",
                                        3: "<viñeta> TIC en educación.",
                                        4: "<viñeta> Nuevos conceptos.",
                                        5: "<viñeta> Nuevos competencias."
                                    }
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "organizador",
                        estilo: "organizador_saberes",
                        elementos: {
                            tabs: {
                                1: {
                                    tag: "",
                                    titulo: "Resultados",
                                    parrafos: {
                                        1: "<viñeta> Caracterizar los Recursos Educativos Digitales para la enseñanza de lenguas en el SENA de acuerdo con los criterios pedagógicos establecidos por la institución."
                                    }
                                }
                            }
                        }
                    },
                    4: {
                        tipo: "titulo",
                        estilo: "titulo_portada",
                        mostrar_icono: true,
                        elementos: {
                            titulo: "¿Qué se entiende por TIC?"
                        }
                    }
                }
            }
        }
    },
    2: {
        id: "sensibilizacion_apertura",
        nombre: "sensibilización de apertura",
        recursos: {
            1: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_sensibilizacion",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        mostar_icono: true,
                        elementos: {
                            titulo: "Sensibilización de Apertura"
                        }
                    },
                    2: {
                        tipo: "reproductor",
                        estilo: "reproductor_sensibilizacion",
                        elementos: {
                            1: {
                                tipo: "video",
                                url: "media/audio/melones.mp4",
                                imagen_reproductor: "img/melon.png"
                            }
                        }
                    }
                }
            }
        }
    },
    3: {
        id: "contextualizacion",
        nombre: "contextualización",
        recursos: {
            1: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_contextualizacion",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        mostar_icono: true,
                        elementos: {
                            titulo: "Sensibilización de Apertura"
                        }
                    },
                    2: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        elementos: {
                            parrafos: {
                                1: {
                                    texto: ""
                                },
                                2: {
                                    texto: ""
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "reproductor",
                        estilo: "estandar",
                        elementos: {
                            1: {
                                tipo: "video",
                                contenido: {
                                    url: "media/videos/s_apertura.mp4"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ,
    4: {
        id: "contenido",
        nombre: "Contenido/Actividades",
        recursos: {
            1: {
                nombre: "subportada1",
                tipo: "layout",
                estilo: "layout_subportada",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        mostar_icono: true,
                        elementos: {
                            titulo: "Contenido 1"
                        }
                    },
                    2: {
                        tipo: "imagen",
                        estilo: "imagen_subportada",
                        elementos: {
                            url: "img/subportada.png",
                            title: ""
                        }
                    }
                }
            },
            2: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_recurso_1",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        mostar_icono: true,
                        elementos: {
                            titulo: "Contenido 1"
                        }
                    },
                    2: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        elementos: {
                            parrafos: {
                                1: {
                                    texto: "Las herramientas digitales son programas que ayudan a interactuar con la tecnología para el logro de una variedad de propósitos, por ejemplo:"
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "lista",
                        estilo: "lista_vertical",
                        categoria: "no_numerada",
                        elementos: {
                            1: {
                                texto: "Permiten la comunicación en tiempo real sin barreras de tiempo y espacio."
                            },
                            2: {
                                texto: "permiten crear bases de datos, encuestas, etc."
                            },
                            3: {
                                texto: "facilitan la recopilación, manejo de la información, gestión de procesos pedagógicos, entre muchos otros."
                            },
                            4: {
                                texto: "facilitan la recopilación, manejo de la información, gestión de procesos pedagógicos, entre muchos otros."
                            },
                            5: {
                                texto: "le permiten al aprendiz: buscar, seleccionar, registrar información, y muchas otras actividades."
                            }
                        }
                    },
                    4: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        elementos: {
                            parrafos: {
                                1: {
                                    texto: "<b>Instrucción:</b> En el campo de la educación podemos mencionar las siguientes aplicaciones. Haga clic sobre los botones listados a la izquierda."
                                }
                            }
                        }
                    },
                    5: {
                        tipo: "organizador",
                        estilo: "organizador_3",
                        elementos: {
                            tabs: {
                                1: {
                                    tag: "CMS",
                                    titulo: "",
                                    parrafos: {
                                        1: "parrafo 1",
                                        2: "parrafo 2"
                                    }
                                },
                                2: {
                                    tag: "LMS",
                                    titulo: "",
                                    parrafos: {
                                        1: "parrafo 1",
                                        2: "parrafo 2"
                                    }
                                },
                                3: {
                                    tag: "LCMS",
                                    titulo: "",
                                    parrafos: {
                                        1: "parrafo 1",
                                        2: "parrafo 2"
                                    }
                                },
                                4: {
                                    tag: "Redes Sociales",
                                    titulo: "",
                                    parrafos: {
                                        1: "parrafo 1",
                                        2: "parrafo 2"
                                    }
                                },
                                5: {
                                    tag: "Multimedia",
                                    titulo: "",
                                    parrafos: {
                                        1: "parrafo 1",
                                        2: "parrafo 2"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            3: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_recurso_4",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        mostar_icono: true,
                        elementos: {
                            titulo: "Contenido 2"
                        }
                    },
                    2: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        elementos: {
                            parrafos: {
                                1: {
                                    texto: "Un programa es un conjunto de instrucciones ordenadas de manera lógica que permiten el procesamiento de la información, para el logro de unos resultados específicos. Algunos ejemplos de programa o aplicación son los procesadores de texto, las hojas de cálculo, los juegos, los simuladores y los buscadores."
                                },
                                2: {
                                    texto: "<b>Instrucción:</b> Revisemos lo que hasta ahora hemos estudiado acerca de las TIC. Alba es instructora de Logística en el SENA. ¿Cuál de los siguientes elementos le permite a Alba personalizar y manejar un curso de nivel intermedio por módulos? Seleccione la respuesta correcta."
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "pick_many",
                        estilo: "pickmany_vertical",
                        elementos: {
                            preguntas: {
                                1: {
                                    pregunta: "De las siguientes opciones solo una es correcta.",
                                    tipo_picks: "texto",
                                    picks: {
                                        1: {
                                            texto: "El sistema operativo"
                                        },
                                        2: {
                                            texto: "Las bases de datos"
                                        },
                                        3: {
                                            texto: "el LMS",
                                            correct: true
                                        },
                                        4: {
                                            texto: "Las redes sociales"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    4: {
                        tipo: "boton",
                        estilo: "submit_actividad",
                        elementos: {
                            tag: "Enviar",
                            funcion: "enviar_actividad"
                        }
                    }
                }
            }
        }
    },
    5: {
        id: "recordemos",
        nombre: "recordemos",
        recursos: {
            1: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_recordemos",
                componentes: {
                    1: {
                        tipo: "parrafo",
                        estilo: "parrafo_basico",
                        elementos: {
                            parrafos: {
                                1: {
                                    texto: "<b>Instrucción:</b> Para recordar algunos conceptos, lea las siguientes definiciones. Haga clic en las flechas para desplazarse."
                                }
                            }
                        }
                    },
                    2: {
                        tipo: "organizador",
                        estilo: "organizador_saberes",
                        elementos: {
                            tabs: {
                                1: {
                                    tag: "",
                                    estimulo: {
                                        tipo: "imagen",
                                        url: "img/estimulo1.jpg"
                                    },
                                    titulo: "",
                                    parrafos: {
                                        1: "Las Tecnologías de la Información y las Comunicaciones son recursos, herramientas y programas que posibilitan la creación, manipulación y distribución de la información mediante medios impresos, digitales y audiovisuales."
                                    }
                                },
                                2: {
                                    tag: "",
                                    estimulo: {
                                        tipo: "imagen",
                                        url: "img/estimulo2.jpg"
                                    },
                                    titulo: "",
                                    parrafos: {
                                        1: "Las TIC hacen parte de todos los ámbitos, incluyendo el campo de la educación. Si bien las TIC no son el fin último de la educación, si han transformado la manera como interactuamos entre nosotros mismos y con los diferentes dispositivos. "
                                    }
                                },
                                3: {
                                    tag: "",
                                    estimulo: {
                                        tipo: "imagen",
                                        url: "img/estimulo3.jpg"
                                    },
                                    titulo: "",
                                    parrafos: {
                                        1: "La implementación de las TIC requiere aprendices e instructores con nuevas competencias relacionadas con la gestión del tiempo, la investigación y un papel activo en la sociedad del conocimiento, entre otras."
                                    }
                                },
                                4: {
                                    tag: "",
                                    estimulo: {
                                        tipo: "imagen",
                                        url: "img/estimulo4.jpg"
                                    },
                                    titulo: "",
                                    parrafos: {
                                        1: "Web 2.0 es un conjunto de herramientas digitales compartidas por grupos de usuarios que aportan y comparten información para la solución de uno o varios problemas (wikis, blogs, foros, redes sociales)."
                                    }
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "imagen",
                        estilo: "personaje",
                        elementos: {
                            url: "img/personaje.png",
                            title: "Marcos"
                        }
                    }
                }
            }
        }
    },
    6: {
        id: "preguntas",
        nombre: "preguntas de conocimiento",
        recursos: {
            1: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_examen",
                componentes: {
                    1: {
                        tipo: "layout",
                        estilo: "layout_portada_examen",
                        componentes: {
                            1: {
                                tipo: "parrafo",
                                estilo: "parrafo_basico",
                                elementos: {
                                    parrafos: {
                                        1: {
                                            texto: "<b>Verifique la apropiación de los saberes que hemos estudiado en este tema respondiendo a las siguientes preguntas.</b>"
                                        },
                                        2: {
                                            texto: "Instrucciones:"
                                        }
                                    }
                                }
                            },
                            2: {
                                tipo: "lista",
                                estilo: "lista_vertical",
                                categoria: "no_numerada",
                                elementos: {
                                    1: {
                                        texto: "A continuación usted podrá encontrar alguno(s) de los siguientes tipos de preguntas: opción múltiple, verdadero/falso, de relación o de selección."
                                    },
                                    2: {
                                        texto: "Lea cada pregunta cuidadosamente, revise todas las opciones y elija la respuesta que considere correcta."
                                    },
                                    3: {
                                        texto: "Después de elegir la respuesta haga clic en la flecha para continuar a la siguiente pregunta."
                                    },
                                    4: {
                                        texto: "En la última pregunta se habilitará el botón Enviar."
                                    }
                                }
                            },
                            3: {
                                tipo: "parrafo",
                                estilo: "parrafo_centrado",
                                elementos: {
                                    parrafos: {
                                        1: {
                                            texto: "<b>Recuerde:</b>"
                                        },
                                        2: {
                                            texto: "Responda todas las preguntas antes de hacer clic en el botón Enviar."
                                        }
                                    }
                                }
                            },
                            4: {
                                tipo: "boton",
                                estilo: "iniciar_actividad",
                                elementos: {
                                    tag: "Enviar",
                                    funcion: "iniciar_examen"
                                }
                            }
                        }
                    },
                    2: {
                        tipo: "layout",
                        estilo: "layout_recurso_5",
                        componentes: {
                            1: {
                                tipo: "parrafo",
                                estilo: "parrafo_basico",
                                elementos: {
                                    parrafos: {
                                        1: {
                                            texto: "<b>Instrucción:</b> Organice las siguientes competencias en la columna correspondiente (para el instructor o para el aprendiz). Haga clic en la flecha para ver las opciones. "
                                        }
                                    }
                                }
                            },
                            2: {
                                tipo: "select",
                                estilo: "select_vertical",
                                elementos: {
                                    preguntas: {
                                        1: {
                                            selects: {
                                                tipo_estimulo: "texto",
                                                1: {
                                                    texto: "El nuevo instructor debe",
                                                    opciones: {
                                                        1: {
                                                            texto: "Generar conocimiento"
                                                        },
                                                        2: {
                                                            texto: "Profundizar conocimiento"
                                                        },
                                                        3: {
                                                            texto: "Tener nociones básicas de TIC",
                                                            correct: true
                                                        }
                                                    }
                                                },
                                                2: {
                                                    texto: "El nuevo instructor debe",
                                                    opciones: {
                                                        1: {
                                                            texto: "Tener nociones básicas de TIC"
                                                        },
                                                        2: {
                                                            texto: "Generar conocimiento"
                                                        },
                                                        3: {
                                                            texto: "Profundizar conocimiento",
                                                            correct: true
                                                        }
                                                    }
                                                },
                                                3: {
                                                    texto: "El nuevo instructor debe",
                                                    opciones: {
                                                        1: {
                                                            texto: "Profundizar conocimiento"
                                                        },
                                                        2: {
                                                            texto: "Tener nociones básicas de TIC"
                                                        },
                                                        3: {
                                                            texto: "Generar conocimiento",
                                                            correct: true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            3: {
                                tipo: "select",
                                estilo: "select_vertical",
                                elementos: {
                                    preguntas: {
                                        1: {
                                            selects: {
                                                tipo_estimulo: "texto",
                                                1: {
                                                    texto: "El aprendiz digital debe",
                                                    opciones: {
                                                        1: {
                                                            texto: "Tener autonomía"
                                                        },
                                                        2: {
                                                            texto: "Gestionar su tiempo"
                                                        },
                                                        3: {
                                                            texto: "Ser autodisciplinado",
                                                            correct: true
                                                        }
                                                    }
                                                },
                                                2: {
                                                    texto: "El nuevo instructor debe",
                                                    opciones: {
                                                        1: {
                                                            texto: "Ser autodisciplinado"
                                                        },
                                                        2: {
                                                            texto: "Tener autonomía"
                                                        },
                                                        3: {
                                                            texto: "Gestionar su tiempo",
                                                            correct: true
                                                        }
                                                    }
                                                },
                                                3: {
                                                    texto: "El nuevo instructor debe",
                                                    opciones: {
                                                        1: {
                                                            texto: "Gestionar su tiempo"
                                                        },
                                                        2: {
                                                            texto: "Ser autodisciplinado"
                                                        },
                                                        3: {
                                                            texto: "Tener autonomía",
                                                            correct: true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    3: {
                        tipo: "layout",
                        estilo: "layout_recurso_4",
                        componentes: {
                            1: {
                                tipo: "parrafo",
                                estilo: "parrafo_basico",
                                elementos: {
                                    parrafos: {
                                        1: {
                                            texto: "<b>Instrucción:</b> seleccione la opción que completa la frase."
                                        }
                                    }
                                }
                            },
                            2: {
                                tipo: "pick_many",
                                estilo: "pickmany_vertical",
                                elementos: {
                                    preguntas: {
                                        1: {
                                            pregunta: "Los campos virtuales permiten la interacción con _____",
                                            tipo_picks: "texto",
                                            picks: {
                                                1: {
                                                    texto: "otros actores",
                                                    correct: true
                                                },
                                                2: {
                                                    texto: "dispositivos electrónicos"
                                                },
                                                3: {
                                                    texto: "el conocimiento"
                                                },
                                                4: {
                                                    texto: "dispositivos y conocimiento"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    4: {
                        tipo: "layout",
                        estilo: "layout_recurso_4",
                        componentes: {
                            1: {
                                tipo: "parrafo",
                                estilo: "parrafo_basico",
                                elementos: {
                                    parrafos: {
                                        1: {
                                            texto: "<b>Instrucción:</b> seleccione la opción que completa la frase."
                                        }
                                    }
                                }
                            },
                            2: {
                                tipo: "pick_many",
                                estilo: "pickmany_vertical",
                                elementos: {
                                    preguntas: {
                                        1: {
                                            pregunta: "Las personas y las instituciones generan _____________ al cambio",
                                            tipo_picks: "texto",
                                            picks: {
                                                1: {
                                                    texto: "resistencia",
                                                    correct: true
                                                },
                                                2: {
                                                    texto: "deseo"
                                                },
                                                3: {
                                                    texto: "amor por"
                                                },
                                                4: {
                                                    texto: "severidad"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    7: {
        id: "sensibilizacion_cierre",
        nombre: "sensibilización de cierre",
        recursos: {
            1: {
                nombre: "nombre del recurso",
                tipo: "layout",
                estilo: "layout_sensibilizacion",
                componentes: {
                    1: {
                        tipo: "titulo",
                        estilo: "titulo_recurso",
                        mostar_icono: true,
                        elementos: {
                            titulo: "Sensibilización de Cierre"
                        }
                    },
                    2: {
                        tipo: "reproductor",
                        estilo: "reproductor_sensibilizacion",
                        elementos: {
                            1: {
                                tipo: "video",
                                url: "media/audio/papayas.mp4",
                                imagen_reproductor: "img/papaya.png"
                            }
                        }
                    }
                }
            }
        }
    }
};


