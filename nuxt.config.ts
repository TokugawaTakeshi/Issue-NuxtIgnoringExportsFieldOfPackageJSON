import { NuxtConfig } from "@nuxt/types";


const Config: NuxtConfig = {

  plugins: [
    "~/NuxtPlugins/DependenciesInjectionNuxtPlugin.ts",
    "~/NuxtPlugins/LoggerNuxtPlugin.ts"
  ],

  buildModules: [
    "@nuxt/typescript-build"
  ],

  telemetry: false
};


export default Config;
