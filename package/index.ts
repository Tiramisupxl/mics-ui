import { VueConstructor } from 'vue/types';
import MButton from './button/index';
import MInput from './input/index';

const components = [MButton, MInput];

const install = function(Vue) {
	components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	...components,
};
