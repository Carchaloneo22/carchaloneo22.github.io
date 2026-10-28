// Toda la información del sitio vive aquí. Edita este archivo para actualizar el portafolio.
import type { ImageMetadata } from 'astro';

import pientaInicio from '../assets/projects/pienta-inicio.jpg';
import pientaBanco from '../assets/projects/pienta-banco.jpg';
import pientaResultados from '../assets/projects/pienta-resultados.jpg';
import intranetLogin from '../assets/projects/imct-intranet-login.jpg';
import intranetRepo from '../assets/projects/imct-intranet-repositorio.jpg';
import empleaInicio from '../assets/projects/empleaplus-inicio.jpg';
import empleaEmpresas from '../assets/projects/empleaplus-empresas.jpg';
import forjaturPortada from '../assets/projects/forjatur-portada.jpg';
import forjaturDestinos from '../assets/projects/forjatur-destinos.jpg';
import forjaturCert from '../assets/projects/forjatur-certificado.jpg';
import imct from '../assets/projects/imct.jpg';
import laCultural from '../assets/projects/la-cultural.jpg';
import observatorio from '../assets/projects/observatorio-turismo.jpg';
import contraloria from '../assets/projects/contraloria-giron.jpg';
import utc from '../assets/projects/utc.jpg';
import utcSur from '../assets/projects/utc-sur.jpg';
import uto from '../assets/projects/uto.jpg';
import acolcti from '../assets/projects/acolcti.jpg';
import nexusU from '../assets/projects/nexus-u.jpg';
import osec from '../assets/projects/osec.png';
import savia from '../assets/projects/savia-cacaotero.jpg';
import vanessa from '../assets/projects/vanessa.jpg';
import concejo from '../assets/projects/concejo-giron.jpg';
import andap from '../assets/projects/andap.jpg';
import neos from '../assets/projects/neos.jpg';
import robusta from '../assets/projects/robusta.jpg';

export const person = {
  name: 'Carlos Chaparro López',
  fullName: 'Carlos Iván José Chaparro López',
  firstLine: 'Carlos',
  secondLine: 'Chaparro López',
  role: 'Ingeniero informático e ingeniero de software',
  city: 'Bucaramanga, Santander',
  intro:
    'Construyo portales públicos, plataformas educativas y sistemas de datos para Santander, y enseño a hacerlo como instructor de Análisis y Desarrollo de Software en el SENA.',
  quote: 'Transformando datos en soluciones y la educación en innovación tecnológica.',
  now: [
    'Instructor de Análisis y Desarrollo de Software en el SENA',
    'CEO de S3media: software a medida y soporte TIC',
  ],
  email: 'Carchalo22@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/carlos-chaparro-3b1aa726b/',
    github: 'https://github.com/Carchaloneo22',
    linktree: 'https://linktr.ee/Carloschaparro',
    s3media: 'https://www.s3media.com.co',
  },
  about: [
    'Llevo más de quince años entre el soporte, el desarrollo y el aula. Empecé manteniendo equipos de cómputo en 2009 y hoy diseño bases de datos, levanto portales que cumplen la política de Gobierno Digital y Transparencia, y formo a nuevas generaciones de desarrolladores.',
    'He trabajado con la Gobernación de Santander, la Alcaldía de Bucaramanga, el IMCT, IDESAN, el SENA y la ESE Hospital San Juan de Dios de Lebrija, además de instituciones educativas y empresas privadas de la región.',
  ],
};

export type Category = 'sena' | 'plataformas' | 'gobierno' | 'educacion' | 'empresas';

export const categories: { id: Category | 'todos'; label: string; note?: string }[] = [
  { id: 'todos', label: 'Todos' },
  {
    id: 'sena',
    label: 'Coordinación de proyectos SENA',
    note: 'Proyectos que coordino desde mi rol de instructor de Análisis y Desarrollo de Software en el SENA, Centro de Servicios Empresariales y Turísticos.',
  },
  { id: 'plataformas', label: 'Plataformas y datos' },
  { id: 'gobierno', label: 'Gobierno digital' },
  { id: 'educacion', label: 'Educación' },
  { id: 'empresas', label: 'Empresas y gremios' },
];

