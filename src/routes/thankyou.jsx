export default function Home() {
  return (
    <main>
      <header class="site-navbar" role="banner">
        <div class="site-navbar-top">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-6 col-md-4 order-md-1 site-search-icon order-2 text-left">
                <form action="" class="site-block-top-search">
                  <span class="icon icon-search2"></span>
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Search"
                  />
                </form>
              </div>

              <div class="col-12 mb-md-0 col-md-4 order-md-2 order-1 mb-3 text-center">
                <div class="site-logo">
                  <a href="index.html" class="js-logo-clone">
                    Shoppers
                  </a>
                </div>
              </div>

              <div class="col-6 col-md-4 order-md-3 order-3 text-right">
                <div class="site-top-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <span class="icon icon-person"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon icon-heart-o"></span>
                      </a>
                    </li>
                    <li>
                      <a href="cart.html" class="site-cart">
                        <span class="icon icon-shopping_cart"></span>
                        <span class="count">2</span>
                      </a>
                    </li>
                    <li class="d-inline-block d-md-none ml-md-0">
                      <a href="#" class="site-menu-toggle js-menu-toggle">
                        <span class="icon-menu"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          class="site-navigation text-md-center text-right"
          role="navigation"
        >
          <div class="container">
            <ul class="site-menu js-clone-nav d-none d-md-block">
              <li class="has-children">
                <a href="index.html">Home</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li>
                    <a href="#">Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                  <li class="has-children">
                    <a href="#">Sub Menu</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Menu One</a>
                      </li>
                      <li>
                        <a href="#">Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Menu Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="about.html">About</a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li>
                    <a href="#">Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
              <li>
                <a href="#">Catalogue</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>{" "}
              <strong class="text-black">Contact</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <span class="icon-check_circle display-3 text-success"></span>
              <h2 class="display-3 text-black">Thank you!</h2>
              <p class="lead mb-5">You order was successfuly completed.</p>
              <p>
                <a href="shop.html" class="btn btn-sm btn-primary">
                  Back to shop
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
