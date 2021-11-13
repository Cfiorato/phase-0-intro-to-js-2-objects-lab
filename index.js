// Write your solution in this file!
const employee = {
    name: "bob", 
    streetAddress: "123 Street St", 
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};