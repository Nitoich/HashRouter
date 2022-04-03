class HashRouter {
    #routes = [];
    error = null;

    defaultCB = () => {
        console.log('Not Found');
        if(!this.error) {
            this.error = document.createElement('div');
            this.error.style.cssText = `
            display: flex;
            justify-content: center;
            width: 80%;
            margin: 20px auto;
            color: red;
            border: 2px solid red;
            border-radius: 10px;
            padding: 10px;
            `;

            this.error.innerHTML = `Not Found!`

            document.body.prepend(this.error);
        }
    }

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
        this.#routes.push({
            path: path,
            cb: cb
        });
    }

    updateContent() {
        this.dispathLocation(this.getCurrentRoute());
    }

    dispathLocation(location) {
        if (this.error) {
            this.error.remove();
            this.error = null;
        }

        let finded = false;
        this.#routes.forEach(route => {
            if(route.path == location) {
                route.cb();
                finded = true;
            }
        });

        if(!finded) {
            this.defaultCB();
        }
    }
}

window.addEventListener('load', () => {
    new HashRouter().updateContent();
});

window.addEventListener('hashchange', (e)=>{
    new HashRouter().updateContent();
})