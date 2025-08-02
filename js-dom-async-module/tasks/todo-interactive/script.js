document.querySelectorAll('#todo-list li').forEach(item => {
  const checkbox = item.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', () => {
    item.classList.toggle('completed', checkbox.checked);
  });
});
