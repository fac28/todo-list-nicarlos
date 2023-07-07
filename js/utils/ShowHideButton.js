/* Function to hide and show dropdown menu buttons based on container */


export const showHideButton = (target, destinationID) => {
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
