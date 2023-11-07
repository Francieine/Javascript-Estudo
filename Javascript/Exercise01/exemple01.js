//made new object called "frm" and made reference to element "form" and "h3"

const frm = document.querySelector("form"); 
const answ = document.querySelector("h3");

//make the "listener" element, add when the submit botton will be click
frm.addEventListener("submit", (e) => {
    
    const name = frm.inName.value // get the name wrote in the form
    answ.innerText = `Helloooo ${name}` //show the ansewer 
    
    e.preventDefault() //This prevents the form from being submitted
});
