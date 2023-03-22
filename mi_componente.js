class MiComponente extends HTMLElement {
    
    constructor() {
        super();
        this._titulo="hola mundo";
        this.contador=0;
    };

    static get observedAttributes() {
        return ['_titulo'];
    }

    get miTitulo() {
        console.log('ping');
        return this._titulo;
    }

    set miTitulo(titulo) {
        this._titulo = titulo;
        this.setAttribute('_titulo', titulo);
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
        this.miTitulo = newValue;

        if (this.querySelector('h1') != null) this.querySelector('h1').innerHTML=this._titulo;
        
    }

    clickCallback(element) {
        this.contador+=1;
        console.log("click "+this.contador.toString());
        console.log(element);
    }

    connectedCallback() {
        var elemTitulo = document.createElement('h1');
        elemTitulo.className='titulo';
        elemTitulo.innerHTML=this._titulo;
        elemTitulo.addEventListener('click', this.clickCallback.bind(this, elemTitulo));
        this.append(elemTitulo);
    };
}
    
customElements.define('mi-componente', MiComponente);
