import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  webDir: ".output/public",
  android: {
    adjustMarginsForEdgeToEdge: "force",
  },
};

export default config;
