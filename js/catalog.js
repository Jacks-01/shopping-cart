// ! global Product, Cart 

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  // Add an <option> tag inside the form's select for each product // DONE

  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const option = document.createElement('option')
    option.value = Product.allProducts[i].name;
    option.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading // DONE
  console.log(event)
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  cart.updateCounter();
  updateCartPreview(cart.items[cart.items.length -1]);

}

// Add the selected item and quantity to the cart // DONE
function addSelectedItemToCart() {
  
  // suss out the item picked from the select list // DONE
  const item = document.getElementById('items').value; // grabs item name from selected value in dropdown
  
  // get the quantity // DONE
  const quantity = document.getElementById('quantity').value; //grabs number from counter

  // using those, add one item to the Cart // DONE
  console.log({item}, {quantity});
  cart.addItem(item, quantity);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(item) {
  // TODO: Get the item and quantity from the form
  const product = item.product;
  const quantity = item.quantity;

  // TODO: Add a new element to the cartContents div with that information
  const cartOutput = document.getElementById('cartContents');
  const itemElement =document.createElement('div');
  itemElement.textContent = `${quantity} : ${product}`;
  cartOutput.appendChild(itemElement);
  console.log(item);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
