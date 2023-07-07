import { showHideButton } from "./ShowHideButton.js";
import { changeItemColour } from "./changeItemColour.js";

/* Function to move list item to progress container */


export const moveItem = (target, destinationID) => {
  const targetConainer = document.getElementById(destinationID);

  const elementToMove = target.closest('.list-item');

  targetConainer.append(elementToMove);

  target.parentElement.classList.remove('show');

  changeItemColour(target, destinationID);
  showHideButton(target, destinationID);
}
