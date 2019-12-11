
import { VueConstructor } from 'vue/types';
declare global {
  interface Window {
    Vue?: VueConstructor
  }
}

declare module "vue/types/vue" {
  interface VueConstructor {
    install: any
  }
}

export {}