import App from './app.vue'
// import Vue from 'vue'
function Vueinit() {

    return new Vue({
        el: '#app',
        render: h => h(App)
    })
}

export default Vueinit