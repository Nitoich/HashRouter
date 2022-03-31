window.MainVueComponent = {};

const HomeVue = {
    template: `<p>Home</p>`
}

const TabsVue = {
    template: `<p>Tabs</p>`
}

new HashRouter().addPath('#/tab', () => {
    window.MainVueComponent = Vue.createApp(TabsVue).mount('#app');
});

new HashRouter().addPath('#/home', () => {
    window.MainVueComponent = Vue.createApp(HomeVue).mount('#app');
});