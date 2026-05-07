export type Language = 'en' | 'es'

type LocalizedText = Record<Language, string>

type ProjectImage = {
  src: string
  alt: LocalizedText
  caption?: LocalizedText
}

type ProjectSection = {
  title: LocalizedText
  description: LocalizedText
  stack?: string[]
  images?: ProjectImage[]
}

export type Project = {
  slug: string
  name: LocalizedText
  description: LocalizedText
  summary: LocalizedText
  link?: string
  stack: string[]
  metrics?: LocalizedText
  details: Record<Language, string[]>
  images: ProjectImage[]
  sections?: ProjectSection[]
  showGlobalStack?: boolean
}

export type WorkExperience = {
  company: string
  role: LocalizedText
  period: LocalizedText
  summary: LocalizedText
  stack: string[]
}

export const EMAIL = 'rfpozo@uc.cl'

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/dedmu5' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rodrigo-pozo' },
]

export const UI = {
  en: {
    tagline: 'Computer Vision · Deep Learning · Edge-to-Cloud',
    intro:
      'Building ML systems that go from research to production.\nM.Sc. Candidate at PUC Chile.',
    introMore: '',
    featuredProjects: 'Featured Projects',
    moreProjects: 'More projects on GitHub',
    emailButton: 'Email',
    experience: 'Experience',
    projects: 'Projects',
    news: 'News',
    stack: 'Stack',
    metrics: 'Metrics',
    repository: 'Repository',
    images: 'Images',
    noImages: 'Images can be added later under public/projects/.',
    back: 'Back',
    location: 'Santiago, Chile',
    newsItem:
      '1st place at Data Challenge in the Cloud, a hackathon hosted at Google Chile with sponsorship from Kaggle and Le Wagon.',
  },
  es: {
    tagline: 'Visión por Computadora · Deep Learning · Edge-to-Cloud',
    intro:
      'Construyo sistemas de ML que van desde la investigación a la producción.\nCandidato a Magíster en PUC Chile.',
    introMore: '',
    featuredProjects: 'Proyectos destacados',
    moreProjects: 'Mas proyectos en GitHub',
    emailButton: 'Correo',
    experience: 'Experiencia',
    projects: 'Proyectos',
    news: 'Noticia',
    stack: 'Stack',
    metrics: 'Métricas',
    repository: 'Repositorio',
    images: 'Imágenes',
    noImages: 'Las imágenes se pueden agregar después en public/projects/.',
    back: 'Volver',
    location: 'Santiago, Chile',
    newsItem:
      '1er lugar en Data Challenge in the Cloud, hackathon organizado en Google Chile con sponsorship de Kaggle y Le Wagon.',
  },
} satisfies Record<Language, Record<string, string>>

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ISCI',
    role: { en: 'Data Scientist', es: 'Data Scientist' },
    period: { en: 'Apr 2025 - present', es: 'Abr 2025 - presente' },
    summary: {
      en: 'Real-time CV pipeline for UOCT across 50 RTSP cameras at 25 FPS. YOLOv11 + ByteTrack; 96.3% counting accuracy; speed error reduced from 40% to 9.3%.',
      es: 'Pipeline CV en tiempo real para la UOCT sobre 50 cámaras RTSP a 25 FPS. YOLOv11 + ByteTrack; 96.3% counting accuracy; error de velocidad reducido de 40% a 9.3%.',
    },
    stack: ['Python', 'PyTorch', 'Docker', 'Google Cloud', 'RabbitMQ'],
  },
  {
    company: 'Freelance',
    role: { en: 'Software Engineer', es: 'Software Engineer' },
    period: { en: 'Apr 2025 - present', es: 'Abr 2025 - presente' },
    summary: {
      en: 'LUMinCity, a cross-platform desktop platform for urban simulation and territorial planning. Successor to CUBE Land and mu-Land, used by agencies in the United States and Africa.',
      es: 'LUMinCity, plataforma desktop cross-platform para simulación urbana y planificación territorial. Sucesor de CUBE Land y mu-Land, usado por agencias en EE.UU. y África.',
    },
    stack: ['React', 'Next.js', 'Electron', 'Node.js'],
  },
  {
    company: 'WOLKE',
    role: { en: 'Data Scientist', es: 'Data Scientist' },
    period: { en: 'Oct 2024 - Mar 2025', es: 'Oct 2024 - Mar 2025' },
    summary: {
      en: 'Water monitoring in mining with ML and computer vision. U-Net segmentation over Sentinel-2 imagery with 94.4% IoU.',
      es: 'Monitoreo hídrico en minería con ML y visión por computadora. Segmentación U-Net sobre Sentinel-2 con IoU 94.4%.',
    },
    stack: ['PyTorch', 'scikit-learn', 'OpenCV'],
  },
  {
    company: 'Manglar Labs',
    role: { en: 'IoT Developer', es: 'IoT Developer' },
    period: { en: 'Dec 2023 - Feb 2024', es: 'Dic 2023 - Feb 2024' },
    summary: {
      en: 'IoT device for livestock monitoring with satellite transmission.',
      es: 'Dispositivo IoT para monitoreo de ganado con transmisión satelital.',
    },
    stack: ['ESP32-S3', 'LoRaWAN', 'C'],
  },
]

