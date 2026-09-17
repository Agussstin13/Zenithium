import { useState, useEffect } from 'react';

const translations = {
  es: {
    // Hero
    heroAnimatedTexts: [
      "Desarrollo de Software",
      "Integraciones y APIs",
      "Automatización e IA",
      "Webs y Landing Pages"
    ],
    // Navigation
    navHome: "Inicio",
    navServices: "Servicios",
    navPortfolio: "Portfolio",
    navAbout: "Nosotros",
    navContact: "Contacto",
    navCta: "Consulta Gratis",
    heroSubtitle: "Desarrollamos software a medida para empresas: aplicaciones web, landing pages, integraciones, APIs, bases de datos, automatizaciones y soluciones de inteligencia artificial.",
    heroSubtitleAccent: " De la idea a producción, con foco en seguridad y escalabilidad.",
    heroProjects: "Ver Nuestros Proyectos",
    heroContact: "Contactar Equipo",
    heroStats: {
      projects: "Proyectos Completados",
      experience: "Años de Experiencia",
      support: "Soporte Técnico"
    },
    // Services
    servicesTitle: "Servicios de Software",
    servicesSubtitle: "Zenithium Solutions ofrece desarrollo de software a medida, desarrollo web, landing pages, integraciones, APIs, bases de datos, automatizaciones y soluciones de inteligencia artificial para empresas.",
    servicesCta: "Consulta Gratuita",
    services: {
      webDevelopment: "Desarrollo Web y Landing Pages",
      webDevelopmentDescription: "Creamos sitios corporativos, landing pages y aplicaciones web rápidas, seguras y orientadas a convertir visitas en oportunidades.",
      webDevelopmentFeatures: ["Landing Pages", "Sitios Web", "Aplicaciones Web", "PWA"],
      cybersecurity: "Ciberseguridad",
      cybersecurityDescription: "Protegemos tus sistemas y datos con soluciones avanzadas de seguridad.",
      cybersecurityFeatures: ["Auditoría de Seguridad", "Pruebas de Penetración", "Protección de Datos", "Cumplimiento Normativo"],
      cloudSolutions: "Soluciones en la Nube",
      cloudSolutionsDescription: "Migramos y optimizamos tus sistemas en la nube para mayor escalabilidad.",
      cloudSolutionsFeatures: ["AWS & Azure", "Serverless", "Microservicios", "DevOps"],
      backendApis: "Integraciones, APIs y Backend",
      backendApisDescription: "Conectamos sistemas y desarrollamos APIs, backends y bases de datos robustas, seguras y escalables.",
      backendApisFeatures: ["Integraciones", "APIs REST", "PostgreSQL & SQL Server", "Node.js & .NET"],
      techConsulting: "Automatizaciones e Inteligencia Artificial",
      techConsultingDescription: "Automatizamos procesos e incorporamos soluciones de IA para reducir tareas manuales y mejorar la operación.",
      techConsultingFeatures: ["Automatización de Procesos", "Integraciones", "Soluciones de IA", "Consultoría Tecnológica"],
      uiuxDesign: "Diseño UI/UX",
      uiuxDesignDescription: "Diseñamos interfaces atractivas y experiencias de usuario intuitivas.",
      uiuxDesignFeatures: ["Diseño UI/UX", "Prototipado", "Investigación de Usuario"]
    },
    // Portfolio
    portfolioTitle: "Nuestro Portfolio",
    portfolioSubtitle: "Descubre algunos de los proyectos que hemos desarrollado para nuestros clientes.",
    portfolio: {
      fidebill: {
        title: "Fidebill",
        category: "Fidelización de clientes",
        description: "Plataforma digital de fidelización que permite a los clientes visualizar promociones, puntos acumulados, historial de transacciones y ubicación de locales, ofreciendo a las empresas una herramienta eficaz para fortalecer la relación con sus consumidores.",
        imageAlt: "Interfaz de la plataforma de fidelización Fidebill desarrollada por Zenithium"
      },
      saintAnalytics: {
        title: "Saint Analytics",
        category: "Análisis estadístico",
        description: "Aplicación web de análisis de datos que facilita la gestión y visualización de estadísticas para instituciones, integrando dashboards interactivos, reportes dinámicos y herramientas intuitivas para la toma de decisiones estratégicas.",
        imageAlt: "Dashboard de análisis de datos Saint Analytics desarrollado por Zenithium"
      },
      elMolino: {
        title: "El Molino",
        category: "Tienda online",
        description: "Tienda online de alimentos saludables y productos naturales para El Molino, con catálogo, búsqueda de productos y una experiencia de compra adaptable.",
        imageAlt: "Captura del inicio de la tienda online de El Molino desarrollada por Zenithium"
      },
      mia: {
        title: "Mia",
        category: "Automatización con IA",
        description: "Asistente de turnos para negocios de servicios que automatiza consultas y reservas por WhatsApp, con agenda propia, reglas configurables y un panel para supervisar conversaciones y turnos.",
        imageAlt: "Inicio de Mia, asistente de turnos por WhatsApp desarrollado por Zenithium",
        tech: ["IA", "WhatsApp", "PostgreSQL", "Automatización"]
      },
      viewProject: {
        title: "Ver Proyecto"
      }
    },
    // Contact
    contactTitle: "Hablemos",
    contactSubtitle: "¿Tienes un proyecto en mente? Nos encantaría conocer tu idea y ayudarte a hacerla realidad.",
    contactConnect: "Conecta con",
    contactConnectAccent: "Nosotros",
    contactDescription: "Estamos aquí para convertir tus ideas en soluciones tecnológicas excepcionales. Contáctanos para una consulta gratuita.",
    contactEmail: "Email",
    contactPhone: "Teléfono",
    contactLocation: "Ubicación",
    contactFollow: "Síguenos",
    contactSchedule: "Agendar Reunión",
    contactProjectTitle: "Cuéntanos sobre tu",
    contactProjectAccent: "Proyecto",
    contactName: "Nombre",
    contactCompany: "Empresa",
    contactMessage: "Mensaje",
    contactSend: "Enviar Mensaje",
    contactResponse: "Te responderemos en menos de 24 horas",

    // About
    aboutTitle: "Sobre Zenithium",
    aboutSubtitle: "Somos un equipo apasionado de desarrolladores y diseñadores comprometidos con transformar ideas innovadoras en soluciones tecnológicas que impulsan el crecimiento de nuestros clientes.",
    aboutMission: "Nuestra Misión",
    aboutMissionDescription: "Democratizar el acceso a la tecnología de vanguardia, ayudando a empresas de todos los tamaños a digitalizar sus procesos y alcanzar su máximo potencial a través de soluciones innovadoras, escalables y centradas en el usuario.",
    aboutVision: "Nuestra Visión",
    aboutVisionDescription: "Ser la empresa líder en desarrollo de software en América Latina, reconocida por nuestra excelencia técnica, innovación constante y por construir relaciones duraderas basadas en la confianza y resultados excepcionales.",
    aboutTeam: "Conoce a Nuestro",
    aboutTeamAccent: "Equipo",
    aboutCta: "Únete a Nuestro Equipo",
    aboutStats: {
      experience: "Años de Experiencia",
      projects: "Proyectos Completados",
      clients: "Clientes Satisfechos",
      support: "Soporte Técnico"
    },
    aboutTeam: "Conoce a Nuestro",
    aboutTeam2: "Equipo",
    aboutAgustin: "Tech Lead & Founder con experiencia en diseño de arquitecturas escalables y seguras. Lidera equipos en la construcción de soluciones innovadoras utilizando React, .NET y Azure.",
    aboutJulian: "Especialista en backend y bases de datos, con amplia experiencia en modelado, optimización de consultas y despliegue en entornos cloud. Experto en SQL, .NET y AWS.",
    aboutTomas: "Full-stack Developer orientado al ecosistema Microsoft y la nube. Integra frontends modernos en React con backends en .NET, priorizando escalabilidad, seguridad y buenas prácticas.",
    aboutBruno: "Full-stack Developer con foco en la construcción de aplicaciones robustas y mantenibles. Experiencia en React, .NET y desarrollo empresarial con Java y Spring Boot.",
    aboutMaximo: "Frontend Developer y UX/UI Designer especializado en interfaces limpias, intuitivas y centradas en el usuario. Experto en React, Figma y diseño de experiencias digitales.",
    // ContactForm
    contactFormTitle: "Cuéntanos sobre tu",
    contactFormAccent: "Proyecto",
    contactFormName: "Nombre",
    contactFormNamePlaceholder: "Tu nombre completo",
    contactFormEmail: "Email",
    contactFormEmailPlaceholder: "tu@email.com",
    contactFormCompany: "Empresa",
    contactFormCompanyPlaceholder: "Nombre de tu empresa (opcional)",
    contactFormMessage: "Mensaje *",
    contactFormMessagePlaceholder: "Cuéntanos sobre tu proyecto, necesidades y objetivos...",
    contactFormSubmit: "Enviar Mensaje",
    contactFormSending: "Enviando...",
    contactFormSuccess: "¡Gracias por tu mensaje! Te responderemos pronto.",
    contactFormError: "Ocurrió un error al enviar el mensaje. Intentá nuevamente.",
    contactFormResponse: "Te responderemos en menos de 24 horas",

    // WhatsAppButton
    whatsappHoverText: "¡Chateá con nosotros!",

    // Footer
    footerDescription: "Transformando ideas en soluciones tecnológicas de vanguardia",
    footerLegalNav: "Cobros e información legal",
    footerPayments: "Cobros",
    footerTerms: "Términos y Condiciones",
    footerPrivacy: "Política de Privacidad",
    footerRights: "© 2026 Zenithium. Todos los derechos reservados."
  },
  en: {
    // Hero
    heroAnimatedTexts: [
      "Software Development",
      "Integrations and APIs",
      "Automation and AI",
      "Websites and Landing Pages"
    ],
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navAbout: "About",
    navContact: "Contact",
    navCta: "Free Consultation",
    heroSubtitle: "We develop custom software for businesses: web applications, landing pages, integrations, APIs, databases, automation, and artificial intelligence solutions.",
    heroSubtitleAccent: " From idea to production, with a focus on security and scalability.",
    heroProjects: "View Our Projects",
    heroContact: "Contact Team",
    heroStats: {
      projects: "Completed Projects",
      experience: "Years of Experience",
      support: "Technical Support"
    },
    // Services
    servicesTitle: "Software Services",
    servicesSubtitle: "Zenithium Solutions provides custom software development, web development, landing pages, integrations, APIs, databases, automation, and artificial intelligence solutions for businesses.",
    servicesCta: "Free Consultation",
    services: {
      webDevelopment: "Web Development and Landing Pages",
      webDevelopmentDescription: "We create corporate websites, landing pages, and fast, secure web applications designed to turn visits into opportunities.",
      webDevelopmentFeatures: ["Landing Pages", "Websites", "Web Applications", "PWA"],
      cybersecurity: "Cybersecurity",
      cybersecurityDescription: "We protect your systems and data with advanced security solutions.",
      cybersecurityFeatures: ["Security Audit", "Penetration Testing", "Data Protection", "Regulatory Compliance"],
      cloudSolutions: "Cloud Solutions",
      cloudSolutionsDescription: "We migrate and optimize your systems in the cloud for greater scalability.",
      cloudSolutionsFeatures: ["AWS & Azure", "Serverless", "Microservices", "DevOps"],
      backendApis: "Integrations, APIs, and Backend",
      backendApisDescription: "We connect systems and develop robust, secure, and scalable APIs, backends, and databases.",
      backendApisFeatures: ["Integrations", "REST APIs", "PostgreSQL & SQL Server", "Node.js & .NET"],
      techConsulting: "Automation and Artificial Intelligence",
      techConsultingDescription: "We automate processes and incorporate AI solutions to reduce manual work and improve operations.",
      techConsultingFeatures: ["Process Automation", "Integrations", "AI Solutions", "Tech Consulting"],
      uiuxDesign: "UI/UX Design",
      uiuxDesignDescription: "We design attractive interfaces and intuitive user experiences.",
      uiuxDesignFeatures: ["UI/UX Design", "Prototyping", "User Research"]
    },
    // Portfolio
    portfolioTitle: "Our Portfolio",
    portfolioSubtitle: "Discover some of the projects we have developed for our clients.",
    portfolio: {
      fidebill: {
        title: "Fidebill",
        category: "Customer Loyalty",
        description: "A digital loyalty platform that allows customers to view promotions, accumulated points, transaction history, and store locations, providing companies with an effective tool to strengthen relationships with their consumers.",
        imageAlt: "Fidebill customer loyalty platform interface developed by Zenithium"
      },
      saintAnalytics: {
        title: "Saint Analytics",
        category: "Statistical Analysis",
        description: "A web application for data analysis that facilitates the management and visualization of statistics for institutions, integrating interactive dashboards, dynamic reports, and intuitive tools for strategic decision-making.",
        imageAlt: "Saint Analytics data dashboard developed by Zenithium"
      },
      elMolino: {
        title: "El Molino",
        category: "Online Store",
        description: "An online store for El Molino's healthy foods and natural products, featuring a catalog, product search, and a responsive shopping experience.",
        imageAlt: "Homepage of the El Molino online store developed by Zenithium"
      },
      mia: {
        title: "Mia",
        category: "AI Automation",
        description: "An appointment assistant for service businesses that automates inquiries and bookings through WhatsApp, with its own calendar, configurable rules, and a dashboard for supervising conversations and appointments.",
        imageAlt: "Mia WhatsApp appointment assistant homepage developed by Zenithium",
        tech: ["AI", "WhatsApp", "PostgreSQL", "Automation"]
      },
      viewProject: {
        title: "View Project"
      }
    },
    // Contact
    contactTitle: "Let's Talk",
    contactSubtitle: "Do you have a project in mind? We'd love to hear your idea and help you make it a reality.",
    contactConnect: "Connect with",
    contactConnectAccent: "Us",
    contactDescription: "We're here to turn your ideas into exceptional technological solutions. Contact us for a free consultation.",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactFollow: "Follow Us",
    contactSchedule: "Schedule Meeting",
    contactProjectTitle: "Tell us about your",
    contactProjectAccent: "Project",
    contactName: "Name",
    contactCompany: "Company",
    contactMessage: "Message",
    contactSend: "Send Message",
    contactResponse: "We'll respond in less than 24 hours",

    // About
    aboutTitle: "About Zenithium",
    aboutSubtitle: "We are a passionate team of developers and designers committed to transforming innovative ideas into technological solutions that drive our clients' growth.",
    aboutMission: "Our Mission",
    aboutMissionDescription: "Democratize access to cutting-edge technology, helping businesses of all sizes digitize their processes and reach their full potential through innovative, scalable, and user-centered solutions.",
    aboutVision: "Our Vision",
    aboutVisionDescription: "To be the leading software development company in Latin America, recognized for our technical excellence, constant innovation, and building lasting relationships based on trust and exceptional results.",
    aboutTeam: "Meet Our",
    aboutTeamAccent: "Team",
    aboutCta: "Join Our Team",
    aboutStats: {
      experience: "Years of Experience",
      projects: "Completed Projects",
      clients: "Satisfied Clients",
      support: "Technical Support"
    },
    aboutTeam: "Meet Our",
    aboutTeam2: "Team",
    aboutAgustin: "Tech Lead & Founder with experience in designing scalable and secure architectures. Leads teams in building innovative solutions using React, .NET, and Azure.",
    aboutJulian: "Backend and database specialist with extensive experience in modeling, query optimization, and deployment in cloud environments. Expert in SQL, .NET, and AWS.",
    aboutTomas: "Full-stack Developer focused on the Microsoft ecosystem and cloud. Integrates modern React frontends with .NET backends, prioritizing scalability, security, and best practices.",
    aboutBruno: "Full-stack Developer focused on building robust and maintainable applications. Experienced in React, .NET, and enterprise development with Java and Spring Boot.",
    aboutMaximo: "Frontend Developer and UX/UI Designer specialized in clean, intuitive, and user-centered interfaces. Expert in React, Figma, and digital experience design.",
    // ContactForm
    contactFormTitle: "Tell us about your",
    contactFormAccent: "Project",
    contactFormName: "Name",
    contactFormNamePlaceholder: "Your full name",
    contactFormEmail: "Email",
    contactFormEmailPlaceholder: "your@email.com",
    contactFormCompany: "Company",
    contactFormCompanyPlaceholder: "Your company name (optional)",
    contactFormMessage: "Message *",
    contactFormMessagePlaceholder: "Tell us about your project, needs, and goals...",
    contactFormSubmit: "Send Message",
    contactFormSending: "Sending...",
    contactFormSuccess: "Thank you for your message! We will get back to you soon.",
    contactFormError: "An error occurred while sending the message. Please try again.",
    contactFormResponse: "We will respond within 24 hours",

    // WhatsAppButton
    whatsappHoverText: "Chat with us!",

    // Footer
    footerDescription: "Transforming ideas into cutting-edge technology solutions",
    footerLegalNav: "Payments and legal information",
    footerPayments: "Payments",
    footerTerms: "Terms and Conditions",
    footerPrivacy: "Privacy Policy",
    footerRights: "© 2026 Zenithium. All rights reserved."
  }
};

export function useLanguage() {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = translations[browserLang] ? browserLang : 'es';
    setLanguage(supportedLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function t(key) {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  }

  return { language, setLanguage, t };
}