let scrn = document.getElementById("scrn");
let buttons = document.querySelectorAll(".buttons");

for (items of buttons) {
    items.addEventListener("click", (e) => {
        let btnText = e.target.innerText;

        if (btnText == "C") {
            scrn.value = "";
        }
        else if (btnText == "c") {
            scrn.value = scrn.value.slice(0, -1);
        }
        else if (btnText == "X") {
            scrn.value += "*";
        }
        else if (btnText == "=") {
            scrn.value = eval(scrn.value);
        }
        else {
            scrn.value += btnText;
        }

    })
}


