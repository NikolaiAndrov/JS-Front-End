function generateReport() {
    let personObject = {};
    let allPeople = [];
    let columnSetNumber = [];

    let columnsAll = document.querySelectorAll("thead tr th input");
   
    for (let i = 0; i < columnsAll.length; i++) {
        
        if (columnsAll[i].checked) {
            columnSetNumber.push(i);
        }
    }

    let columnTitles = document.querySelectorAll("thead tr")[0].getElementsByTagName("th");
    let rowsCount = document.querySelectorAll("tbody tr").length;

    for (let row = 0; row < rowsCount; row++) {

        for (const element of columnSetNumber) {
            let key = columnTitles[element].textContent.trim().toLowerCase();
            let value = document.querySelectorAll("tbody tr")[row].getElementsByTagName("td")[element].textContent;
            personObject[key] = value;
        }

        allPeople.push(Object.assign(personObject));
        personObject = {};
    }

    document.getElementById("output").innerHTML = JSON.stringify(allPeople);
}