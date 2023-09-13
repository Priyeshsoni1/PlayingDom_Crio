// console.log("Hello, from JS!");
// let innerText=document.querySelector("h1").textContent
// console.log(innerText)
// let practice=document.getElementsByTagName("h1")[0].innerText
// console.log(practice);
// document.getElementsByTagName("h1")[0].innerText="Practicing DOM Manipulation"

//--------------------------------------------------------------------------------------------------
// Creating new objects
// You updated the text of an HTML element in the previous milestone. Let’s look at how to create new ones now.


// The document.createElement() method can be used for creating a new element node

// The append() or appendChild() methods on an element node can be used to add a new child element to it
//-------------------------------------------------------------------------------------------------
// const pElement=document.createElement("h3")
// pElement.innerText="innerText property refers to the text inside an element";
// const divElement=document.getElementById("facts-list");
// console.log(divElement);
// divElement.appendChild(pElement);

//-------------------------------------------------------------------------------------------------

// function addNewFact(factText){
//     const pElement=document.createElement("h3");
//     console.log(pElement.innerText)
//     pElement.innerText=factText;
//     console.log(pElement.innerText)
//     const divElement=document.getElementById("facts-list");
//     console.log(divElement);
//     divElement.appendChild(pElement);
//     console.log(divElement)
// }
// addNewFact("innerText property refers to the text inside an element")
// addNewFact("append() or appendChild() methods can add a new child element")

//-------------------------------------------------------------------------------------------------

// const divElement=document.getElementById("facts-list");
// console.log(divElement.innerHTML)
//    divElement.innerHTML=
// "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>"
   

//-------------------------------------------------------------------------------------------------

// const tableElement=document.getElementById("table-div")
// tableElement.innerHTML=`<table border="1" width="400px">
// <thead>
//     <tr>
//         <td>Id</td>
//         <td>Name</td>
//     </tr>
// </thead>
// <tbody>

//     <tr>
//         <td>
//             1
//         </td>
//         <td>
//         Ramesh
//         </td>
//     </tr>
// </tbody>


// </table>`




// function loadTable() {

//     // Create <table> element with styles
  
//     let table = document.createElement("table");
  
  
//     table.setAttribute("border", "solid");
  
//     table.setAttribute("width", "400px");
  
  
//     // Create header row and append it to the <table> element
  
//     let thead = document.createElement("thead");
  
//     thead.innerHTML = `
  
//       <tr>
  
//           <th>Id</th>
  
//           <th>Name</th>
  
//       </tr>
  
//     `;
  
//     table.append(thead);
  
  
//     // Create body element
  
//     let tbody = document.createElement("tbody");
  
  
//     // Create a table row and append it to the body
  
//     let tRow = document.createElement("tr");
  
  
//     tRow.innerHTML = `
  
//       <td>1</td>
  
//       <td>Rajesh</td>
  
//     `;
  
  
//     // Append <tr> element to <tbody>
  
//     tbody.appendChild(tRow);
  
  
//     // Append <tbody> element to <table>
  
//     table.appendChild(tbody);
  
  
//     // Set newly created <table> element inside the div container
  
//     document.getElementById("table-div").append(table);
  
//   }
  
  

  
// loadTable()

function getStyleTable(){
    let table = document.createElement("table");
  
      table.setAttribute("border", "solid");
      table.setAttribute("width", "400px");
      return table;
}

const getTableHeader=()=>{
    let thead = document.createElement("thead");
  
    thead.innerHTML = `
  
      <tr>
  
          <th>Id</th>
  
          <th>Name</th>
  
      </tr>
      `
      return thead
}


const getStudentTableRow=(id,name)=>{
    let tbody=document.createElement("tbody");
    tbody.innerHTML=`<tr><th>${id}</th> <th>${name}</th></tr>`
    return tbody
}




// function loadTableRefactored(){

// let table=getStyleTable();
// let tableHeader=getTableHeader();

// table.appendChild(tableHeader)


// let tableBody=getStudentTableRow("1","Ramesh")



// table.appendChild(tableBody)
// document.getElementById("table-div").append(table)


// }


// loadTableRefactored()

function loadTablefromJson()
{
    let table=getStyleTable();
let tableHeader=getTableHeader();

table.appendChild(tableHeader)

for (let i=0;i<students.length;i++)
{
    let student=students[i]
    let tableBody=getStudentTableRow(student.id,student.name)
 table.appendChild(tableBody)
 document.getElementById("table-div").append(table)
}

}
// loadTablefromJson()

let showTableButton=document.querySelector('button');
showTableButton.addEventListener('click',()=>{loadTablefromJson()})

let nameInput=document.querySelector("input")
nameInput.addEventListener("input",(event)=>{
    let inputText=event.target.value;
    document.querySelector("#name-display").innerText=inputText;


})