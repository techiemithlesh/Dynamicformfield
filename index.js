var formField = document.querySelector('.form_input');

var addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('placeholder', 'Dynamic Field');
    formField.appendChild(newField);
});

document.querySelector('.removeBtn').addEventListener('click', () => {
    var dField = formField.getElementsByTagName('input');

    if(dField.length > 2) {
        formField.removeChild(dField[(dField.length) -1]);
    }
});