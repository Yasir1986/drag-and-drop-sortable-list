const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

// Store the listItems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople];

  // random sorting richestPeople array
  const shuffleArray = [...richestPeople].sort(() => 0.5 - Math.random());

  shuffleArray.forEach((person, index) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

    listItem.innerHTML = `
          <span class="number">${index + 1}</span>
          <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fa fa-grip-lines"></i>
          </div>
         `;

    listItems.push(listItem);

    draggable_list.appendChild(listItem);
  });

  addEventListener();
}

function dragStart() {
  // console.log("Event: ", "dragstart");
}

function dragEnter() {
  // console.log("Event: ", "dragenter");
}

function dragLeave() {
  // console.log("Event: ", "dragleave");
}

function dragOver() {
  // console.log("Event: ", "dragover");
}

function dragDrop() {
  // console.log("Event: ", "drag");
}

function addEventListener() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
