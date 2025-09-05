document.getElementById('donation-data').addEventListener('click', function(event){
    event.preventDefault();
   getButtonById("donation-section");
})

document.getElementById('donate-history').addEventListener('click', function(event){
    event.preventDefault()
    getButtonById("history-section")
})