/* Toggle meatbal menu */

export const showHideMeatballMenu = (target) => {
  const menu = target.parentElement.nextElementSibling;
  menu.classList.toggle('show')
}
