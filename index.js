// Write your solution in this file!
// Define the initial employee object
let employee = {
    name: "William Ruto",
    streetAddress: "Sugoi 18",
  } 
  
  // Returns a new employee object with updated key and value
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Updates the original employee object with the given key and value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Returns a new employee object without the specified key
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Deletes the key from the original employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  