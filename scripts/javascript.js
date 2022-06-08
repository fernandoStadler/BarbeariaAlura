let navigation = document.querySelector('header');
let footer = document.querySelector('footer');

function navMenu() {
    navigation.innerHTML = `
        <div class="container">
            <h1>
             <img src="assets/img/logo.png">
            </h1>
            <nav>
                <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="produtos.html">Produtos</a></li>
                <li><a href="contato.html">Contatos</a></li>
                </ul>
            </nav>
        </div>
    `
} navMenu();

function footerContent() {
    footer.innerHTML = `
        <img src="assets/img/logo-branco.png" alt="" srcset="">
        <p class="copyright">&copy;  Copyright Barbearia Alura - 2022</p>
    `
}footerContent();