import createElement from "../task1/createElement.js";

const addRow = info => {
    const table = document.querySelector('.table__body');

    const row = table.insertRow(-1);

    const nameCell = row.insertCell(0);
    nameCell.classList.add('table__body-cell');
    nameCell.appendChild(document.createTextNode(info.name));

    const ageCell = row.insertCell(1);
    ageCell.classList.add('table__body-cell');
    ageCell.appendChild(document.createTextNode(info.age));

    const genderCell = row.insertCell(2);
    genderCell.classList.add('table__body-cell');
    genderCell.appendChild(document.createTextNode(info.gender));

    const deleteCell = row.insertCell(3);
    deleteCell.classList.add('table__body-cell');
    const button = createElement('button', {
        className: 'delete-btn',
        textContent: 'X',
    });

    button.addEventListener('click', event => {
        event.stopPropagation();
        row.remove();
    })

    deleteCell.appendChild(button);
}

export default addRow;