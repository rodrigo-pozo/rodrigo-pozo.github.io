export type Language = 'en' | 'es'

type LocalizedText = Record<Language, string>

export type Project = {
  slug: string
  name: string
  description: LocalizedText
  summary: LocalizedText
  link?: string
  stack: string[]
  metrics?: string
  details: Record<Language, string[]>
  images: {
    src: string
    alt: LocalizedText
    caption?: LocalizedText
  }[]
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
  { label: 'Email', href: `mailto:${EMAIL}` },
]

export const UI = {
  en: {
    tagline: 'Data Scientist · M.Sc. Candidate · Santiago, Chile',
    intro:
      'Data Scientist and M.Sc. Candidate at PUC Chile. I work on computer vision, multimodal deep learning, and edge-to-cloud deployment.',
    introMore:
      'I also build full-stack software with React, Next.js, Electron, and Node.js. I care about ML systems that move from prototype to operation: cameras, queues, cloud, edge, and measurable performance.',
    featuredProjects: 'Featured Projects',
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
    tagline: 'Data Scientist · M.Sc. Candidate · Santiago, Chile',
    intro:
      'Data Scientist y M.Sc. Candidate en PUC Chile. Trabajo en visión por computadora, deep learning multimodal y despliegue edge-to-cloud.',
    introMore:
      'También desarrollo software full-stack con React, Next.js, Electron y Node.js. Me interesan los sistemas ML que pasan de prototipo a operación: cámaras, colas, cloud, edge y métricas verificables.',
    featuredProjects: 'Proyectos destacados',
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
    name: 'FUSA-Net',
    description: {
      en: 'Cross-modal retrieval between sheet music and audio with contrastive learning.',
      es: 'Retrieval cross-modal entre partituras y audio con contrastive learning.',
    },
    summary: {
      en: 'Dual-encoder model for image-to-audio and audio-to-image retrieval. M.Sc. thesis, PUC Chile.',
      es: 'Modelo dual-encoder para retrieval imagen-audio y audio-imagen. Tesis de Magíster, PUC Chile.',
    },
    link: 'https://github.com/dedmu5/FUSA-Net',
    stack: ['PyTorch', 'transformers', 'CCA'],
    metrics: 'Recall@1 66.87%, Recall@10 92.24%, modality gap 0.036',
    details: {
      en: [
        'FUSA-Net aligns sheet-music images and audio representations in a shared embedding space.',
        'The system uses contrastive learning to retrieve the matching modality without requiring paired metadata at inference time.',
      ],
      es: [
        'FUSA-Net alinea imágenes de partituras y representaciones de audio en un espacio compartido.',
        'El sistema usa contrastive learning para recuperar la modalidad correspondiente sin requerir metadata pareada en inferencia.',
      ],
    },
    images: [],
  },
  {
    slug: 'self-role-prompting',
    name: 'self-role-prompting',
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
    name: 'llm-data-augmentation-recsys',
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
    name: 'sequential-finetuning-paths',
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
    metrics: 'BLEU, ROUGE, BERTScore',
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
    name: 'LUMinCity',
    description: {
      en: 'Cross-platform desktop platform for urban simulation and territorial evolution scenarios.',
      es: 'Plataforma desktop cross-platform para simulación urbana y escenarios de evolución territorial.',
    },
    summary: {
      en: 'Private platform and successor to CUBE Land and mu-Land.',
      es: 'Plataforma privada y sucesor de CUBE Land y mu-Land.',
    },
    stack: ['React', 'Next.js', 'Electron', 'Node.js'],
    details: {
      en: [
        'LUMinCity supports scenario visualization for territorial planning workflows.',
        'The desktop shell is built with Electron, with a React/Next.js frontend and Node.js backend services.',
      ],
      es: [
        'LUMinCity permite visualizar escenarios para flujos de planificación territorial.',
        'La aplicación desktop usa Electron, con frontend en React/Next.js y servicios backend en Node.js.',
      ],
    },
    images: [],
  },
  {
    slug: 'uoct-vehicle-monitoring',
    name: 'UOCT Vehicle Monitoring System',
    description: {
      en: 'Real-time CV pipeline with YOLOv11 and ByteTrack over 50 RTSP cameras.',
      es: 'Pipeline CV en tiempo real con YOLOv11 y ByteTrack sobre 50 cámaras RTSP.',
    },
    summary: {
      en: 'Traffic analytics pipeline for detection, tracking, counting, and speed estimation.',
      es: 'Pipeline de analítica de tráfico para detección, tracking, conteo y estimación de velocidad.',
    },
    stack: ['Python', 'PyTorch', 'Docker', 'Google Cloud'],
    metrics:
      '+45.3% MOTA, +10.2% IDF1, 96.3% counting accuracy, speed error 40% -> 9.3%',
    details: {
      en: [
        'The system processes RTSP streams in real time and extracts operational traffic metrics.',
        'Deployment combines containerized inference, message queues, and cloud infrastructure.',
      ],
      es: [
        'El sistema procesa streams RTSP en tiempo real y extrae métricas operacionales de tráfico.',
        'El despliegue combina inferencia en contenedores, colas de mensajes e infraestructura cloud.',
      ],
    },
    images: [],
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug)
}
