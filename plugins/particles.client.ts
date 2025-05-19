import { loadFull } from "tsparticles";

export default defineNuxtPlugin(async (nuxtApp) => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return {
    provide: {
      particlesInit
    }
  }
})