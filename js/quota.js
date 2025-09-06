document.getElementById('donate-quota-btn').addEventListener('click', function(event){
    event.preventDefault()
    let quotaInput = getDonateInputById("input-donate-quota");
    let Amount = getDonateFieldById("my-money");
   if(quotaInput > 0 && quotaInput < Amount){

    
    document.getElementById("congration-quota").showModal();

    let quotaDonate = getDonateFieldById("quota-donate");
    let quotaDonation = quotaDonate + quotaInput;
    document.getElementById("quota-donate").innerText = quotaDonation;

   
    let quotaAmount = Amount-quotaInput;
    document.getElementById("my-money").innerText = quotaAmount;

    const div = document.createElement('div');
    div.classList.add("bg-black", "text-white");
    // div.classList.add("bg-yellow-200");

    div.innerHTML = `
    <h2 class=" text-xl font-semibold">Donation for Quota!</h2>
    <p>Your Donation Amount ${quotaInput} TK.</p>
    <h3>Your Corrent Balance ${quotaAmount} TK.</h3>`
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

