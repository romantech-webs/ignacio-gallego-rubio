export const clinic = {
  name: "Ignacio Gallego Rubio, Psicólogo",
  logo: "/images/logo.png",
  tagline: "Psicología cercana y práctica en Barcelona",
  description: "Ignacio Gallego Rubio es psicólogo sanitario en Barcelona especializado en terapias de tercera generación (ACT, Mindfulness). Con 5 estrellas en Google (46 reseñas), ofrece terapia individual, infantil, para adolescentes y consulta online. Enfoque práctico y resolutivo adaptado a cada persona, trabajando ansiedad, depresión, duelo, adicciones y problemas relacionados con la alimentación desde el respeto, la autenticidad y la libertad individual.",
  colors: {
    primary: "#7C3AED",
    secondary: "#1E293B",
    accent: "#A78BFA",
    neutral: "#FAF5FF"
  },
  phone: "633 35 95 81",
  whatsapp: "+34633359581",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros servicios de psicología.",
  email: "",
  address: {
    street: "Carrer del Consell de Cent, 363, Eixample, 08007 Barcelona, España",
    city: "Barcelona",
    province: "Madrid",
    postalCode: "08007",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=6073678309443270143&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Ignacio%20Gallego%20Rubio%2C%20Psic%C3%B3logo%20%4041.3927%2C2.1677&z=16&output=embed",
  coordinates: {
    lat: 41.3927,
    lng: 2.1677
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "10:00–13:00, 16:00–21:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 46,
    url: "https://maps.google.com/?cid=6073678309443270143&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Jordi np",
        rating: 5,
        text: "La experiencia con Ignacio ha sido verdaderamente, muy grata. Un gran profesional y ante todo una gran persona, con una muy buena capacidad de discernimiento, empatía, consejos muy personalizados, buen dinamismo... Quién tenga cualquier problema, sin duda , que contacte con él y verá buenos resultados. Gracias por tu buen trato y por tu gran ayuda que me has ofrecido. Un abrazo",
        date: "Hace 5 meses"
      },
      {
        author: "Marc Armengol",
        rating: 5,
        text: "Muy contento con la terapia que he hecho con Ignacio. Las sesiones han sido online y muy contento con ello tanto por la flexibilidad de la terapia como por la cercanía aún no estando en un despacho.\nMe ha ayudado a ser más yo mismo y estoy muy contento por ello. Es un largo camino que no termina aquí pero ya me he dado cuenta de que es lo que quiero. Muchas gracias",
        date: "Hace 4 meses"
      },
      {
        author: "Armand Company",
        rating: 5,
        text: "Super contento con la ayuda de Ignacio. He sentido desde el principio que me entendía y eso ya fue muy importante para mi. Después ha ido ayudándome a ver las cosas desde una perspectiva que me ha servido y mucho para cambiar lo que tenía que cambiar. Estoy muy agradecido",
        date: "Hace 5 meses"
      },
      {
        author: "Javi González",
        rating: 5,
        text: "Muy agradecido con la ayuda de Ignacio. Ha sido breve mi terapia con el pero me ha servido de mucho. Tiene una visión muy práctica y resolutiva. Tambien he de decir que a pesar de haber sido online, ha sido muy cercano el trato. Muy buena experiencia.",
        date: "Hace 3 meses"
      },
      {
        author: "Victor Manuel López Cobacho",
        rating: 5,
        text: "Ignacio es un profesional excelente: cercano, comprometido y muy humano. Su acompañamiento ha sido clave para salir adelante y reencontrarme conmigo mismo. No puedo estar más agradecido; lo recomiendo al 100%.",
        date: "Hace 3 meses"
      }
    ]
  },
  services: [
    {
      id: "terapia-individual",
      name: "Psicoterapia Individual",
      description: "Sesiones personalizadas desde las terapias contextuales de tercera generación (ACT, terapia analítico funcional). Trabajo con ansiedad, depresión, duelo, adicciones y problemas relacionados con la alimentación. Cada intervención se adapta a tu situación personal porque cada persona es única y requiere un enfoque individualizado.",
      benefits: [
        "Enfoque práctico y resolutivo adaptado a ti",
        "Terapia basada en respeto y autenticidad",
        "Resultados reales desde las primeras sesiones"
      ],
      icon: "User"
    },
    {
      id: "psicologia-infantil",
      name: "Psicología Infantil y Adolescentes",
      description: "Atención especializada para niños y adolescentes con dificultades emocionales, conductuales o de adaptación. Trabajo con un enfoque cercano y respetuoso, ayudando a los más jóvenes a desarrollar herramientas para gestionar sus emociones y relaciones.",
      benefits: [
        "Intervención adaptada a cada etapa evolutiva",
        "Ambiente seguro y de confianza",
        "Colaboración con familias en el proceso"
      ],
      icon: "Baby"
    },
    {
      id: "terapia-online",
      name: "Consulta Online",
      description: "Sesiones de psicoterapia por videollamada con la misma calidad y cercanía que la consulta presencial. Flexibilidad total de horarios sin perder la conexión terapéutica. Ideal si vives fuera de Barcelona o prefieres la comodidad de tu hogar.",
      benefits: [
        "Máxima flexibilidad de horarios",
        "Cercanía aún sin estar en el despacho",
        "Misma efectividad que la terapia presencial"
      ],
      icon: "Monitor"
    },
    {
      id: "mindfulness",
      name: "Mindfulness y ACT",
      description: "Entrenamiento en mindfulness y terapia de aceptación y compromiso (ACT) para aprender a relacionarte de forma diferente con tus pensamientos y emociones. Te ayudo a conectar con tus valores y vivir de manera más consciente y plena.",
      benefits: [
        "Reduce ansiedad y estrés de forma duradera",
        "Conecta con lo que realmente importa",
        "Herramientas prácticas para el día a día"
      ],
      icon: "Brain"
    },
    {
      id: "ansiedad-depresion",
      name: "Ansiedad y Depresión",
      description: "Tratamiento especializado para trastornos de ansiedad, ataques de pánico, fobias y depresión. Utilizando terapias de tercera generación, te ayudo a recuperar tu bienestar emocional con estrategias prácticas y efectivas.",
      benefits: [
        "Comprensión profunda de tu situación",
        "Técnicas validadas científicamente",
        "Recupera tu calidad de vida"
      ],
      icon: "Heart"
    },
    {
      id: "duelo",
      name: "Duelo y Pérdidas",
      description: "Acompañamiento en procesos de duelo complicado y pérdidas significativas. Te ayudo a transitar este camino difícil con comprensión y respeto, encontrando tu propio proceso de sanación.",
      benefits: [
        "Espacio seguro para expresar tu dolor",
        "Acompañamiento respetuoso y empático",
        "Recupera el sentido en tu vida"
      ],
      icon: "Heart"
    },
    {
      id: "adicciones",
      name: "Adicciones y Conductas Compulsivas",
      description: "Tratamiento de adicciones y problemas relacionados con conductas compulsivas. Con experiencia en centros de atención a drogodependencias, ofrezco un enfoque comprensivo y sin juicios para ayudarte a recuperar el control de tu vida.",
      benefits: [
        "Experiencia en centros especializados",
        "Enfoque libre de juicios morales",
        "Plan individualizado de recuperación"
      ],
      icon: "Target"
    },
    {
      id: "coaching",
      name: "Coaching Personal",
      description: "Acompañamiento para alcanzar tus objetivos personales y profesionales. Te ayudo a identificar lo que realmente quieres en tu vida y a dar los pasos necesarios para conseguirlo, conectando con tus valores más profundos.",
      benefits: [
        "Clarifica tus objetivos vitales",
        "Conecta con tus valores auténticos",
        "Plan de acción personalizado"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: "1",
      title: "Contacto inicial",
      description: "Llámame o escríbeme por WhatsApp al 633 35 95 81. Ofrezco una consulta telefónica informativa de 15 minutos gratuita donde podemos hablar de tu situación y resolver tus dudas sobre el proceso terapéutico."
    },
    {
      step: "2",
      title: "Primera visita",
      description: "En la primera sesión nos conocemos y exploramos tu situación actual. Te escucho con atención para entender qué te está pasando y qué te gustaría conseguir. Desde el primer momento sentirás comprensión y respeto absoluto."
    },
    {
      step: "3",
      title: "Proceso terapéutico",
      description: "Trabajamos juntos con sesiones regulares adaptadas a tu ritmo. Utilizo terapias de tercera generación (ACT, mindfulness) con un enfoque práctico y resolutivo. Cada sesión está personalizada porque cada persona es única."
    },
    {
      step: "4",
      title: "Cambio y bienestar",
      description: "Verás cambios reales en tu forma de relacionarte contigo mismo y con tu vida. Te ayudo a ser más tú mismo, a vivir según tus valores y a recuperar o construir la vida que realmente deseas vivir."
    }
  ],
  whyUs: [
    {
      title: "Valoración Excelente de Pacientes",
      description: "5 estrellas en Google con 46 reseñas reales. Mis pacientes destacan la comprensión desde el primer momento, el trato cercano y humano, y los resultados tangibles en su bienestar. Más de 113 opiniones positivas en plataformas de salud avalan mi trabajo.",
      icon: "Award"
    },
    {
      title: "Enfoque Práctico y Resolutivo",
      description: "Trabajo con terapias de tercera generación (ACT, mindfulness) validadas científicamente. Mis pacientes valoran especialmente la visión práctica y resolutiva, viendo cambios reales en su forma de relacionarse consigo mismos y con su vida desde las primeras sesiones.",
      icon: "Target"
    },
    {
      title: "Cercanía También Online",
      description: "Ofrezco terapia presencial en Barcelona y online con total flexibilidad. Mis pacientes de terapia online destacan la cercanía del trato aún sin estar en un despacho físico. La distancia no es barrera para una terapia efectiva y humana.",
      icon: "Monitor"
    },
    {
      title: "Intervención Individualizada",
      description: "Cada persona es única y requiere una intervención personalizada. Adapto mi trabajo a tu situación particular, respetando tu ritmo y tus valores. Mi compromiso es ayudarte a ser más tú mismo y a vivir según lo que realmente te importa.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Equipo de Ignacio Gallego Rubio, Psicólogo",
      role: "Psicólogos Colegiados",
      image: "/images/team/placeholder.jpg",
      bio: "Psicólogos comprometidos con el bienestar emocional. En Ignacio Gallego Rubio, Psicólogo ofrecemos un espacio seguro donde trabajar hacia una vida más plena y satisfactoria."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Ignacio Gallego Rubio, Psicólogo - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "Ignacio Gallego Rubio, Psicólogo - Imagen 2"
    }
  ],
  faq: [
    {
      question: "¿Qué enfoque terapéutico utiliza Ignacio Gallego?",
      answer: "Trabajo principalmente desde las terapias contextuales o cognitivo-conductuales de tercera generación, específicamente terapia de aceptación y compromiso (ACT), terapia analítico funcional y mindfulness. Son enfoques validados científicamente con un componente muy práctico y resolutivo, adaptados siempre a cada persona de forma individualizada."
    },
    {
      question: "¿Ofrecéis terapia online?",
      answer: "Sí, ofrezco sesiones de terapia online por videollamada con total flexibilidad horaria. Mis pacientes destacan la cercanía del trato incluso sin estar en el despacho físico. La terapia online tiene la misma efectividad que la presencial y te permite acceder desde cualquier lugar."
    },
    {
      question: "¿Cuánto dura el proceso de terapia?",
      answer: "La duración depende de cada persona y su situación particular. Algunos pacientes han tenido procesos breves pero muy efectivos, mientras otros necesitan más tiempo. Mi enfoque es práctico y resolutivo, buscando siempre la mayor eficacia. En la primera sesión podemos hablar sobre expectativas de duración según tu caso."
    },
    {
      question: "¿Atendéis a niños y adolescentes?",
      answer: "Sí, ofrezco psicología infantil y psicoterapia para adolescentes. Trabajo con niños y jóvenes que tienen dificultades emocionales, conductuales o de adaptación, siempre con un enfoque respetuoso y adaptado a su edad. La colaboración con las familias es parte importante del proceso."
    },
    {
      question: "¿Qué problemas tratáis en la consulta?",
      answer: "Trabajo con todo tipo de dificultades: trastornos de ansiedad, depresión, duelos complicados, problemas de adicción, dificultades relacionadas con la alimentación, estrés, fobias, baja autoestima, entre otros. Mi experiencia incluye trabajo en centros de atención a drogodependencias y diversos contextos clínicos."
    },
    {
      question: "¿Cómo solicito la primera cita?",
      answer: "Puedes contactarme directamente por teléfono o WhatsApp al 633 35 95 81. Ofrezco una consulta telefónica informativa de 15 minutos donde podemos hablar de tu situación sin compromiso. También puedes enviarme un mensaje y te responderé lo antes posible para agendar tu primera visita."
    },
    {
      question: "¿Dónde está ubicada la consulta?",
      answer: "Tengo consulta presencial en Barcelona (Esplugues de Llobregat). También ofrezco terapia online para personas que viven fuera de Barcelona o que prefieren la modalidad a distancia. La terapia online ofrece la misma calidad y cercanía que las sesiones presenciales."
    },
    {
      question: "¿Qué puedo esperar de la terapia con Ignacio Gallego?",
      answer: "Mis pacientes destacan la comprensión desde el primer momento, la capacidad de ayudarles a ver las cosas desde una perspectiva diferente, y un trato cercano y humano. Mi intervención se basa en el respeto, la autenticidad y tu libertad individual. El objetivo es que puedas ser más tú mismo y vivir la vida que realmente deseas."
    }
  ],
  seo: {
    titleTemplate: "%s | Ignacio Gallego Rubio, Psicólogo",
    defaultTitle: "Ignacio Gallego Rubio - Psicólogo en Barcelona",
    defaultDescription: "Psicólogo sanitario en Barcelona especializado en terapias de tercera generación (ACT, Mindfulness). Terapia individual, infantil y online. 5★ en Google. ☎ 633 35 95 81",
    keywords: [
      "psicólogo Barcelona",
      "Ignacio Gallego Rubio",
      "terapia ACT Barcelona",
      "mindfulness Barcelona",
      "psicólogo online",
      "terapia de aceptación y compromiso",
      "psicología infantil Barcelona",
      "ansiedad Barcelona",
      "depresión Barcelona",
      "terapias tercera generación",
      "psicólogo Esplugues de Llobregat",
      "terapia individual Barcelona"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Ignacio Gallego Rubio, Psicólogo",
    cif: "",
    registeredAddress: "Carrer del Consell de Cent, 363, Eixample, 08007 Barcelona, España, Barcelona, Madrid"
  },
  heroHeadline: [
    "Tu Centro de",
    "Psicología",
    "en Barcelona"
  ],
  heroDescription: "Psicólogo sanitario con enfoque en terapias contextuales de tercera generación. Trabajo desde el respeto, la autenticidad y la cercanía, tanto en consulta presencial en Barcelona como online. Mi objetivo es ayudarte a recuperar la vida que tenías o conseguir la vida que realmente te gustaría vivir.",
  specialty: "Terapias de Tercera Generación",
  ctaLabel: "Tu Bienestar",
  ctaHeadline: "¿Listo para ser más tú mismo y vivir la vida que deseas?",
  ctaDescription: "Contacta conmigo para iniciar tu proceso de terapia. Primera consulta informativa disponible. Atención presencial en Barcelona y online con total flexibilidad y cercanía.",
  statsLabel: "Pacientes",
  schemaType: "PsychologicalTreatment",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
