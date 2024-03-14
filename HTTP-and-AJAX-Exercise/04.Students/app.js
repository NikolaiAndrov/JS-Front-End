async function attachEvents() {
  
    const url = "http://localhost:3030/jsonstore/collections/students";

    const tableBody = document.querySelector("#results tbody");
    const submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", addStudent);

    const response = await fetch(url);
    const students = await response.json();

    for (const student of Object.values(students)) {
        
        const row = document.createElement("tr");

        const thFirstName = document.createElement("td");
        thFirstName.textContent = student.firstName;
        row.appendChild(thFirstName);

        const thLastName = document.createElement("td");
        thLastName.textContent = student.lastName;
        row.appendChild(thLastName);

        const thFacultyNum = document.createElement("td");
        thFacultyNum.textContent = student.facultyNumber;
        row.appendChild(thFacultyNum);

        const thGrade = document.createElement("td");
        thGrade.textContent = student.grade;
        row.appendChild(thGrade);

        tableBody.appendChild(row);
    }

    async function addStudent() {
        
        const[firstName, lastName, facultyNumber, grade] = document.querySelectorAll("#inputs, input ");
        
        if (firstName.value && lastName.value && facultyNumber.value && grade.value) {
            
            const student = {
                firstName: firstName.value,
                lastName: lastName.value,
                facultyNumber: facultyNumber.value,
                grade: grade.value
            };

            await fetch(url, {
                method: "POST",
                body: JSON.stringify(student)
            });

            firstName.value = "";
            lastName.value = "";
            facultyNumber.value = "";
            grade.value = "";
        }
    }
}

attachEvents();