export interface Shot {
  src: ImageMetadata;
  alt: string;
  /** 'contain' muestra la imagen completa sobre fondo blanco (útil para logos). */
  fit?: 'cover' | 'contain';
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  /** Categorías adicionales en las que también aparece al filtrar. */
  also?: Category[];
  client: string;
  year?: string;
  role: string;
  summary: string;
  points?: string[];
  tech: string[];
  url?: string;
  urlLabel?: string;
  shots?: Shot[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'pienta',
    title: 'Pienta',
    category: 'sena',
    also: ['plataformas'],
    client: 'SENA, Centro de Servicios Empresariales y Turísticos',
    year: '2024',
    role: 'Coordinación y desarrollo del proyecto',
    summary:
      'Plataforma educativa que usa la gamificación para preparar a los aprendices para las pruebas Saber TyT y Saber Pro del ICFES.',
    points: [
      'Creación y edición de preguntas de opción múltiple, verdadero o falso y respuesta corta.',
      'Bancos de preguntas temáticos y generación aleatoria de pruebas según los criterios del evaluador.',
      'Calificación automática con informe por estudiante y gráficos de promedio.',
      'Pensada para integrarse con plataformas LMS y adaptarse a distintas disciplinas.',
    ],
    tech: ['Aplicación web', 'Base de datos relacional', 'Gamificación', 'Reportes'],
    shots: [
      { src: pientaInicio, alt: 'Pantalla de ingreso de Pienta con el formulario “Bienvenido a Pienta”.' },
      { src: pientaBanco, alt: 'Panel de Pienta para administrar contextos, preguntas y opciones.' },
      { src: pientaResultados, alt: 'Resultados de una prueba en Pienta con tabla de datos y gráfico circular de aciertos.' },
    ],
    featured: true,
  },
  {
    slug: 'nexus-u',
    title: 'Nexus-U',
    category: 'plataformas',
    client: 'Corporación Universitaria Tecnológica del Oriente',
    year: '2026',
    role: 'Investigación y desarrollo',
    summary:
      'Campus virtual interactivo con gamificación e inteligencia artificial para la orientación vocacional: un campus 3D en Unreal Engine 5 donde aspirantes y estudiantes conocen el programa de Ingeniería de Software recorriendo zonas temáticas, resolviendo retos y desbloqueando nuevas áreas.',
    points: [
      'Presentado como ponencia en el XXI Encuentro Departamental de Semilleros de Investigación de RedCOLSI, en la UIS.',
      'Proyecto de semillero que sirvió como opción de grado de Ingeniería de Software.',
    ],
    tech: ['Inteligencia artificial', 'Unreal Engine 5', '3D interactivo'],
    url: 'https://carchaloneo22.github.io/Nexus-u/',
    shots: [{ src: nexusU, alt: 'Portada de Nexus-U: campus virtual interactivo con gamificación, con una isla flotante en el espacio.' }],
    featured: true,
  },
  {
    slug: 'emplea-plus',
    title: 'Emplea Plus',
    category: 'plataformas',
    client: 'Emplea Plus',
    role: 'Desarrollo de la plataforma',
    summary:
      'Plataforma que conecta talento profesional de Latinoamérica con empleo remoto en empresas globales y startups.',
    points: [
      'Buscador de vacantes con filtros simultáneos por profesión y país, incluida la opción “Todo el mundo”.',
      'Postulación directa con envío de hoja de vida o perfil profesional.',
      'Portal para empresas: publicación de vacantes sin costo y acceso a la base de talento.',
    ],
    tech: ['Aplicación web', 'Gestión de talento humano', 'Autenticación'],
    url: 'https://www.empleaplus.com/',
    shots: [
      { src: empleaInicio, alt: 'Portada de Emplea Plus con el mensaje “El futuro del trabajo es remoto”.' },
      { src: empleaEmpresas, alt: 'Ingreso para empresas de Emplea Plus con el mensaje “Accede a talento de calidad”.' },
    ],
    featured: true,
  },
  {
    slug: 'imct-intranet',
    title: 'IMCT Intranet',
    category: 'plataformas',
    client: 'Instituto Municipal de Cultura y Turismo de Bucaramanga',
    year: '2024',
    role: 'Desarrollo del repositorio',
    summary:
      'Repositorio de información interna que centraliza documentos históricos, guías turísticas, imágenes, videos y bases de datos del instituto.',
    points: [
      'Clasificación por etiquetas, categorías y metadatos para encontrar cualquier contenido.',
      'Edición colaborativa con permisos y versionado de documentos.',
      'Publicación de contenidos para el público o para grupos específicos.',
    ],
    tech: ['PHP', 'Base de datos relacional', 'Gestión documental'],
    url: 'https://aleirin.com/repositorio/menu.php',
    urlLabel: 'Ver el repositorio',
    shots: [
      { src: intranetRepo, alt: 'Listado del repositorio IMCT con títulos, categorías, autores y fechas.' },
      { src: intranetLogin, alt: 'Pantalla de inicio de sesión de la intranet del IMCT.' },
    ],
  },
  {
    slug: 'observatorio-seguridad',
    title: 'Observatorio de Seguridad y Convivencia',
    category: 'plataformas',
    client: 'Alcaldía de Bucaramanga, Secretaría del Interior',
    year: '2026',
    role: 'Apoyo profesional en manejo de datos',
    summary:
      'Fortalecimiento del sistema municipal de información para seguridad y convivencia ciudadana.',
    points: [
      'Rutinas de ingeniería de datos para procesar y estandarizar información de distintos sistemas.',
      'Levantamiento de requerimientos y desarrollo de visualizaciones, mapas, tableros e informes técnicos.',
      'Centralización de bases de datos de las dependencias aliadas.',
    ],
    shots: [{ src: osec, alt: 'Logo de OSEC, Observatorio de Seguridad y Convivencia.', fit: 'contain' }],
    tech: ['Ingeniería de datos', 'Visualización', 'Tableros', 'Bases de datos'],
  },
  {
    slug: 'peaje-la-punta',
    title: 'Peaje La Punta',
    category: 'sena',
    also: ['plataformas'],
    client: 'IDESAN, Instituto Financiero para el Desarrollo de Santander',
    year: '2025',
    role: 'Coordinación del proyecto y desarrollo de software',
    summary:
      'Plataforma de visualización de datos para los beneficios de tarifas del peaje La Punta, en Piedecuesta.',
    points: [
      'Modelado de la base de datos en PostgreSQL.',
      'Interfaces gráficas de captura de datos y apoyo a la gestión de solicitudes.',
    ],
    tech: ['PostgreSQL', 'Visualización de datos', 'Formularios web'],
    url: 'https://peajelapunta.idesan.gov.co/browser/landing/home',
  },
  {
    slug: 'forjatur',
    title: 'Forjatur',
    category: 'plataformas',
    client: 'Secretaría TIC de Santander, convocatoria Santander Región Digital',
    year: '2017',
    role: 'Emprendimiento digital',
    summary:
      'Aplicación de turismo para Santander construida con estudiantes de Sistemas de Información de la Academia Nacional de Aprendizaje y la OIT.',
    points: [
      'Búsqueda de destinos por intereses, presupuesto, fechas y compañía.',
      'Actividades locales y alojamientos con reseñas de otros viajeros.',
      'Certificada por la Gobernación de Santander en la convocatoria Santander Región Digital 2017.',
    ],
    tech: ['Desarrollo web', 'Turismo', 'Diseño adaptable'],
    shots: [
      { src: forjaturDestinos, alt: 'Forjatur mostrando el Parque García Rovira y el Cerro del Santísimo.' },
      { src: forjaturPortada, alt: 'Portada de Forjatur con una fotografía del cañón y enlaces a redes sociales.' },
      { src: forjaturCert, alt: 'Certificado de la Gobernación de Santander al emprendimiento digital Forjatur.' },
    ],
  },
  {
    slug: 'savia',
    title: 'Savia (Cacaotero)',
    category: 'plataformas',
    client: 'Trazabilidad agrícola',
    role: 'Desarrollo',
    summary:
      'Módulos de trazabilidad para las cadenas de cacao y fibra de palma, desde la siembra hasta la exportación. CACAOTERO integra productores, información y procesos en una plataforma que garantiza transparencia y calidad desde la finca hasta el chocolate.',
    shots: [{ src: savia, alt: 'Portada de CACAOTERO con el lema “Trazabilidad desde la finca hasta el chocolate” y la plataforma en celular y computador.' }],
    tech: ['Trazabilidad', 'Aplicación web'],
    url: 'https://carchaloneo22.github.io/Cacaotero/',
  },
  {
    slug: 'softbaguer',
    title: 'SoftBaguer POS',
    category: 'plataformas',
    client: 'Pymes del sector moda',
    role: 'Desarrollo',
    summary:
      'Punto de venta con facturación ágil e inventario sincronizado en la nube para pequeñas empresas de moda.',
    tech: ['Punto de venta', 'Inventario', 'Nube'],
  },
  {
    slug: 'vanessa',
    title: 'Plataforma Vanessa',
    category: 'educacion',
    client: 'Proyecto conjunto con Esteban Janiot',
    role: 'Colaboración',
    summary: 'Plataforma escolar para colegios de transición a 11.°, desarrollada en colaboración con Esteban Janiot: cursos por temas, evaluaciones, simulacros Saber, alerta temprana y portal del acudiente, con una vista para cada rol.',
    shots: [{ src: vanessa, alt: 'Portada de Vanessa, “La plataforma escolar hecha para Colombia”, con la mascota Pardo y el tablero de estadísticas.' }],
    tech: ['Plataforma educativa', 'Landing page'],
    url: 'https://srjaniot.github.io/vanessa-landing/',
  },
  {
    slug: 'reportes-zabbix',
    title: 'Reportes Zabbix',
    category: 'sena',
    also: ['plataformas'],
    client: 'Código abierto',
    role: 'Coordinación del proyecto',
    summary:
      'Módulo para Zabbix 7.0 LTS y 7.4 que genera una vista técnica o gerencial de disponibilidad por host, con exportación a CSV e impresión a PDF.',
    tech: ['PHP', 'Zabbix', 'Monitoreo'],
    url: 'https://github.com/Carchaloneo22/Reportes-zabbix',
    urlLabel: 'Ver en GitHub',
  },
  {
    slug: 'etl-accidentes',
    title: 'ETL Accidentes Bucaramanga',
    category: 'plataformas',
    client: 'S3media',
    role: 'Ingeniería de datos',
    summary:
      'Proceso ETL para medir y analizar la incidencia de accidentes de tránsito en Bucaramanga y apoyar la toma de decisiones.',
    tech: ['T-SQL', 'ETL', 'Analítica'],
    url: 'https://github.com/S3media22/ETL-Accidentes-Bucaramanga',
    urlLabel: 'Ver en GitHub',
  },
  {
    slug: 'agente-turismo',
    title: 'Agente Santander Accesible',
    category: 'plataformas',
    client: 'S3media',
    role: 'Desarrollo',
    summary: 'Agente de inteligencia artificial que ayuda a definir la experiencia de turismo accesible en Santander.',
    tech: ['Python', 'Inteligencia artificial', 'Turismo accesible'],
    url: 'https://github.com/S3media22/Agente-Turismo-Santander-Accesible',
    urlLabel: 'Ver en GitHub',
  },
  {
    slug: 'imct',
    title: 'Portal del IMCT',
    category: 'gobierno',
    client: 'Instituto Municipal de Cultura y Turismo de Bucaramanga',
    year: '2023–2025',
    role: 'Webmaster',
    summary:
      'Arquitectura, seguridad y contenidos del portal institucional y sus micrositios, alineados con la política de Gobierno Digital y la Ley de Transparencia.',
    points: [
      'Gestión, monitoreo, SEO y analítica del sitio y los micrositios.',
      'Atención de vulnerabilidades y reportes de seguridad y optimización.',
      'Portales para convocatorias, inscripciones y trámites de la Escuela Municipal de Artes y Oficios.',
    ],
    tech: ['WordPress', 'Gobierno Digital', 'Seguridad web', 'SEO'],
    url: 'https://imct.gov.co/',
    shots: [{ src: imct, alt: 'Portal del IMCT con el anuncio de pre-inscripciones a la Escuela Municipal de Artes y Oficios.' }],
    featured: true,
  },
  {
    slug: 'la-cultural',
    title: 'La Cultural 100.7 FM',
    category: 'gobierno',
    client: 'Emisora pública Luis Carlos Galán Sarmiento',
    year: '2023–2025',
    role: 'Webmaster',
    summary: 'Sitio de la emisora pública de Bucaramanga con señal en vivo, programación, pódcast y talleres.',
    tech: ['WordPress', 'Streaming', 'Accesibilidad'],
    url: 'https://www.emisoracultural.gov.co/',
    shots: [{ src: laCultural, alt: 'Sitio de La Cultural 100.7 FM con el botón “Escucha en vivo”.' }],
  },
  {
    slug: 'observatorio-turismo',
    title: 'Observatorio de Turismo',
    category: 'gobierno',
    client: 'IMCT Bucaramanga',
    year: '2023–2025',
    role: 'Diseño y desarrollo',
    summary: 'Micrositio con informes, cifras y sitios turísticos de Bucaramanga.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Datos abiertos'],
    url: 'https://imct.gov.co/ob_turismo/index.html',
    shots: [{ src: observatorio, alt: 'Portada del Observatorio Turístico de Bucaramanga con una fotografía de un parque.' }],
  },
  {
    slug: 'contraloria-giron',
    title: 'Contraloría de Girón',
    category: 'gobierno',
    client: 'Contraloría Municipal de Girón',
    role: 'Diseño y desarrollo',
    summary: 'Portal institucional alineado con la normativa de Transparencia y Gobierno Digital.',
    tech: ['WordPress', 'GOV.CO', 'Transparencia'],
    url: 'https://www.contraloriadegiron.gov.co/',
    shots: [{ src: contraloria, alt: 'Portal de la Contraloría Municipal de Girón con la barra GOV.CO.' }],
  },
  {
    slug: 'concejo-giron',
    title: 'Concejo de Girón',
    category: 'gobierno',
    client: 'Concejo Municipal de Girón',
    year: '2020',
    role: 'Ingeniero de sistemas',
    summary:
      'Portal a medida para consultar de forma pública y accesible los acuerdos y proyectos del Concejo. También elaboró el plan estratégico TIC 2021 y el plan de seguridad de la información.',
    shots: [{ src: concejo, alt: 'Portal del Concejo Municipal de Girón con la barra GOV.CO y el menú de transparencia.' }],
    tech: ['HTML5', 'CSS', 'JavaScript', 'Seguridad de la información'],
    url: 'https://www.concejogiron-santander.gov.co/',
  },
  {
    slug: 'grupo-pic',
    title: 'Grupo PIC Lebrija',
    category: 'gobierno',
    client: 'ESE Hospital San Juan de Dios de Lebrija',
    year: '2020–2022',
    role: 'Ingeniero de sistemas',
    summary:
      'Portal web del Plan de Intervenciones Colectivas, la plataforma escolar “Juguemos en la salud” y la plataforma educativa Edu PIC.',
    points: [
      'Videos, pódcast, animaciones y publicaciones para el sitio y las redes sociales.',
      'Seguimiento estadístico del alcance de los contenidos digitales.',
    ],
    tech: ['Desarrollo web', 'Plataformas educativas', 'Multimedia'],
    url: 'https://www.grupopiclebrija.gov.co',
  },
  {
    slug: 'utc',
    title: 'Unidades Técnicas de Colombia',
    category: 'educacion',
    client: 'UTC',
    role: 'Diseño y desarrollo',
    summary: 'Sitio institucional y acceso a la plataforma de estudiantes.',
    tech: ['Sitio institucional', 'Plataforma Q10'],
    url: 'https://www.utc.edu.co/',
    shots: [{ src: utc, alt: 'Portada de Unidades Técnicas de Colombia con la foto de la sede principal.' }],
  },
  {
    slug: 'utc-sur',
    title: 'UTC del Sur',
    category: 'educacion',
    client: 'Unidades Técnicas de Colombia, sede Sur',
    role: 'Diseño y desarrollo',
    summary: 'Sitio institucional y acceso a la plataforma de estudiantes.',
    tech: ['Sitio institucional', 'Plataforma Q10'],
    url: 'https://www.utcdelsur.edu.co/',
    shots: [{ src: utcSur, alt: 'Portada de UTC del Sur con el lema “Formamos en innovación, emprendimiento y liderazgo”.' }],
  },
  {
    slug: 'uto',
    title: 'Unidades Técnicas del Oriente',
    category: 'educacion',
    client: 'UTO',
    year: '2018–2023',
    role: 'Encargado del área TIC',
    summary: 'Sitio institucional, campus virtual y acceso de estudiantes a la plataforma académica.',
    tech: ['Sitio institucional', 'Campus virtual', 'Plataforma Q10'],
    url: 'https://uto.edu.co/',
    shots: [{ src: uto, alt: 'Portada de UTO con la campaña de matrículas abiertas 2025.' }],
  },
  {
    slug: 'andap',
    title: 'ANDAP',
    category: 'educacion',
    client: 'Academia Nacional de Aprendizaje',
    role: 'Diseño y desarrollo',
    summary: 'Portal académico e institucional de la Academia Nacional de Aprendizaje.',
    shots: [{ src: andap, alt: 'Portada de ANDAP con el mensaje “El mercado laboral te necesita, ¡ANDAP te forma!”.' }],
    tech: ['Sitio institucional'],
    url: 'https://andap.edu.co/',
  },
  {
    slug: 'acolcti',
    title: 'ACOLCTI',
    category: 'empresas',
    client: 'Asociación Nacional de Servidores y Exservidores del CTI',
    role: 'Diseño y desarrollo',
    summary: 'Portal gremial con noticias, datos abiertos, servicios, centro de altos estudios y acceso a plataforma.',
    tech: ['Sitio institucional', 'Plataforma de formación'],
    url: 'https://www.acolcti.com/',
    shots: [{ src: acolcti, alt: 'Portada de ACOLCTI con los botones “Conocer más” y “Contacto”.' }],
  },
  {
    slug: 'neos',
    title: 'Neos Construcciones',
    category: 'empresas',
    client: 'Neos Construcciones S.A.S.',
    role: 'Diseño y desarrollo',
    summary: 'Sitio corporativo para una empresa de pilotaje y cimentaciones de alta ingeniería.',
    shots: [{ src: neos, alt: 'Portada de Neos Construcciones con el lema “Construimos el futuro de tu infraestructura” y una piloteadora.' }],
    tech: ['Sitio corporativo'],
    url: 'https://neosconstrucciones.com/',
  },
  {
    slug: 'robusta',
    title: 'Robusta',
    category: 'empresas',
    client: 'Robusta',
    role: 'Diseño y desarrollo',
    summary: 'Sitio de marca para un fabricante de calzado de seguridad y uso profesional.',
    shots: [{ src: robusta, alt: 'Laboratorio de pruebas de Robusta con el lema “La seguridad no se improvisa. Se pone a prueba.”' }],
    tech: ['Sitio de marca'],
    url: 'https://robusta.com.co/',
  },
];

