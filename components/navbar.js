class navbar extends HTMLElement {

    constructor (){
        super();
        let templateContent = `
        <div>
            <p>my navbar</p>
        </div>`
        //const shadowRoot = this.attachShadow({mode: "open"})
        //shadowRoot.innerHTML = templateContent
        this.innerHTML = templateContent


    }

    connectedCallback(){
        console.log("connected")

    }

    disconnectedCallback(){

    }

}

if ('customElements' in window){
    customElements.define('nav-bar',navbar)
}