/* Function to move list item to progress container */

/**
 * 
 * @param {} target 
 * @param {string} classAdd 
 * @param {string} classRemove 
 * @param {string} content
 */


export const moveToProgress = (target, classAdd, classRemove, content) => {
  const prgressConainer = document.getElementById('progress');

  const elementToMove = target.parentNode.parentNode;

  prgressConainer.append(elementToMove);

  target.parentElement.classList.remove('show');
  target.textContent = content;
  target.classList.add(classAdd);
  target.classList.remove(classRemove);
}