console.log("testing, hello all!");

//other stuff that is not in the original assignment

function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

//Create three variables that hold references to the list 
//(<ul>), <input>, and <button> elements.

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button')

//Create a function that will run in response to the button being clicked.

button.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  
    //Inside the function body, start off by storing the current value of the 
    //input element in a variable.
    const myItem = input.value;
    //Next, empty the input element by setting its value to an empty string — ''.
    input.value = '';

    //Create three new elements — a list item (<li>), <span>, and <button>, 
    //and store them in variables.
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    button.style.backgroundColor = rndCol;
    //Append the span and the button as children of the list item.
    //Set the text content of the span to the input element value 
    //you saved earlier, and the text content of the button to 'Delete'.
    //Append the list item as a child of the list.
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    //Attach an event handler to the delete button so that, when clicked, 
    //it will delete the entire list item (<li>...</li>).
    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });
    //Finally, use the focus() method to focus the 
    //input element ready for entering the next shopping list item.
    input.focus();
  });






