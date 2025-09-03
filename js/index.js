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


document.getElementById("donate-history").addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById("main-section").classList.add('hidden');
})

document.getElementById("donation-data").addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById("main-section").classList.remove("hidden");
})