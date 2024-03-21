document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  

    if (username === '210305105458' && password === '1234') {
      alert('Login successful! Welcome, ' + username);
      
    } else {
      alert('Incorrect username or password. Please try again.');
      
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }
  });
  