export interface Job {
  org: string;
  role: string;
  period: string;
  detail: string;
}

// Orden: de lo más reciente a lo más antiguo.
export const jobs: Job[] = [
  {
    org: 'Alcaldía de Bucaramanga, Secretaría del Interior',
    role: 'Apoyo profesional en manejo de datos',
    period: '2026',
    detail: 'Ingeniería y visualización de datos para el Observatorio de Seguridad y Convivencia Ciudadana.',
  },
  {
    org: 'Gobernación de Santander',
    role: 'Coordinador técnico, proyecto Santander Inmersivo',
    period: 'Reciente',
    detail: 'Dirección de sistemas de información, bases de datos, desarrollo web e infraestructura tecnológica.',
  },
  {
    org: 'IDESAN',
    role: 'Desarrollador de software',
    period: '2025',
    detail: 'Plataforma de visualización de datos del peaje La Punta sobre PostgreSQL.',
  },
  {
    org: 'SENA, Centro de Servicios Empresariales y Turísticos',
    role: 'Instructor de Análisis y Desarrollo de Software',
    period: '2023 – hoy',
    detail: 'Formación titulada, complementaria y virtual; registro en Sofía Plus y aseguramiento de la calidad.',
  },
  {
    org: 'Instituto Municipal de Cultura y Turismo de Bucaramanga',
    role: 'Webmaster',
    period: '2023 – 2025',
    detail: 'Arquitectura, seguridad, SEO y contenidos del portal institucional, sus micrositios y la emisora La Cultural.',
  },
  {
    org: 'Academia Nacional de Aprendizaje, convenio OIT',
    role: 'Docente y formador',
    period: '2016 – 2023',
    detail: 'Redes, mantenimiento, multimedia y ofimática; coordinador docente del programa Talento TI de MinTIC.',
  },
  {
    org: 'Unidades Técnicas del Oriente',
    role: 'Docente y encargado del área TIC',
    period: '2018 – 2023',
    detail: 'Docente del diplomado en Desarrollo y Programación y de herramientas TIC.',
  },
  {
    org: 'Corporación Técnico Laboral Progtec',
    role: 'Instructor de marketing digital',
    period: '2022',
    detail: 'Marketing digital, herramientas ofimáticas y campañas en redes sociales.',
  },
  {
    org: 'ESE Hospital San Juan de Dios de Lebrija',
    role: 'Ingeniero de sistemas, grupo PIC',
    period: '2020 – 2022',
    detail: 'Portal web, plataformas educativas y contenidos multimedia del Plan de Intervenciones Colectivas.',
  },
  {
    org: 'Concejo Municipal de Girón',
    role: 'Ingeniero informático',
    period: '2020',
    detail: 'Plan estratégico TIC 2021, plan de seguridad de la información y Gobierno en Línea.',
  },
  {
    org: 'Multicómputo, convenio de cobertura SENA',
    role: 'Instructor de soporte técnico',
    period: '2019 – 2022',
    detail: 'Técnicos laborales en mantenimiento de equipos, seguridad de redes y ciberseguridad.',
  },
  {
    org: 'Gobernación de Santander, Secretaría TIC',
    role: 'Soporte y mesa de servicio TI',
    period: '2016 – 2017',
    detail: 'Mesa de ayuda con Aranda, mantenimiento y acompañamiento a Gobierno en Línea.',
  },
  {
    org: 'Soportec, mesa de ayuda Cajasan',
    role: 'Tecnólogo de soporte',
    period: '2015',
    detail: 'Soporte de primera línea en Kactus, SIACC, Seven y módulos comerciales y de subsidio.',
  },
  {
    org: 'Milton Ochoa Asesorías Académicas',
    role: 'Programador y auditor de calificación',
    period: '2012 – 2015',
    detail: 'Bases de datos nacionales, sistema de inventarios y despachos, y la plataforma Martes de Prueba.',
  },
  {
    org: 'Registraduría Nacional del Estado Civil',
    role: 'Soporte del software de escrutinio',
    period: '2011',
    detail: 'Elecciones de autoridades locales 2011 con el sistema de SIO S.A.',
  },
  {
    org: 'Multitech',
    role: 'Auxiliar técnico de sistemas',
    period: '2009 – 2010',
    detail: 'Mantenimiento de equipos y un aplicativo de toma de asistencia para cursos.',
  },
];

