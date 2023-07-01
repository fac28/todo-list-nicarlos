const form = document.querySelector('form');
const input = document.querySelector('#add-task-input');
const backlog = document.querySelector('#backlog');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const div = document.createElement('div');
  div.id = 'task-one';
  div.textContent = input.value;
  backlog.append(div);
  form.reset();
})