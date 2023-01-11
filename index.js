const employee = {
    name: "Sam",
    streetAddress: "14641 450th AVE SE North Bend, WA 98045",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee, key}
    delete newEmployee.name;
    delete newEmployee.streetAddress;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}