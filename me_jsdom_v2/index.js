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
const pElement=document.createElement("h3")
pElement.innerText="innerText property refers to the text inside an element";
const divElement=document.getElementById("facts-list");
console.log(divElement);
divElement.appendChild(pElement);

//-------------------------------------------------------------------------------------------------

function addNewFact(factText){
    const pElement=document.createElement("h3");
    console.log(pElement.innerText)
    pElement.innerText=factText;
    console.log(pElement.innerText)
    const divElement=document.getElementById("facts-list");
    console.log(divElement);
    divElement.appendChild(pElement);
    console.log(divElement)
}
addNewFact("innerText property refers to the text inside an element")
addNewFact("append() or appendChild() methods can add a new child element")