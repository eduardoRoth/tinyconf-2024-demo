import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.eduardoroth.tinyconf2024',
  appName: 'TinyConf 2024',
  webDir: 'dist/analog/public',
  server: {
    url: 'http://localhost:5173',
    cleartext: true,
  },
};

export default config;
