const header = document.createElement('header');

let logged = true;

if (logged) {
  header.innerHTML = 
  `
    <div class='header-container'>
      <nav>
        <img class="logo" src="/assets/chop-suey-logo.png" alt="logo da chop suey">
        <a href='/'>Início</a>
        <a href='/restaurants'>Restaurantes</a>
      </nav>
      <nav class='account'>
      <span>R$ 0,00</span>
      <a class='logout-btn' href='/login'>Logout</a>
      </nav>
    </div>
  `;
} else {
  header.innerHTML = 
  `
    <div class='header-container'>
      <nav>
        <img class='logo' src="/assets/chop-suey-logo.png" alt="logo da chop suey">
        <a class='delivery-btn' href='/delivery'>Entregador</a>
        <a class='restaurant-btn' href='/restaurant'>Restaurante</a>
      </nav>
      <nav class='account'>
        <a class='register-btn' href='/register'>Criar conta</a>
        <a class='login-btn' href='/login'>Login</a>
      </nav>
    </div>
  `;
}

document.body.prepend(header);

export default header;