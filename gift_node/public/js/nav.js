const createNav = () => {
    let nav = document.querySelector('.navbar')
    nav.innerHTML = `
        <div class="nav">
            <h1 class="brand-logo">Enamorada</h1>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-area" placeholder="Search brand, product, combination">
                    <button class="search-button">Search</button>
                    <a href="#"><img src="../images/user.png" alt="User"></a>
                    <a href="#"><img src="../images/cart.png" alt="Cart"></a>
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">Family</a></li>
            <li class="link-item"><a href="#" class="link">Accessories</a></li>
        </ul>
    `
}

createNav()