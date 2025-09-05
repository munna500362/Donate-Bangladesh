document.getElementById('donate-feni-btn').addEventListener('click', function(event){
    event.preventDefault()
    let feniInput = getDonateInputById("input-donate-feni");
    let Amount = getDonateFieldById("my-money");
   if(feniInput > 0 && feniInput< Amount){

    
    document.getElementById("congration-feni").showModal();

    let feniDonate = getDonateFieldById("feni-donate");
    let feniDonation = feniDonate + feniInput;
    document.getElementById("feni-donate").innerText = feniDonation;

   
    let FinalAmount = Amount-feniInput;
    document.getElementById("my-money").innerText = FinalAmount;

    const div = document.createElement('div');
    div.classList.add("bg-yellow-500");

    div.innerHTML = `
    <h1 class=" text-xl font-semibold">Donation for Feni!</h1>
    <p>Your Donation Amount ${feniInput} TK.</p>
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

