import SvgIcon from '@/components/SvgIcon/index.vue';
import test from "@/components/test.vue";
import type { App, Component } from 'vue';

//用于注册components文件夹内部全部全局组件！！！
const components = { SvgIcon, test };
export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
        })
    }
}