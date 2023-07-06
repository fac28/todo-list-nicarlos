/* Toggle meatbal menu */

export const showHideMeatballMenu = (target) => {
  const menu = target.parentElement.nextElementSibling;
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';

  menu.setAttribute('aria-expanded', !isExpanded);
  menu.setAttribute('aria-hidden', isExpanded);

  menu.classList.toggle('show')

}
