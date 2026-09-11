import type { Project, ProjectDomainEvidence } from '../types/content'

// Add only owner-curated projects here. This site does not import projects from an external API.
export const projects: Project[] = [
  {
    title: 'SDR Spectral Monitoring',
    description:
      'Applied spectral-monitoring work combining HackRF acquisition, PSD and waterfall views, Raspberry Pi deployment, quantized VAE/TFLite inference, IPC, and operational metrics.',
    technologies: [
      'HackRF',
      'SDR',
      'DSP',
      'Raspberry Pi',
      'TFLite',
      'ZMQ',
      'UDP',
    ],
    status: 'Research work',
  },
  {
    title: 'ESP32-C3 RF Experimentation Platform',
    description:
      'An embedded RF platform for Wi-Fi/BLE, Sub-GHz, and NFC experimentation, with ESP32-C3 and CC1101 systems, Altium PCB design, and RF/EMC considerations.',
    technologies: ['ESP32-C3', 'CC1101', 'Altium Designer', 'ESP-IDF'],
    repositoryUrl:
      'https://github.com/segilrios/nota_de_aplicacion_flipper_zero',
    status: 'Public repository',
    // Source: https://github.com/segilrios/nota_de_aplicacion_flipper_zero/blob/main/Documentacion/Nota_de_aplicacion/figures/pcb_render_3d.png
    image: {
      src: `${import.meta.env.BASE_URL}media/flipper-zero-pcb-render.png`,
      alt: 'Top view of the ESP32-C3 RF experimentation platform PCB render',
    },
  },
  {
    title: 'Colombian Gold Regime ML',
    description:
      'Macrofinancial machine-learning research using UMAP, KMeans, and HistGradientBoosting to model the one-month direction of Colombian gold.',
    technologies: [
      'Python',
      'UMAP',
      'KMeans',
      'HistGradientBoostingClassifier',
    ],
    repositoryUrl: 'https://github.com/segilrios/Proyecto_TAM_Final',
    status: 'Public repository',
    // Source: https://github.com/segilrios/Proyecto_TAM_Final/blob/main/outputs/figures/umap_regimes_chg.png
    image: {
      src: `${import.meta.env.BASE_URL}media/colombian-gold-umap-regimes.png`,
      alt: 'UMAP scatter plot separating three change-based Colombian gold market regimes',
    },
  },
  {
    title: 'Professional Portfolio',
    description:
      'An accessible professional portfolio built with React, TypeScript, and Vite.',
    technologies: ['React', 'TypeScript', 'Vite'],
    repositoryUrl: 'https://github.com/segilrios/linkedin-style-page',
    status: 'Public repository',
  },
]

// Evidence is limited to technologies and descriptions in the curated project records above.
export const projectDomainEvidence: ProjectDomainEvidence[] = [
  {
    domain: 'Signal and RF systems',
    projects: [
      'SDR Spectral Monitoring',
      'ESP32-C3 RF Experimentation Platform',
    ],
    summary:
      'RF acquisition, signal processing, wireless experimentation, and RF-aware hardware design.',
  },
  {
    domain: 'Embedded and edge computing',
    projects: [
      'SDR Spectral Monitoring',
      'ESP32-C3 RF Experimentation Platform',
    ],
    summary:
      'Raspberry Pi deployment, TFLite edge inference, ESP32-C3 firmware, and PCB implementation.',
  },
  {
    domain: 'Machine learning and data',
    projects: ['SDR Spectral Monitoring', 'Colombian Gold Regime ML'],
    summary:
      'Quantized VAE inference plus clustering and classification for macrofinancial research.',
  },
  {
    domain: 'Web engineering',
    projects: ['Professional Portfolio'],
    summary:
      'Accessible React and TypeScript interface delivery with a Vite build pipeline.',
  },
]
