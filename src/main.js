import { createApp } from 'vue'
import App from "./App";
import components from "@/Components/UI"

const app = createApp(App)
app.mount('#app')

components.forEach(component => {
    app.component(component.name, component)
})
