function attachGradientEvents() {
    let gradient = document.querySelector("#gradient");
    let result = document.querySelector("#result");

    gradient.addEventListener("mousemove", move);
    gradient.addEventListener("mouseout", out);

    function move(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = power + "%";
    }

    function out(e) {
        result.textContent = "";
    }
}