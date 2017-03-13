//Access new-item button. 
var btn = document.querySelector("button");
//Access unordered list.
var list = document.getElementById("grocerylist");
//Declare variable list-item.
//
var li;
//Start function removeItem (use event object to find out which item is clicked).
//
//    Remove clicked item from unordered list. 
function removeItem(ev) {
	"use strict";
	list.removeChild(ev.target);
}
// 
//End function removeItem.
//
//
//
//Start function addItem.
function addItem() {

	"use strict";
	//    Create list item and store output in a variable.
	li = document.createElement("li");
	// Use innerHTML on created list item and assign it with user input 
	//  from prompt("Enter a new item for to-do list:").
	li.innerHTML = prompt("Enter a new item for to-do list:");
	//    If list item has a content:   
	if (li !== "") {
		//	Append list item to unordered list.
		list.appendChild(li);
		// Add event listener to list item to listen for click event - event         
		// handler will be removeItem function. */ 
		li.addEventListener("click", removeItem, false);
	}
}
//
//        
//       
//    
//    End if.   
//
//End function addItem.
//
//
//
//Add event listener to button to listen for click event - event handler will be 
//   
//addItem function.

btn.addEventListener("click", addItem, false);

