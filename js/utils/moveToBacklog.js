/* Function to move element to Backlog */

export const moveToBacklog = (target, classAdd, classRemove, content) => {
   const backlogConainer = document.getElementById('backlog');
 
   const elementToMove = target.parentNode.parentNode;
 
   backlogConainer.append(elementToMove);
 
   target.parentElement.classList.remove('show');
   target.textContent = content;
   target.classList.add(classAdd);
   target.classList.remove(classRemove);
}