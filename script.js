const form = document.querySelector('.contact-form');
const submitMessage = document.createElement('p');
submitMessage.style.color = '#00FF00'; 

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const existingMessage = document.querySelector('#submitMessage');
  if (existingMessage) {
    existingMessage.remove();
  }

  submitMessage.textContent = "Submitted";
  submitMessage.id = 'submitMessage';
  document.querySelector('#submitMessage').appendChild(submitMessage);
  form.reset();
});
