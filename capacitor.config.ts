import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "starter-nuxt4",
  webDir: ".output/public",
  android: {
    adjustMarginsForEdgeToEdge: "force",
  },
};

export default config;
