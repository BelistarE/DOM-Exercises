console.log("linking (park)");

const p = document.createElement("p");

p.style.color = "red";

p.textContent = "Im a red p";

// Get the container element where the <p> will be injected
const container = document.getElementById('container');

// Append the <p> element to the container
container.appendChild(p);

const h3 = document.createElement("h3");

h3.style.color = "blue";

h3.textContent = "I'm a blue h3";

container.appendChild(h3);

//add new div with stuff inside it

const newDiv = document.createElement('div');
newDiv.classList.add('custom-div');

//creat h1
const newH1 = document.createElement('h1');
newH1.textContent = "Im in a div";

//new p element

const newP = document.createElement('p');
newP.textContent = "Me too";

//append both

newDiv.appendChild(newH1);
newDiv.appendChild(newP);

//get container where the new div will br added
container.appendChild(newDiv);
