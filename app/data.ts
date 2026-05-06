export type Project = {
  name: string
  description: string
  link?: string
  stack: string[]
  metrics?: string
}

export type WorkExperience = {
  company: string
  role: string
  period: string
  summary: string
  stack: string[]
}

export const EMAIL = 'rfpozo@uc.cl'

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/dedmu5' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rodrigo-pozo' },
  { label: 'Email', href: `mailto:${EMAIL}` },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ISCI',
    role: 'Data Scientist',
    period: 'Abr 2025 - presente',
    summary:
      'Pipeline CV en tiempo real para la UOCT sobre 50 cámaras RTSP a 25 FPS. YOLOv11 + ByteTrack; 96.3% counting accuracy; error de velocidad reducido de 40% a 9.3%.',
    stack: ['Python', 'PyTorch', 'Docker', 'Google Cloud', 'RabbitMQ'],
  },
  {
    company: 'Freelance',
    role: 'Software Engineer',
    period: 'Abr 2025 - presente',
    summary:
      'LUMinCity, plataforma desktop cross-platform para simulación urbana y planificación territorial. Sucesor de CUBE Land y mu-Land, usado por agencias en EE.UU. y África.',
    stack: ['React', 'Next.js', 'Electron', 'Node.js'],
  },
  {
    company: 'WOLKE',
    role: 'Data Scientist',
    period: 'Oct 2024 - Mar 2025',
    summary:
      'Monitoreo hídrico en minería con ML y visión por computadora. Segmentación U-Net sobre Sentinel-2 con IoU 94.4%.',
    stack: ['PyTorch', 'scikit-learn', 'OpenCV'],
  },
  {
    company: 'Manglar Labs',
    role: 'IoT Developer',
    period: 'Dic 2023 - Feb 2024',
    summary:
      'Dispositivo IoT para monitoreo de ganado con transmisión satelital.',
    stack: ['ESP32-S3', 'LoRaWAN', 'C'],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'FUSA-Net',
    description:
      'Retrieval cross-modal entre partituras y audio con contrastive learning. Tesis de Magíster, PUC Chile.',
    link: 'https://github.com/dedmu5/FUSA-Net',
    stack: ['PyTorch', 'transformers', 'CCA'],
    metrics: 'Recall@1 66.87%, Recall@10 92.24%, modality gap 0.036',
  },
  {
    name: 'self-role-prompting',
    description:
      'Estrategia zero-shot donde el modelo auto-selecciona su rol de razonamiento antes de resolver la tarea. Evaluado en AQUA-RAT, CSQA y StrategyQA.',
    link: 'https://github.com/dedmu5/self-role-prompting',
    stack: ['Python', 'OpenAI API', 'LLM', 'NLP'],
  },
  {
    name: 'llm-data-augmentation-recsys',
    description:
      'Data augmentation sintética con LLMs para sistemas de recomendación. GPT vs. baselines aleatorios/popularidad en MovieLens 100K.',
    link: 'https://github.com/dedmu5/llm-data-augmentation-recsys',
    stack: ['Python', 'OpenAI API', 'ALS/BPR', 'MAP@10', 'NDCG@10'],
  },
  {
    name: 'sequential-finetuning-paths',
    description:
      'Benchmark de 6 paths de fine-tuning para TinyLlama 1.1B: base/chat checkpoints, QLoRA adapter chaining y objetivos secuenciales vs. directos.',
    link: 'https://github.com/dedmu5/sequential-finetuning-paths',
    stack: ['PyTorch', 'QLoRA', 'Axolotl'],
    metrics: 'BLEU, ROUGE, BERTScore',
  },
  {
    name: 'LUMinCity',
    description:
      'Plataforma desktop privada para simulación urbana y visualización de escenarios de evolución territorial.',
    stack: ['React', 'Next.js', 'Electron', 'Node.js'],
  },
  {
    name: 'Sistema de monitoreo vehicular UOCT',
    description:
      'Pipeline CV en tiempo real sobre 50 cámaras RTSP con detección YOLOv11 y tracking ByteTrack.',
    stack: ['Python', 'PyTorch', 'Docker', 'Google Cloud'],
    metrics:
      '+45.3% MOTA, +10.2% IDF1, 96.3% counting accuracy, error de velocidad 40% -> 9.3%',
  },
]
