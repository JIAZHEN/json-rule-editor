export const getRulesets = () =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => data.slice(0, 5));
