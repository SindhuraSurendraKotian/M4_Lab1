// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const table = document.getElementById('employees');
const form = document.getElementById('addForm');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = document.getElementById('empCount');

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var empID, name, extension, email, department;
    empID = $('id').value;
    name = $('name').value;
    extension = $('extension').value;
    email = $('email').value;
    department = $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    var row = table.insertRow(-1);

    var cell = row.insertCell(-1);
    const idText = document.createTextNode(empID);
    cell.appendChild(idText);

    cell = row.insertCell(-1);
    const nameText = document.createTextNode(name);
    cell.appendChild(nameText);

    cell = row.insertCell(-1);
    const extText = document.createTextNode(extension);
    cell.appendChild(extText);

    cell = row.insertCell(-1);
    const emailText = document.createTextNode(email);
    cell.appendChild(emailText);

    cell = row.insertCell(-1);
    const deptText = document.createTextNode(department);
    cell.appendChild(deptText);

    // CREATE THE DELETE BUTTON
    cell = row.insertCell(-1);
    const deleteButton = document.createElement("BUTTON");
    deleteButton.classList.add('btn-danger');
    deleteButton.textContent = 'X';
    cell.appendChild(deleteButton);

    // RESET THE FORM
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.reset();
    $('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count = table.querySelectorAll('tbody tr').length - 1;
    $('empCount').innerHTML = "( "+ count + " )";

});

// DELETE EMPLOYEE

table.addEventListener('click', (event) => {

    const confirmed = confirm('Are you sure you want to delete employee?');

    // Only delete employees when the delete button is clicked
    if (confirmed && event.target.classList.contains('btn-danger')) {
      
      const row = event.target.closest('tr');
      table.deleteRow(row.rowIndex);
      $('empCount').innerHTML = "( "+ (count - 1) + " )";
    }
  });