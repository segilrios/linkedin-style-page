import type { Project } from '../types/content'

// Add only owner-curated projects here. This site does not import projects from an external API.
export const projects: Project[] = [
  {
    title: 'SDR Spectral Monitoring',
    description:
      'Applied spectral-monitoring work combining HackRF acquisition, PSD and waterfall views, Raspberry Pi deployment, quantized VAE/TFLite inference, IPC, and operational metrics.',
    technologies: ['HackRF', 'SDR', 'DSP', 'Raspberry Pi', 'TFLite', 'ZMQ', 'UDP'],
    status: 'Research work',
  },
  {
    title: 'ESP32-C3 RF Experimentation Platform',
    description:
      'An embedded RF platform for Wi-Fi/BLE, Sub-GHz, and NFC experimentation, with ESP32-C3 and CC1101 systems, Altium PCB design, and RF/EMC considerations.',
    technologies: ['ESP32-C3', 'CC1101', 'Altium Designer', 'ESP-IDF'],
    repositoryUrl: 'https://github.com/segilrios/nota_de_aplicacion_flipper_zero',
    status: 'Public repository',
  },
  {
    title: 'Colombian Gold Regime ML',
    description:
      'Macrofinancial machine-learning research using UMAP, KMeans, and HistGradientBoosting to model the one-month direction of Colombian gold.',
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
