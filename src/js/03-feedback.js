
import throttle from 'lodash.throttle';

function saveFormDataToLocalStorage() {
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');
  
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormDataFromLocalStorage() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  
  const emailInput = document.querySelector('input[name="email"]').value;
  const messageTextarea = document.querySelector('textarea[name="message"]').value;
  
  console.log({Email: emailInput, messageTextarea});

  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
}
document.addEventListener('DOMContentLoaded', () => {
  loadFormDataFromLocalStorage();
  
  const form = document.querySelector('.feedback-form');
  const saveFormDataThrottled = throttle(saveFormDataToLocalStorage, 500);
  
  form.addEventListener('input', saveFormDataThrottled);
  form.addEventListener('submit', handleSubmit);
});
