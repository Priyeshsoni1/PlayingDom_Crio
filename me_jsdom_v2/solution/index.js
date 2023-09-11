// console.log(students);

/* Milestone 7 */

let showTableButton = document.querySelector("button");
showTableButton.addEventListener("click", function () {
  loadTableFromJson();
});

let nameInput = document.querySelector("input");
nameInput.addEventListener("input", function (event) {
  let inputText = event.target.value;

  let nameDisplayDiv = document.querySelector("#name-display");
  nameDisplayDiv.innerText = inputText;
});


/* Milestone 6 */

function loadTableFromJson() {
  // Create <table> element with styles
  let table = getStyledTable();

  // Create table header
  let thead = getTableHeader();
  table.append(thead);

  // Create body element
  let tbody = document.createElement("tbody");

  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];

    // Create a table row and append it to the body
    let tRow = getStudentTableRow(currentStudent.id, currentStudent.name);

    // Append <tr> element to <tbody>
    tbody.appendChild(tRow);
  }

  // Append <tbody> element to <table>
  table.appendChild(tbody);

  // Set newly created <table> element inside the div container
  document.getElementById("table-div").append(table);
}

// loadTableFromJson();


/* Milestone 5 */

function loadTableRefactored() {
  // Create <table> element with styles
  let table = getStyledTable();

  // Create table header
  let thead = getTableHeader();
  table.append(thead);

  // Create body element
  let tbody = document.createElement("tbody");

  // Create a table row and append it to the body
  let tRow = getStudentTableRow("1", "Ramesh");

  // Append <tr> element to <tbody>
  tbody.appendChild(tRow);

  // Append <tbody> element to <table>
  table.appendChild(tbody);

  // Set newly created <table> element inside the div container
  document.getElementById("table-div").append(table);
}

// loadTableRefactored();

function getStyledTable() {
  let table = document.createElement("table");

  table.setAttribute("border", "solid");
  table.setAttribute("width", "400px");

  return table;
}

function getTableHeader() {
  let thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
        <th>Id</th>
        <th>Name</th>
    </tr>
  `;
  return thead;
}

function getStudentTableRowAlternate(id, name) {
  let tRow = document.createElement("tr");

  let idColumnElement = document.createElement("td");
  idColumnElement.innerText = id;

  let nameColumnElement = document.createElement("td");
  nameColumnElement.innerText = name;

  // Append the columns to the <tr> element
  tRow.appendChild(idColumnElement);
  tRow.appendChild(nameColumnElement);

  return tRow;
}

function getStudentTableRow(id, name) {
  let tRow = document.createElement("tr");

  tRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
  `;

  return tRow;
}


/* Milestone 4 */

function loadTable() {
  // Create <table> element with styles
  let table = document.createElement("table");

  table.setAttribute("border", "solid");
  table.setAttribute("width", "400px");

  // Create header row and append it to the <table> element
  let thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
        <th>Id</th>
        <th>Name</th>
    </tr>
  `;
  table.append(thead);

  // Create body element
  let tbody = document.createElement("tbody");

  // Create a table row and append it to the body
  let tRow = document.createElement("tr");

  tRow.innerHTML = `
    <td>1</td>
    <td>Rajesh</td>
  `;

  // Append <tr> element to <tbody>
  tbody.appendChild(tRow);

  // Append <tbody> element to <table>
  table.appendChild(tbody);

  // Set newly created <table> element inside the div container
  document.getElementById("table-div").append(table);
}

// loadTable();

// document.getElementById("table-div").innerHTML = `
//     <table border="1" style="width:400px">
//         <thead>
//             <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>1</td>
//             <td>Ramesh</td>
//             </tr>
//         </tbody>
//     </table>
// `;


/* Milestone 3 */

// let factsListDiv = document.getElementById("facts-list");

// factsListDiv.innerText =
//   "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>";

// factsListDiv.innerHTML =
//   "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>";

// // Method 1
// factsListDiv.innerHTML =
//   "<p>Browser creates DOM from HTML content</p>" +
//   "<p>Developers can access the DOM using the DOM APIs</p>" +
//   "<p>innerHTML property refers to the HTML inside an element</p>";

// // Method 2
// factsListDiv.innerHTML = `
//     <p>Browser creates DOM from HTML content</p>
//     <p>Developers can access the DOM using the DOM APIs</p>
//     <p>innerHTML property refers to the HTML inside an element</p>
//     `;


// // Wrap the logic from previous task in a function
// function addNewFact(factText) {
//   const pElement = document.createElement("p");
//   pElement.innerText = factText;

//   const divElement = document.getElementById("facts-list");
//   divElement.appendChild(pElement);
// }

// // Execute the function with the 1st fact
// addNewFact("innerText property refers to the text inside an element");
// // Execute the function with the 2nd fact
// addNewFact("append() or appendChild() methods can add a new child element");

// // Add 1st fact
// const pElement = document.createElement("p");
// pElement.innerText = "innerHTML property refers to the HTML inside an element";

// const divElement = document.getElementById("facts-list");
// divElement.appendChild(pElement);

// // Add 2nd fact
// const pElement = document.createElement("p");
// pElement.innerText = "append() or appendChild() methods can add a new child element";

// const divElement = document.getElementById("facts-list");
// divElement.appendChild(pElement);


/* Milestone 2 */

// // Create a new element node: <p></p>
// const pElement = document.createElement("p");

// // Set text inside it - <p>innerText property refers to the text inside an element</p>
// pElement.innerText = "innerText property refers to the text inside an element";

// // Get the object referring to the div element on the page
// const divElement = document.getElementById("facts-list");

// // Add the newly created <p> element as child of the div element
// divElement.appendChild(pElement);


/* Milestone 1 */

// let h1Elements = document.getElementsByTagName("h1");
// console.log(h1Elements);

// let firsth1Element = h1Elements[0];
// console.log(firsth1Element);

// console.log(firsth1Element.innerText);

// firsth1Element.innerText = "Practicing DOM Manipulation!";
