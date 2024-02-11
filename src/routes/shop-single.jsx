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
              <li class="active">
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
              <strong class="text-black">Tank Top T-Shirt</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="images/cloth_1.jpg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6">
              <h2 class="text-black">Tank Top T-Shirt</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, vitae, explicabo? Incidunt facere, natus soluta
                dolores iusto! Molestiae expedita veritatis nesciunt doloremque
                sint asperiores fuga voluptas, distinctio, aperiam, ratione
                dolore.
              </p>
              <p class="mb-4">
                Ex numquam veritatis debitis minima quo error quam eos dolorum
                quidem perferendis. Quos repellat dignissimos minus, eveniet nam
                voluptatibus molestias omnis reiciendis perspiciatis illum hic
                magni iste, velit aperiam quis.
              </p>
              <p>
                <strong class="text-primary h4">$50.00</strong>
              </p>
              <div class="d-flex mb-1">
                <label for="option-sm" class="d-flex mb-3 mr-3">
                  <span
                    class="d-inline-block mr-2"
                    style="top:-2px; position: relative;"
                  >
                    <input type="radio" id="option-sm" name="shop-sizes" />
                  </span>{" "}
                  <span class="d-inline-block text-black">Small</span>
                </label>
                <label for="option-md" class="d-flex mb-3 mr-3">
                  <span
                    class="d-inline-block mr-2"
                    style="top:-2px; position: relative;"
                  >
                    <input type="radio" id="option-md" name="shop-sizes" />
                  </span>{" "}
                  <span class="d-inline-block text-black">Medium</span>
                </label>
                <label for="option-lg" class="d-flex mb-3 mr-3">
                  <span
                    class="d-inline-block mr-2"
                    style="top:-2px; position: relative;"
                  >
                    <input type="radio" id="option-lg" name="shop-sizes" />
                  </span>{" "}
                  <span class="d-inline-block text-black">Large</span>
                </label>
                <label for="option-xl" class="d-flex mb-3 mr-3">
                  <span
                    class="d-inline-block mr-2"
                    style="top:-2px; position: relative;"
                  >
                    <input type="radio" id="option-xl" name="shop-sizes" />
                  </span>{" "}
                  <span class="d-inline-block text-black"> Extra Large</span>
                </label>
              </div>
              <div class="mb-5">
                <div class="input-group mb-3" style="max-width: 120px;">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary js-btn-minus"
                      type="button"
                    >
                      &minus;
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    value="1"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-primary js-btn-plus"
                      type="button"
                    >
                      &plus;
                    </button>
                  </div>
                </div>
              </div>
              <p>
                <a href="cart.html" class="buy-now btn btn-sm btn-primary">
                  Add To Cart
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section block-3 site-blocks-2 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 site-section-heading pt-4 text-center">
              <h2>Featured Products</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="nonloop-block-3 owl-carousel">
                <div class="item">
                  <div class="block-4 text-center">
                    <figure class="block-4-image">
                      <img
                        src="images/cloth_1.jpg"
                        alt="Image placeholder"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="block-4-text p-4">
                      <h3>
                        <a href="#">Tank Top</a>
                      </h3>
                      <p class="mb-0">Finding perfect t-shirt</p>
                      <p class="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="block-4 text-center">
                    <figure class="block-4-image">
                      <img
                        src="images/shoe_1.jpg"
                        alt="Image placeholder"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="block-4-text p-4">
                      <h3>
                        <a href="#">Corater</a>
                      </h3>
                      <p class="mb-0">Finding perfect products</p>
                      <p class="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="block-4 text-center">
                    <figure class="block-4-image">
                      <img
                        src="images/cloth_2.jpg"
                        alt="Image placeholder"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="block-4-text p-4">
                      <h3>
                        <a href="#">Polo Shirt</a>
                      </h3>
                      <p class="mb-0">Finding perfect products</p>
                      <p class="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="block-4 text-center">
                    <figure class="block-4-image">
                      <img
                        src="images/cloth_3.jpg"
                        alt="Image placeholder"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="block-4-text p-4">
                      <h3>
                        <a href="#">T-Shirt Mockup</a>
                      </h3>
                      <p class="mb-0">Finding perfect products</p>
                      <p class="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="block-4 text-center">
                    <figure class="block-4-image">
                      <img
                        src="images/shoe_1.jpg"
                        alt="Image placeholder"
                        class="img-fluid"
                      />
                    </figure>
                    <div class="block-4-text p-4">
                      <h3>
                        <a href="#">Corater</a>
                      </h3>
                      <p class="mb-0">Finding perfect products</p>
                      <p class="text-primary font-weight-bold">$50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
