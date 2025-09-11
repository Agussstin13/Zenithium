import { useState, useEffect } from 'react';

const translations = {
  es: {
    // Hero
    heroAnimatedTexts: [
      "Soluciones tecnológicas",
      "Desarrollo Web",
      "Sistemas Adaptables",
      "Software a Medida"
    ],
    // Navigation
    navHome: "Inicio",
    navServices: "Servicios",
    navPortfolio: "Portfolio",
    navAbout: "Nosotros",
    navContact: "Contacto",
    navCta: "Consulta Gratis",
    heroSubtitle: "Transformamos ideas innovadoras en soluciones tecnológicas de vanguardia.",
    heroSubtitleAccent: " Especialistas en desarrollo web y cloud.",
    heroProjects: "Ver Nuestros Proyectos",
    heroContact: "Contactar Equipo",
    heroStats: {
      projects: "Proyectos Completados",
      experience: "Años de Experiencia",
      support: "Soporte Técnico"
    },
    // Services
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel digital",
    servicesCta: "Consulta Gratuita",
    services: {
      webDevelopment: "Desarrollo Web",
      webDevelopmentDescription: "Creamos aplicaciones web modernas, rápidas y seguras para potenciar tu negocio.",
      cybersecurity: "Ciberseguridad",
      cybersecurityDescription: "Protegemos tus sistemas y datos con soluciones avanzadas de seguridad.",
      cybersecurityFeatures: ["Auditoría de Seguridad", "Pruebas de Penetración", "Protección de Datos", "Cumplimiento Normativo"],
      cloudSolutions: "Soluciones en la Nube",
      cloudSolutionsDescription: "Migramos y optimizamos tus sistemas en la nube para mayor escalabilidad.",
      cloudSolutionsFeatures: ["AWS & Azure", "Serverless", "Microservicios", "DevOps"],
      backendApis: "APIs y Backend",
      backendApisDescription: "Desarrollamos APIs robustas y sistemas backend escalables.",
      backendApisFeatures: ["Node.js & .NET", "PostgreSQL & SQLServer", "Bases de Datos", "Seguridad informática"],
      techConsulting: "Consultoría Tecnológica",
      techConsultingDescription: "Te ayudamos a implementar las mejores prácticas y soluciones tecnológicas.",
      techConsultingFeatures: ["Auditorias", "Soluciones informáticas", "Arquitectura", "Mejores Prácticas"],
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
        description: "Plataforma digital de fidelización que permite a los clientes visualizar promociones, puntos acumulados, historial de transacciones y ubicación de locales, ofreciendo a las empresas una herramienta eficaz para fortalecer la relación con sus consumidores."
      },
      saintAnalytics: {
        title: "Saint Analytics",
        category: "Análisis estadístico",
        description: "Aplicación web de análisis de datos que facilita la gestión y visualización de estadísticas para instituciones, integrando dashboards interactivos, reportes dinámicos y herramientas intuitivas para la toma de decisiones estratégicas."
      },
      viewPoroject: {
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
    footerRights: "© 2025 Zenithium. Todos los derechos reservados."
  },
  en: {
    // Hero
    heroAnimatedTexts: [
      "Tech Solutions",
      "Web Development",
      "Adaptive Systems",
      "Custom Software"
    ],
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navAbout: "About",
    navContact: "Contact",
    navCta: "Free Consultation",
    heroSubtitle: "We transform innovative ideas into cutting-edge technological solutions.",
    heroSubtitleAccent: " Specialists in web development and cloud.",
    heroProjects: "View Our Projects",
    heroContact: "Contact Team",
    heroStats: {
      projects: "Completed Projects",
      experience: "Years of Experience",
      support: "Technical Support"
    },
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "We offer complete technological solutions to take your business to the next digital level",
    servicesCta: "Free Consultation",
    services: {
      webDevelopment: "Web Development",
      webDevelopmentDescription: "We create modern, fast, and secure web applications to boost your business.",
      cybersecurity: "Cybersecurity",
      cybersecurityDescription: "We protect your systems and data with advanced security solutions.",
      cybersecurityFeatures: ["Security Audit", "Penetration Testing", "Data Protection", "Regulatory Compliance"],
      cloudSolutions: "Cloud Solutions",
      cloudSolutionsDescription: "We migrate and optimize your systems in the cloud for greater scalability.",
      cloudSolutionsFeatures: ["AWS & Azure", "Serverless", "Microservices", "DevOps"],
      backendApis: "APIs and Backend",
      backendApisDescription: "We develop robust APIs and scalable backend systems.",
      backendApisFeatures: ["Node.js & .NET", "PostgreSQL & SQL Server", "Databases", "Cybersecurity"],
      techConsulting: "Tech Consulting",
      techConsultingDescription: "We help you implement best practices and technological solutions.",
      techConsultingFeatures: ["Audits", "IT Solutions", "Architecture", "Best Practices"],
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
        description: "A digital loyalty platform that allows customers to view promotions, accumulated points, transaction history, and store locations, providing companies with an effective tool to strengthen relationships with their consumers."
      },
      saintAnalytics: {
        title: "Saint Analytics",
        category: "Statistical Analysis",
        description: "A web application for data analysis that facilitates the management and visualization of statistics for institutions, integrating interactive dashboards, dynamic reports, and intuitive tools for strategic decision-making."
      },
      viewPoroject: {
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
    footerRights: "© 2025 Zenithium. All rights reserved."
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = translations[browserLang] ? browserLang : 'es';
    setLanguage(supportedLang);
  }, []);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { language, setLanguage, t };
};