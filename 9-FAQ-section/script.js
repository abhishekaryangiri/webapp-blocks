
const askme = document.querySelectorAll(".ask");

askme.forEach((ask)=> {
ask.addEventListener("click", () =>{
    ask.classList.toggle("active");
    });
})