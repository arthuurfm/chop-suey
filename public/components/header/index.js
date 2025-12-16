const header = document.createElement('header');

header.innerHTML = `
  <div class='header-container'> 
    <nav>
      <img class="logo" src="/assets/chop-suey-logo.png" alt="logo da chop suey">
      <a class='delivery-btn' href='/delivery'>Entregador</a>
      <a class='restaurant-btn' href='/restaurant'>Restaurante</a>
    </nav>
    <nav class='account'>
      <a class='register-btn' href='/register'>Criar conta</a>
      <a class='login-btn' href='/login'>Login</a>
    </nav>
  </div>
`;

export default header;