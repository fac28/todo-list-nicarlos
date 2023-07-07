/*------------------------------------*\
  Drag and Drop functions
\*------------------------------------*/

function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  console.log(dropzone.id);

  dropzone.appendChild(draggableElement);
  changeItemColour(draggableElement, dropzone.id);
  showHideButton(draggableElement, dropzone.id);

}



const changeItemColour = (target, destinationID) => {
  
  const listContent = target.querySelector('.list-content');

  if (destinationID === 'background') {
    listContent.style.background = 'var(--blue)';
  }

  if (destinationID === 'progress') {
    listContent.style.background = 'var(--green)';
  }


  if (destinationID === 'complete') {
    listContent.style.background = 'var(--pink)';
  }

}

const showHideButton = (target, destinationID) => {
  const buttonContainer = target.parentNode;
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
