/*------------------------------------*\
  Drag and Drop functions
\*------------------------------------*/

function onDragStart(event) {
  const id = event.target.id;
  event.dataTransfer.setData('text/plain', id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);
  changeItemColour(draggableElement, dropzone.id);
  showHideButton(draggableElement, dropzone.id);

}

// Change Colour for drag and drop

const changeItemColour = (target, destinationID) => {
  
  const listContent = target.querySelector('.list-content');

  if (destinationID === 'backlog') {
    listContent.style.background = 'var(--blue)';
  }

  if (destinationID === 'progress') {
    listContent.style.background = 'var(--green)';
  }


  if (destinationID === 'complete') {
    listContent.style.background = 'var(--pink)';
  }

}

// Update buttons for drag and drop

const showHideButton = (target, destinationID) => {
  const buttonContainer = target;
  const backlogBtn = buttonContainer.querySelector('.backlog-btn');
  const progressBtn = buttonContainer.querySelector('.progress-btn');
  const completeBtn = buttonContainer.querySelector('.complete-btn');

  if (destinationID === 'backlog') {
      backlogBtn.classList.remove('btn-show'); 
      backlogBtn.classList.add('btn-no-show');   
    } else {
      backlogBtn.classList.add('btn-show');
      backlogBtn.classList.remove('btn-no-show'); 

    }

    if (destinationID === 'progress') {
      progressBtn.classList.remove('btn-show');  
      progressBtn.classList.add('btn-no-show');   
  
    } else {
      progressBtn.classList.add('btn-show');
      progressBtn.classList.remove('btn-no-show');  

    }

    if (destinationID === 'complete') {
      completeBtn.classList.remove('btn-show');
      completeBtn.classList.add('btn-no-show');   
    
    } else {
      completeBtn.classList.add('btn-show');
      completeBtn.classList.remove('btn-no-show');   
    }
}

/*------------------------------------*\
  Event Listeners
\*------------------------------------*/

// const containers = document.querySelectorAll('.kanban-container');

// containers.forEach((el) => {
//   el.addEventListener('dragover', onDragOver);
//   el.addEventListener('drop', onDrop);
// })




const dragAndDropTest = () => {

  const input = document.querySelector('#add-task-input');
  const addTaskBtn = document.querySelector('#add-task-btn');

  input.value = 'Get a glass of water';
  addTaskBtn.click();

  const dragElement = document.querySelector('.list-item');
  console.log(dragElement);
  const dropElement = document.querySelector('#progress');

  const dragStartEvent = new Event('dragstart');
  const dropEvent = new Event('drop');

  dragElement.dispatchEvent(dragStartEvent);
  
  dropElement.dispatchEvent(dropEvent)
}

