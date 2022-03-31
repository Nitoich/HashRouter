class HashRouter {
    routes = [];

    constructor() {
        if(typeof HashRouter.instance === 'object') {
            return HashRouter.instance;
        }
        HashRouter.instance = this;
        return this;
    }

    getCurrentRoute() {
        let location = window.location.hash;
        if (location) {
            return location;
        } else {
            return '#'
        }
    }

    addPath(path, cb) {
        this.routes.push({
            path: path,
            cb: cb
        });
    }

    updateContent() {
        this.dispathLocation(this.getCurrentRoute());
    }

    dispathLocation(location) {
        this.routes.forEach(route => {
            if(route.path == location) {
                route.cb();
            }
        });
    }
}

window.addEventListener('load', () => {
    new HashRouter().updateContent();
});

window.addEventListener('hashchange', (e)=>{
    new HashRouter().updateContent();
})