export const PROJECTS: Project[] = [
  {
    slug: 'fusa-net',
    name: {
      en: 'FUSA-Net: Cross-Modal Music Retrieval',
      es: 'FUSA-Net: Recuperación Musical Cross-Modal',
    },
    description: {
      en: 'M.Sc. thesis — matching sheet music images to audio recordings using deep learning, without any human-labeled pairs.',
      es: 'Tesis de Magíster — asociación de imágenes de partituras con grabaciones de audio usando deep learning, sin pares etiquetados manualmente.',
    },
    summary: {
      en: 'M.Sc. thesis — matching sheet music images to audio recordings using deep learning, without any human-labeled pairs.',
      es: 'Tesis de Magíster — asociación de imágenes de partituras con grabaciones de audio usando deep learning, sin pares etiquetados manualmente.',
    },
    link: 'https://github.com/dedmu5/FUSA-Net',
    stack: ['Python', 'PyTorch', 'transformers', 'contrastive learning', 'CCA'],
    details: {
      en: [],
      es: [],
    },
    images: [],
    sections: [
      {
        title: { en: 'The Problem', es: 'El Problema' },
        description: {
          en: 'Finding the audio recording that matches a given sheet music page — or vice versa — is a task humans do naturally, but machines struggle with. Audio and sheet music live in completely different representational spaces: one is sound, the other is a visual document. Bridging them requires learning a shared space where both can be compared directly.',
          es: 'Encontrar la grabación de audio que corresponde a una partitura — o viceversa — es algo que los humanos hacen naturalmente, pero que resulta difícil para las máquinas. El audio y la partitura existen en espacios representacionales completamente distintos: uno es sonido, el otro es un documento visual. Conectarlos requiere aprender un espacio compartido donde ambos puedan compararse directamente.',
        },
      },
      {
        title: { en: 'The Dataset', es: 'El Dataset' },
        description: {
          en: 'No large-scale public dataset existed for this task. I built PDMX-FUSA from scratch: 116,626 public-domain piano scores transformed into 291,648 training examples, each containing a synthesized audio recording, a high-resolution score image, and MIDI data — all aligned at the measure level.',
          es: 'No existía un dataset público a gran escala para esta tarea. Construí PDMX-FUSA desde cero: 116,626 partituras de piano de dominio público transformadas en 291,648 ejemplos de entrenamiento, cada uno con una grabación de audio sintetizada, una imagen de partitura en alta resolución y datos MIDI — todos alineados a nivel de compás.',
        },
      },
      {
        title: { en: 'The Architecture', es: 'La Arquitectura' },
        description: {
          en: 'FUSA-Net is a dual-encoder model: one branch processes audio, the other processes score images. Both produce embeddings in a shared 512-dimensional space, trained with contrastive learning so that matching pairs are pushed together and non-matching pairs are pushed apart.\n\nTwo design decisions made a significant difference. First, I used CCA (Canonical Correlation Analysis) to initialize the model in a geometrically favorable starting point, which made training 4.8× faster than standard approaches and more stable. Second, I added auxiliary prediction tasks — key, meter, polyphony — that force the shared space to organize itself around musically meaningful structure, not just identity matching.',
          es: 'FUSA-Net es un modelo de doble encoder: una rama procesa audio, la otra procesa imágenes de partituras. Ambas producen embeddings en un espacio compartido de 512 dimensiones, entrenado con aprendizaje contrastivo para que los pares coincidentes se acerquen y los no coincidentes se alejen.\n\nDos decisiones de diseño marcaron una diferencia significativa. Primero, usé CCA (Análisis de Correlación Canónica) para inicializar el modelo en un punto de partida geométricamente favorable, lo que hizo el entrenamiento 4.8× más rápido que los enfoques estándar y más estable. Segundo, agregué tareas auxiliares de predicción — tonalidad, métrica, polifonía — que fuerzan al espacio compartido a organizarse en torno a estructura musicalmente significativa, no solo coincidencia de identidad.',
        },
        images: [
          {
            src: '/projects/fusa-net/01-architecture.png',
            alt: {
              en: 'FUSA-Net dual-encoder architecture diagram',
              es: 'Diagrama de arquitectura dual-encoder de FUSA-Net',
            },
          },
        ],
      },
      {
        title: { en: 'Results', es: 'Resultados' },
        description: {
          en: 'Recall@1 = 66.87% · Recall@10 = 92.24% · Modality Gap = 0.036\n\nIn practical terms: given a sheet music page, the system finds the correct audio recording in its top 10 results more than 9 out of 10 times. Even when the top result is wrong, it is musically coherent — matching the correct polyphony 91.4% of the time and the correct meter 70.6% of the time.',
          es: 'Recall@1 = 66.87% · Recall@10 = 92.24% · Modality Gap = 0.036\n\nEn términos prácticos: dada una página de partitura, el sistema encuentra la grabación de audio correcta entre sus 10 primeros resultados más de 9 de cada 10 veces. Incluso cuando el primer resultado es incorrecto, es musicalmente coherente — coincidiendo en polifonía en el 91.4% de los casos y en métrica en el 70.6%.',
        },
      },
    ],
    showGlobalStack: true,
  },
  {
    slug: 'self-role-prompting',
    name: { en: 'self-role-prompting', es: 'self-role-prompting' },
    description: {
      en: 'Zero-shot strategy where the model selects its reasoning role before solving the task.',
      es: 'Estrategia zero-shot donde el modelo auto-selecciona su rol de razonamiento antes de resolver la tarea.',
    },
    summary: {
      en: 'Evaluated on AQUA-RAT, CSQA, and StrategyQA.',
      es: 'Evaluado en AQUA-RAT, CSQA y StrategyQA.',
    },
    link: 'https://github.com/dedmu5/self-role-prompting',
    stack: ['Python', 'OpenAI API', 'LLM', 'NLP'],
    details: {
      en: [
        'The method asks the model to choose a task-specific role before producing the final answer.',
        'The project studies how self-selected roles affect zero-shot reasoning performance across arithmetic, commonsense, and strategy QA benchmarks.',
      ],
      es: [
        'El método pide al modelo escoger un rol específico para la tarea antes de producir la respuesta final.',
        'El proyecto estudia cómo los roles auto-seleccionados afectan el rendimiento zero-shot en benchmarks aritméticos, de sentido común y de razonamiento estratégico.',
      ],
    },
    images: [],
  },
  {
    slug: 'llm-data-augmentation-recsys',
    name: {
      en: 'llm-data-augmentation-recsys',
      es: 'llm-data-augmentation-recsys',
    },
    description: {
      en: 'Synthetic LLM-based data augmentation for recommender systems.',
      es: 'Data augmentation sintética con LLMs para sistemas de recomendación.',
    },
    summary: {
      en: 'GPT-generated interactions versus random and popularity baselines on MovieLens 100K.',
      es: 'Interacciones generadas con GPT versus baselines aleatorios y de popularidad en MovieLens 100K.',
    },
    link: 'https://github.com/dedmu5/llm-data-augmentation-recsys',
    stack: ['Python', 'OpenAI API', 'ALS/BPR', 'MAP@10', 'NDCG@10'],
    details: {
      en: [
        'The project compares LLM-generated synthetic interactions against simple augmentation baselines.',
        'Evaluation uses ranking metrics over ALS and BPR recommendation models.',
      ],
      es: [
        'El proyecto compara interacciones sintéticas generadas por LLMs contra baselines simples de augmentación.',
        'La evaluación usa métricas de ranking sobre modelos de recomendación ALS y BPR.',
      ],
    },
    images: [],
  },
  {
    slug: 'sequential-finetuning-paths',
    name: {
      en: 'sequential-finetuning-paths',
      es: 'sequential-finetuning-paths',
    },
    description: {
      en: 'Benchmark of six fine-tuning paths for TinyLlama 1.1B.',
      es: 'Benchmark de seis paths de fine-tuning para TinyLlama 1.1B.',
    },
    summary: {
      en: 'Base/chat checkpoints, QLoRA adapter chaining, and sequential versus direct objectives.',
      es: 'Checkpoints base/chat, chaining de adaptadores QLoRA y objetivos secuenciales versus directos.',
    },
    link: 'https://github.com/dedmu5/sequential-finetuning-paths',
    stack: ['PyTorch', 'QLoRA', 'Axolotl'],
    metrics: {
      en: 'BLEU, ROUGE, BERTScore',
      es: 'BLEU, ROUGE, BERTScore',
    },
    details: {
      en: [
        'This benchmark tests how training order and checkpoint choice affect downstream language model behavior.',
        'The comparison covers direct fine-tuning and adapter chaining with QLoRA.',
      ],
      es: [
        'Este benchmark prueba cómo el orden de entrenamiento y la elección de checkpoint afectan el comportamiento downstream de un modelo de lenguaje.',
        'La comparación cubre fine-tuning directo y chaining de adaptadores con QLoRA.',
      ],
    },
    images: [],
  },
  {
    slug: 'lumincity',
    name: {
      en: 'LUMinCity: Urban Simulation Platform',
      es: 'LUMinCity: Plataforma de Simulación Urbana',
    },
    description: {
      en: 'SaaS for software license distribution and a desktop app connecting a React frontend to a compiled urban simulation solver.',
      es: 'Portal SaaS para distribución de licencias y app de escritorio que conecta un frontend React con un solver de simulación urbana.',
    },
    summary: {
      en: 'SaaS for software license distribution and a desktop app connecting a React frontend to a compiled urban simulation solver.',
      es: 'Portal SaaS para distribución de licencias y app de escritorio que conecta un frontend React con un solver de simulación urbana.',
    },
    stack: [
      'Next.js',
      'TypeScript',
      'Electron',
      'PostgreSQL',
      'SQLite',
      'Prisma',
      'NextAuth',
      'Tailwind CSS',
      'Docker',
      'electron-builder',
    ],
    details: {
      en: [],
      es: [],
    },
    images: [],
    sections: [
      {
        title: { en: 'Web Platform', es: 'Plataforma Web' },
        description: {
          en: 'Full-stack SaaS handling the full license lifecycle: request submission, hardware device binding via a polling API, admin approval, and installer delivery.',
          es: 'SaaS full-stack que cubre el ciclo completo de licencias: envio de solicitudes, vinculacion de hardware via polling API, aprobacion administrativa y entrega de instaladores.',
        },
        stack: [
          'Next.js 14',
          'TypeScript',
          'PostgreSQL',
          'Prisma',
          'NextAuth v5',
          'UploadThing',
          'Stripe',
          'Resend',
          'Docker',
        ],
        images: [
          {
            src: '/projects/lumincity/01-web-landing-hero.png',
            alt: {
              en: 'LUMinCity web platform landing page',
              es: 'Landing page de la plataforma web LUMinCity',
            },
          },
          {
            src: '/projects/lumincity/02-web-how-it-works.png',
            alt: {
              en: 'How it works view for the license workflow',
              es: 'Vista de funcionamiento del flujo de licencias',
            },
          },
          {
            src: '/projects/lumincity/03-web-license-request-form.png',
            alt: {
              en: 'License request form',
              es: 'Formulario de solicitud de licencia',
            },
          },
          {
            src: '/projects/lumincity/04-web-device-binding.png',
            alt: {
              en: 'Device binding utility screen',
              es: 'Pantalla de vinculacion de dispositivo',
            },
          },
          {
            src: '/projects/lumincity/05-web-my-requests-approved.png',
            alt: {
              en: 'Approved license request view',
              es: 'Vista de solicitud de licencia aprobada',
            },
          },
          {
            src: '/projects/lumincity/06-web-admin-license-requests.png',
            alt: {
              en: 'Admin license requests table',
              es: 'Tabla administrativa de solicitudes de licencia',
            },
          },
        ],
      },
      {
        title: { en: 'Desktop App', es: 'App Desktop' },
        description: {
          en: 'Electron shell with a Next.js renderer. Orchestrates DBF input files, executes the native lumincity.exe solver via IPC, and streams real-time logs back to the UI. Packaged as a Windows NSIS installer.',
          es: 'Shell Electron con renderer Next.js. Orquesta archivos DBF de entrada, ejecuta el solver nativo lumincity.exe via IPC y transmite logs en tiempo real hacia la UI. Empaquetada como instalador Windows NSIS.',
        },
        stack: [
          'Electron',
          'Next.js 15',
          'TypeScript',
          'SQLite',
          'Prisma',
          'Tailwind CSS',
          'electron-builder',
        ],
        images: [
          {
            src: '/projects/lumincity/07-desktop-my-projects.png',
            alt: {
              en: 'Desktop app projects dashboard',
              es: 'Dashboard de proyectos de la app desktop',
            },
          },
          {
            src: '/projects/lumincity/08-desktop-simulation-form.png',
            alt: {
              en: 'Simulation configuration form',
              es: 'Formulario de configuracion de simulacion',
            },
          },
          {
            src: '/projects/lumincity/09-desktop-file-upload.png',
            alt: {
              en: 'DBF input file upload step',
              es: 'Paso de carga de archivos DBF de entrada',
            },
          },
          {
            src: '/projects/lumincity/10-desktop-pre-run-review.png',
            alt: {
              en: 'Pre-run simulation review',
              es: 'Revision previa a la ejecucion de simulacion',
            },
          },
          {
            src: '/projects/lumincity/11-desktop-error-modal.png',
            alt: {
              en: 'Desktop app validation error modal',
              es: 'Modal de error de validacion en la app desktop',
            },
          },
          {
            src: '/projects/lumincity/12-desktop-simulation-logs.png',
            alt: {
              en: 'Real-time simulation log stream',
              es: 'Stream de logs de simulacion en tiempo real',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'uoct-vehicle-monitoring',
    name: {
      en: 'UOCT Vehicle Monitoring',
      es: 'Monitoreo Vehicular UOCT',
    },
    description: {
      en: 'Real-time CV pipeline over 50 RTSP cameras. Detection, tracking, and per-lane traffic metrics at 25 FPS.',
      es: 'Pipeline de CV en tiempo real sobre 50 cámaras RTSP. Detección, seguimiento y métricas de tránsito por carril a 25 FPS.',
    },
    summary: {
      en: 'Real-time CV pipeline over 50 RTSP cameras. Detection, tracking, and per-lane traffic metrics at 25 FPS.',
      es: 'Pipeline de CV en tiempo real sobre 50 cámaras RTSP. Detección, seguimiento y métricas de tránsito por carril a 25 FPS.',
    },
    stack: [
      'Python',
      'PyTorch',
      'YOLOv11',
      'ByteTrack',
      'Docker',
      'Google Cloud',
      'RabbitMQ',
      'OpenCV',
      'scikit-learn',
    ],
    metrics: {
      en: '+45.3% MOTA · +10.2% IDF1 · 96.3% counting accuracy · Speed error 40% → 9.3%',
      es: '+45.3% MOTA · +10.2% IDF1 · 96.3% precisión en conteo · Error de velocidad 40% → 9.3%',
    },
    details: {
      en: [],
      es: [],
    },
    images: [],
    sections: [
      {
        title: { en: 'Context', es: 'Contexto' },
        description: {
          en: "Santiago's traffic authority (UOCT) needed a system to extract traffic metrics from their existing camera network automatically — without storing any video or images for privacy reasons. All processing had to run on-premise inside the UOCT network.",
          es: 'La Unidad Operativa de Control de Tránsito (UOCT) necesitaba un sistema que extrajera métricas de tránsito de su red de cámaras existente de forma automática, sin almacenar video ni imágenes por razones de privacidad. Todo el procesamiento debía ejecutarse en los servidores internos de la UOCT.',
        },
      },
      {
        title: {
          en: 'Hardware & Infrastructure',
          es: 'Hardware e Infraestructura',
        },
        description: {
          en: 'I selected and provisioned the on-premise hardware: a Dell PowerEdge R7615 with an Nvidia L4 GPU for inference, and a Lenovo ThinkStation as a secure gateway isolating the UOCT internal network from the external cloud. The gateway routes processed detections outward without exposing the camera feeds.',
          es: 'Seleccioné y provisioné el hardware on-premise: un Dell PowerEdge R7615 con GPU Nvidia L4 para inferencia, y una Lenovo ThinkStation como gateway seguro que aísla la red interna de la UOCT de la nube externa. El gateway enruta las detecciones procesadas hacia afuera sin exponer las señales de las cámaras.',
        },
        images: [
          {
            src: '/projects/uoct/01-architecture.png',
            alt: {
              en: 'UOCT system architecture diagram',
              es: 'Diagrama de arquitectura del sistema UOCT',
            },
          },
        ],
      },
      {
        title: { en: 'Detection & Tracking', es: 'Detección y Seguimiento' },
        description: {
          en: 'YOLOv11 fine-tuned on a custom dataset of Santiago street cameras covering 15+ vehicle classes. ByteTrack handles multi-object tracking across frames. The system processes 50 RTSP streams simultaneously at 25 FPS. No frames are stored at any point.',
          es: 'YOLOv11 afinado sobre un dataset personalizado de cámaras de calles de Santiago, cubriendo más de 15 clases de vehículos. ByteTrack gestiona el seguimiento multi-objeto entre frames. El sistema procesa 50 streams RTSP simultáneamente a 25 FPS. No se almacena ningún frame en ningún momento.',
        },
        images: [
          {
            src: '/projects/uoct/02-detection-alameda-matucana.png',
            alt: {
              en: 'Vehicle detection on Alameda and Matucana',
              es: 'Detección vehicular en Alameda y Matucana',
            },
          },
          {
            src: '/projects/uoct/03-detection-vicuna-mackenna.png',
            alt: {
              en: 'Vehicle detection on Vicuña Mackenna',
              es: 'Detección vehicular en Vicuña Mackenna',
            },
          },
        ],
      },
      {
        title: { en: 'Lane Annotator', es: 'Anotador de Carriles' },
        description: {
          en: 'To extract per-lane metrics, I built a desktop annotation tool (UOCT Lane Annotator) that lets operators define lane polygons on camera frames and associate GPS coordinates to them. This produces the geometric mapping needed to assign detections to specific lanes and directions.',
          es: 'Para extraer métricas por carril, desarrollé una herramienta de anotación de escritorio (UOCT Lane Annotator) que permite a los operadores definir polígonos de carril sobre los frames de las cámaras y asociarles coordenadas GPS. Esto genera el mapeo geométrico necesario para asignar detecciones a carriles y direcciones específicas.',
        },
        images: [
          {
            src: '/projects/uoct/04-lane-annotator.png',
            alt: {
              en: 'UOCT Lane Annotator desktop tool',
              es: 'Herramienta desktop UOCT Lane Annotator',
            },
          },
        ],
      },
      {
        title: { en: 'Speed Calibration', es: 'Calibración de Velocidad' },
        description: {
          en: 'Converting pixel trajectories to real-world speeds required geometric calibration for each camera. I used Red buses as dynamic references — their physical dimensions are known and they circulate the same streets continuously. By observing multiple buses across frames and combining estimates using inverse-variance fusion, speed estimation error was reduced from 40% to 9.3%.',
          es: 'Convertir trayectorias en píxeles a velocidades reales requirió calibración geométrica por cámara. Usé los buses Red como referencias dinámicas — sus dimensiones físicas son conocidas y circulan continuamente por las mismas calles. Observando múltiples buses en distintos frames y combinando estimaciones mediante fusión por varianza inversa, el error de estimación de velocidad se redujo de 40% a 9.3%.',
        },
      },
      {
        title: { en: 'Output', es: 'Salida' },
        description: {
          en: "Per-lane metrics — vehicle counts, queue lengths, flow, and speed — are transmitted to Entel's Google Cloud VPC via RabbitMQ. The VISOR UOCT dashboard (built by Entel on GCP) visualizes the data for UOCT operators in real time.",
          es: 'Las métricas por carril — conteo de vehículos, largo de cola, flujo y velocidad — se transmiten a la VPC de Entel en Google Cloud mediante RabbitMQ. El dashboard VISOR UOCT (desarrollado por Entel en GCP) visualiza los datos para los operadores de la UOCT en tiempo real.',
        },
        images: [
          {
            src: '/projects/uoct/05-dashboard.png',
            alt: {
              en: 'VISOR UOCT dashboard',
              es: 'Dashboard VISOR UOCT',
            },
            caption: {
              en: 'VISOR UOCT — built by Entel on GCP.',
              es: 'VISOR UOCT — desarrollado por Entel en GCP.',
            },
          },
        ],
      },
    ],
    showGlobalStack: true,
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug)
}
