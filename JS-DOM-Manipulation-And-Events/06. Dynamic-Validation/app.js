function validate() {

    let input = document.querySelector("#email");
    input.addEventListener("change", onChange);

    function onChange(e) {

        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/gm;

        if (!regex.test(input.value)) {

            input.classList.add("error");
        } else {

            input.classList.remove("error");
        }
    }
}