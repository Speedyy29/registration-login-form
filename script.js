
// Get form elements
const registerForm = document.getElementById('register');
const loginForm = document.getElementById('login');
const usernameInput = loginForm.querySelector('input[type="text"]');
const passwordInput = loginForm.querySelector('input[type="password"]');

// Login button
const loginBtn = document.getElementById('loginBtn');

// Validate login form 
function validateLoginForm() {

  // Get input values
  const username = usernameInput.value;
  const password = passwordInput.value;  

  if (!usernameRegex.test(username)) {
    alert('Please enter a valid email address.');
    return;
  }

  if(password.length<6) {
    alert('Password must atleast contain 6 letters');  
    return; 
  }

  // If valid, submit form
  loginForm.submit();
}

  // Attach validation on click
  loginBtn.addEventListener('click', validateLoginForm);

// Register form validation 
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values  
  const firstName = registerForm.querySelector('input[type="text"]').value;
  const lastName = registerForm.querySelectorAll('input[type="text"]')[1].value; 
  const email = registerForm.querySelectorAll('input[type="text"]')[2].value;
  const password = registerForm.querySelector('input[type="password"]').value;

  // Validate
  if(!firstName) {
    alert('Please enter first name');
    return;
  }

  if(!lastName) {
    alert('Please enter last name');
    return; 
  }

  if(!email) {
    alert('Please enter email');
    return;
  }

  if(!password) {
    alert('Please enter password with 6 characters');  
    return;
  }

  // If valid, submit form  
  registerForm.submit();
});