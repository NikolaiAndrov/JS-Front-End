function attachEventsListeners() {
    
    let convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", convert);

    function convert() {
        
        let distances = {
            'km': 1000,
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'mi': 1609.34,
            'yrd': 0.9144,
            'ft': 0.3048,
            'in': 0.0254
        }

        let inputDistance = document.getElementById("inputDistance").value;

        let from = document.querySelector("#inputUnits").value;
        let to = document.querySelector("#outputUnits").value;
        debugger;
        let result = inputDistance * distances[from] / distances[to];
        
        let outputDistance = document.getElementById("outputDistance");
        outputDistance.value = result;
    }
}