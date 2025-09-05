document.getElementById('donate-noakhali-btn').addEventListener('click', function(event){
    event.preventDefault()
    let NoakhaliInput = getDonateInputById("input-noakhali");
    let Amount = getDonateFieldById("my-money");
   if(NoakhaliInput > 0 && NoakhaliInput< Amount){

    
    document.getElementById("congration-noakhali").showModal();

    let NoakhaliDonate = getDonateFieldById("noakhali-donate");
    let NewNoakhaliDonation = NoakhaliDonate + NoakhaliInput;
    document.getElementById("noakhali-donate").innerText = NewNoakhaliDonation;

   
    let FinalAmount = Amount-NoakhaliInput;
    document.getElementById("my-money").innerText = FinalAmount;

    const div = document.createElement('div');
    div.classList.add("bg-green-500");

    div.innerHTML = `
    <h1 class=" text-xl font-semibold">Donation for Noakhali!</h1>
    <p>Your Donation Amount ${NoakhaliInput} TK.</p>
    <h3>Your Corrent Balance ${FinalAmount} TK.</h3>`
    document.getElementById('history-section').appendChild(div);
    // document.getElementById('donate-history').addEventListener('click',function(event){
    //     event.preventDefault();
    //     let histories = document.getElementsByClassName("noakhali-history");
    //     for (let item of histories) {
    //         item.classList.remove("hidden");
    //     }
    // })
   }
   else{
    alert("Please enter your righ amount")
   }
   
})