export const degrees = [
  { year: '2026', title: 'Ingeniero de Software', place: 'Corporación Escuela Tecnológica del Oriente', note: 'Opción de grado en semillero de investigación.' },
  { year: '2011', title: 'Ingeniero Informático', place: 'Universidad Pontificia Bolivariana' },
  { year: '2010', title: 'Técnico laboral por competencias en sistemas', place: 'Multitech, avalado por el SENA', note: 'Mención de honor por rendimiento académico.' },
  { year: '2009', title: 'Tecnólogo en Diseño y Administración de Sistemas', place: 'Unidades Tecnológicas de Santander' },
  { year: '2004', title: 'Bachiller técnico, especialidad comercio', place: 'Colegio San Pedro Claver' },
];

export const certifications: { group: string; items: { title: string; org: string; year: string }[] }[] = [
  {
    group: 'Desarrollo y datos',
    items: [
      { title: 'Desarrollo de apps móviles', org: 'Google Actívate', year: '2025' },
      { title: 'ICT Programming (App Inventor)', org: 'NIA, World Friends Korea', year: '2024' },
      { title: 'Introducción a Python', org: 'SENA', year: '2024' },
      { title: 'Inteligencia artificial en la industria', org: 'SENA', year: '2024' },
      { title: 'Microsoft Project', org: 'Microsoft Partner', year: '2011' },
    ],
  },
  {
    group: 'Redes y seguridad',
    items: [
      { title: 'CCNA Security', org: 'Cisco Networking Academy', year: '2018' },
      { title: 'Apropiación de conceptos en ciberseguridad', org: 'SENA', year: '2021' },
      { title: 'Manejo de datos personales', org: 'Dobytto', year: '2024' },
      { title: 'Experiencias digitales seguras', org: 'MinTIC', year: '2020' },
    ],
  },
  {
    group: 'Gestión pública y proyectos',
    items: [
      { title: 'Diplomado en Formulación y Gestión de Proyectos', org: 'Gobernación de Santander y UIS', year: '2025' },
      { title: 'Integridad, transparencia y lucha contra la corrupción', org: 'Función Pública', year: '2024' },
      { title: 'Modelo Integrado de Planeación y Gestión (MIPG)', org: 'Función Pública', year: '2024' },
      { title: 'Gobernanza TI', org: 'Fundación Carlos Slim', year: '2020' },
      { title: 'Empresario digital: comercio electrónico', org: 'MinTIC', year: '2018' },
    ],
  },
  {
    group: 'Docencia',
    items: [
      { title: 'Desarrollo de habilidades del instructor SENA', org: 'SENA', year: '2024' },
      { title: 'Competencia laboral: orientar formación presencial', org: 'SENA', year: '2019' },
      { title: 'Seminario para orientadores escolares en TI', org: 'MinTIC y Universidad del Cesar', year: '2017' },
      { title: 'Diplomado en Docencia Virtual', org: 'Politécnico de Colombia', year: '2015' },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Astro', 'Tailwind'] },
  { group: 'Backend', items: ['PHP', 'Python', 'Node.js', 'ASP.NET'] },
  { group: 'Datos', items: ['PostgreSQL', 'MySQL', 'T-SQL', 'ETL', 'n8n', 'Visualización'] },
  { group: 'Infraestructura', items: ['Git', 'GitHub', 'AWS', 'Google Cloud', 'WordPress', 'Zabbix', 'Redes Cisco'] },
  { group: 'Gestión', items: ['Gobierno Digital', 'Transparencia', 'MIPG', 'Planes PETI', 'Seguridad de la información'] },
];
