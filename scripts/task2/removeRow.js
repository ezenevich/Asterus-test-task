const removeRow = (button) => {
    const buttonCell = button.parentNode;
    const row = buttonCell.parentNode;
    row.remove();
}
