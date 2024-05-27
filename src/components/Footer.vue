<template>
    <footer>
      <div>
        <p>&copy; 2024 Reloved</p>
        <nav>
          <a href="#">Über uns</a>
          <a href="#">Kontakt</a>
          <a href="#">Datenschutz</a>
          <div class="social-icons">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style scoped>
  footer {
    background-color: #6eb0c2;
    color: black;
    padding: 5px;
    text-align: center;
    margin-top: 10px;
  }
  
  footer a {
    color: black;
    text-decoration: none;
  }
  
  footer a:hover {
    text-shadow: 2px 2px 4px rgba(129, 129, 129, 0.5);
  }
  
  footer .social-icons a {
    margin: 0 20px;
    color: #080808;
    font-size: 30px;
  }
  </style>
  