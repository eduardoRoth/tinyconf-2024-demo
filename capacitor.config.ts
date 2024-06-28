import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.eduardoroth.tinyconf2024',
  appName: 'TinyConf 2024',
  webDir: 'dist/analog/public',
  // THIS MUST BE REMOVED FOR PRD. ONLY FOR LIVE RELOAD
  server: {
    url: 'http://localhost:5173',
    cleartext: true,
  },
};

export default config;
