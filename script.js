window.MainVueComponent = {};

const HomeVue = {
    template: `<p>Home</p>`
}

const TabsVue = {
    data() {
        return {
            data: null
        }
    },

    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {return res.json()})
            .then(res => {
                this.data = res;
            })
    },

    template: `
        <div class="list">
            <div class="item" v-for="item in this.data">
                <div class="title">{{ item.title }}</div>
                <div class="body">{{ item.body }}</div>
            </div>
        </div>
    `
}

new HashRouter().addPath('#/tab', () => {
    window.MainVueComponent = Vue.createApp(TabsVue).mount('#app');
});

new HashRouter().addPath('#/home', () => {
    window.MainVueComponent = Vue.createApp(HomeVue).mount('#app');
});