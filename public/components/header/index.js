const header = document.createElement('header');

header.innerHTML = `
  <div class='header-container'> 
    <nav>
      <h1>Chop Suey!</h1>
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