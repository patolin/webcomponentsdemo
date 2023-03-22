class MiCheckbox extends HTMLElement {
    
    constructor() {
        super();
        this.checked=false;
        this.label = 'Default label';
    };

    static get observedAttributes() {
        return ['checked','label'];
    }

    get isChecked() {
        return this.checked;
    }

    set isChecked(value) {
        this.checked = value;
        this.clickCallback(this.querySelector('input'), false);  
    }

    get miLabel() {
        return this.label;
    }

    set miLabel(value) {
        this.label = value;
        this.childNodes[0].childNodes[0].textContent = value;
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
        if (property == 'checked') {console.log(newValue); this.checked = newValue=="checked"?true:false; }
    }

    clickCallback(element, clickChange = true) {
        if (clickChange) this.checked = !this.checked;
        if (this.checked) {
            element.setAttribute('checked', "checked");
        } else {
            element.removeAttribute('checked');
        } 
    }

    connectedCallback() {
        
        /*
        <label class="bc-container-checkbox">label 1
            <input type="checkbox" id="" name="" value="" />
            <span class="bc-checkbox" tabindex="0"></span>
        </label>
        */

        var elemLabel = document.createElement('label');
        elemLabel.className = 'bc-container-checkbox';
        elemLabel.innerHTML = this.label;

        var elemSpan = document.createElement('span');
        elemSpan.className = 'bc-checkbox';
        elemSpan.setAttribute('tabindex', '0');

        var elemInput = document.createElement('input');
        elemInput.setAttribute('type', 'checkbox');
        elemInput.setAttribute('name', '');
        elemInput.setAttribute('value', '');
        if (this.checked) elemInput.setAttribute('checked', 'checked');
        elemInput.addEventListener('click', this.clickCallback.bind(this, elemInput));

        elemLabel.append(elemInput);
        elemLabel.append(elemSpan);
        
        this.append(elemLabel);
    };
}
    
customElements.define('mi-checkbox', MiCheckbox);