const overlay = document.querySelector(".back")
const bookingForm = document.querySelector("section.booking_form .contain")

//Buttons
const addButton = document.getElementById("add_button")
const closeButton = document.getElementById("close_button")
const cancelButton = document.getElementById("cancel_button")
const saveButton = document.getElementById("save_button")

//Select & inputs
const time = document.getElementById("time")
const closerName = document.getElementById("closer_name")
const customerName = document.getElementById("customer_name")
const customerEmail = document.getElementById("customer_email")
const hotelName = document.getElementById("hotel_name")
const hotelPrice = document.getElementById("hotel_price")

function close_form (){
    overlay.classList.remove("overlay")
    bookingForm.classList.remove("active")
}

addButton.addEventListener("click",()=>{
    overlay.classList.add("overlay")
    bookingForm.classList.add("active")
})

overlay.addEventListener("click",close_form)

closeButton.addEventListener("click",close_form)

cancelButton.addEventListener("click",close_form)

saveButton.addEventListener("click",()=>{
    
})