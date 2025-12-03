const vat_rate = 0.10;
let post_fee = 0;

const valueInput = document.getElementById("value")
const quantityInput = document.getElementById("quantity")
const calculateBtn = document.getElementById("calculate-btn")
const resetBtn = document.getElementById("reset-btn")


const subtotal = document.getElementById("subtotal");
const vat = document.getElementById("vatamo");
const postfee = document.getElementById("postfee")
const totalpay = document.getElementById("totalpay")

calculateBtn.addEventListener("click", () => {

    const value = parseFloat(valueInput.value);
    const quantity = parseInt(quantityInput.value);

    if(isNaN(value) || value < 5 || value > 200){
        alert("Enter a valid gift value");
        return;
    };

    if(isNaN(quantity) || quantity < 1 || quantity > 20){

        alert("Enter a valid quantity");
        return;
    };

    const deliopt = document.querySelector('input[name="delivery"]:checked');   
    if(!deliopt) {
        alert("Please choose a delivery option");
        return;
    }

    if(deliopt.value === "physical") {
        post_fee = 3;
    }
    else{
        post_fee = 0;
    }

    const subtotalcal = value * quantity;
    const vatcal = subtotalcal * (vat_rate / (1 + vat_rate));
    const netSubtotal = subtotalcal - vatcal;
    const totalcal = netSubtotal + vatcal + post_fee;

    subtotal.textContent = `£${netSubtotal.toFixed(2)}`;
    vat.textContent = `£${vatcal.toFixed(2)}`;
    postfee.textContent = `£${post_fee.toFixed(2)}`;
    totalpay.textContent = `£${totalcal.toFixed(2)}`;


})

resetBtn.addEventListener("click", () => {

    valueInput.value = "";
    quantityInput.value = "";
    document.querySelectorAll("input[name='delivery']").forEach(r => r.checked = false);

    subtotal.textContent = "£0.00";
    vat.textContent = "£0.00";
    postfee.textContent = "£0.00";
    totalpay.textContent = "£0.00";

})




