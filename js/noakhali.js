document.getElementById('donate-noakhali-btn').addEventListener('click', function(event){
    event.preventDefault()
    console.log("Hellow")
    let NoakhaliInput = getDonateInputById("input-noakhali");
    console.log("Noakhali Input Money :", NoakhaliInput);
    let Amount = getDonateFieldById("my-money");
   if(NoakhaliInput > 0 && NoakhaliInput< Amount){
    console.log(" This is right");

    
    document.getElementById("congration-noakhali").showModal();
    let NoakhaliDonate = getDonateFieldById("noakhali-donate");
    let NewNoakhaliDonation = NoakhaliDonate + NoakhaliInput;
    document.getElementById("noakhali-donate").innerText = NewNoakhaliDonation;
    console.log(NewNoakhaliDonation);

    
   
    let FinalAmount = Amount-NoakhaliInput;
    document.getElementById("my-money").innerText = FinalAmount;
    console.log("Final Amount :", FinalAmount);
   }
   else{
    alert("Please enter your righ amount")
   }
   
})

