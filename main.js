

const AdminFee = 50.00;
const Ticket_Price = 250.00;
function calculate(){


let qty = document.getElementById("qty").value;
let subtotal = qty * Ticket_Price;
let total = subtotal + AdminFee;

document.getElementById("subtotal").value = subtotal.toFixed(2);
document.getElementById("total").value = total.toFixed(2);

}