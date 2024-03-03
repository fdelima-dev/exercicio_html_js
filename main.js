const form = document.querySelector("form");
const result = document.querySelector("#resultado");
const error = document.querySelector(".error");

form.addEventListener("submit", function(e){
        const a = document.getElementById("a").value;
        const b = document.getElementById("b").value; 
        if (a < b){
            result.style.display = "block";
            error.style.display = "none";
        } else {
            result.style.display = "none";
            error.style.display = "block";
        }

    e.preventDefault();
})

