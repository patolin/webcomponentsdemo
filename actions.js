
// botones

function chgColor() {
    const component = document.getElementById('comp_id_2');
    component.miTitulo = 'nuevo titulo';

    const component1 = document.getElementById('comp_id_1');
    component1.miTitulo = 'comp1 - nuevo titulo';
}

function chgCheckbox() {
    const checkbox = document.getElementById('mi_checkbox');
    checkbox.isChecked = !checkbox.isChecked;
    if (checkbox.isChecked) { 
        checkbox.miLabel = 'Label Check';
    } else {
        checkbox.miLabel = 'Label No Check';
    }

    const checkbox1 = document.getElementById('mi_checkbox_1');
    checkbox1.isChecked = false;
}