import type { Project } from '../types/content'

// Add only owner-curated projects here. This site does not import projects from an external API.
export const projects: Project[] = [
  {
    title: 'ESP32-C3 RF Experimentation Platform',
    description:
      'A compact embedded platform for Wi-Fi/BLE, Sub-GHz, and NFC experimentation, with PCB and firmware documentation.',
    technologies: ['ESP32-C3', 'CC1101', 'Altium Designer', 'ESP-IDF'],
    repositoryUrl: 'https://github.com/segilrios/nota_de_aplicacion_flipper_zero',
    status: 'Public repository',
  },
  {
    title: 'Colombian Gold Regime ML',
    description:
      'Machine-learning research that predicts the one-month direction of Colombian gold using macrofinancial regimes.',
    technologies: ['Python', 'UMAP', 'KMeans', 'HistGradientBoostingClassifier'],
    repositoryUrl: 'https://github.com/segilrios/Proyecto_TAM_Final',
    status: 'Public repository',
  },
  {
    title: 'Professional Portfolio',
    description: 'An accessible professional portfolio built with React, TypeScript, and Vite.',
    technologies: ['React', 'TypeScript', 'Vite'],
    repositoryUrl: 'https://github.com/segilrios/linkedin-style-page',
    status: 'Public repository',
  },
]
