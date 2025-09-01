function getDonateInputById(id){
    const InputValue = document.getElementById(id).value;
    const InputNumber = parseFloat(InputValue);
    return InputNumber;

};

function getDonateFieldById(id){
    const FieldValue = document.getElementById(id).innerText;
    const FieldValueNumber = parseFloat(FieldValue);
    return FieldValueNumber;
}