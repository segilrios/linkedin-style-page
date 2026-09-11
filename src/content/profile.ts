import type { Profile } from '../types/content'

// Replace this local dossier with owner-approved information before publishing.
export const profile: Profile = {
  name: 'Sergio Alejandro Gil Ríos',
  headline: 'Electronics Engineering student and applied systems researcher',
  introduction:
    'Ninth-semester Electronics Engineering student focused on SDR/RF, embedded systems, and reproducible Python workflows for applied research.',
  experience: [
    {
      role: 'Student Researcher',
      organization: 'GCPDS',
      period: 'Current',
      description:
        'Applied SDR-based spectral monitoring with HackRF, Raspberry Pi, PSD and waterfall visualization, quantized VAE/TFLite inference, and IPC through ZMQ and UDP with operational metrics.',
    },
    {
      role: 'Academic Monitor',
      organization: 'Signals and Systems',
      period: 'Academic appointment',
      description: 'Supported academic monitoring and teaching in signals and systems.',
    },
  ],
  skills: [
    'Python',
    'NumPy',
    'pandas',
    'scikit-learn',
    'XGBoost',
    'MATLAB',
    'SDR/RF/DSP',
    'Embedded systems',
    'Git/GitHub',
  ],
  education: [
    {
      credential: 'Electronics Engineering, ninth semester',
      institution: 'Universidad Nacional de Colombia',
      period: 'In progress',
    },
  ],
  contacts: [
    { label: 'Email', value: 'segilr@unal.edu.co', href: 'mailto:segilr@unal.edu.co' },
    { label: 'Phone', value: '+57 304 655 2853', href: 'tel:+573046552853' },
    { label: 'Location', value: 'Manizales, Caldas, Colombia' },
    {
      label: 'GitHub',
      value: 'github.com/segilrios',
      href: 'https://github.com/segilrios',
      external: true,
    },
  ],
}
