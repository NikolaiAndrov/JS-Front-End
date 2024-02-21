function printEmployeeInfo(inputEmployees) {
    let employees = [];

    for (const currentEmployee of inputEmployees) {
       let employee = {
            name: currentEmployee,
            personalNumber: currentEmployee.length
       }

       employees.push(employee);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}