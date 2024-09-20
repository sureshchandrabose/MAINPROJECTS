// Get the form and table body elements
const form = document.getElementById('loginportol');
const tableBody = document.querySelector('#data1 tbody');

//event for submit button
form.addEventListener('submit', function (event) {
event.preventDefault();

// Get form data
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const mobile = document.getElementById('mobile').value;
const age = document.getElementById('age').value;

// Create a new row in the table
const row = document.createElement('tr');
row.innerHTML = `
<td>${name}</td>
<td>${email}</td>
<td>${mobile}</td>
<td>${age}</td>
<td>
    <button onclick="deleteRow(this)" id="del">Delete</button>
    <button onclick="editRow(this)"id="edi">Edit</button>    
</td>
`;

// Append the new row to the table body
tableBody.appendChild(row);

// Clear form fields
form.reset();
});

// Function to delete a row
function deleteRow(button) {
const row = button.parentElement.parentElement;
tableBody.removeChild(row);
}

// Function to edit a row
function editRow(button) {
const row = button.parentElement.parentElement;
const cells = row.querySelectorAll('td');

   // Fill the current row data to the form
document.getElementById('name').value = cells[0].innerText;
document.getElementById('email').value = cells[1].innerText;
document.getElementById('mobile').value = cells[2].innerText;
document.getElementById('age').value = cells[3].innerText;

   // Remove the edited row from the table
tableBody.removeChild(row);
}


