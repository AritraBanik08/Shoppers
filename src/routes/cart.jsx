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
              <strong class="text-black">Cart</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <form class="col-md-12" method="post">
              <div class="site-blocks-table">
                <table class="table-bordered table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-total">Total</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="product-thumbnail">
                        <img
                          src="images/cloth_1.jpg"
                          alt="Image"
                          class="img-fluid"
                        />
                      </td>
                      <td class="product-name">
                        <h2 class="h5 text-black">Top Up T-Shirt</h2>
                      </td>
                      <td>$49.00</td>
                      <td>
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
                      </td>
                      <td>$49.00</td>
                      <td>
                        <a href="#" class="btn btn-primary btn-sm">
                          X
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="product-thumbnail">
                        <img
                          src="images/cloth_2.jpg"
                          alt="Image"
                          class="img-fluid"
                        />
                      </td>
                      <td class="product-name">
                        <h2 class="h5 text-black">Polo Shirt</h2>
                      </td>
                      <td>$49.00</td>
                      <td>
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
                      </td>
                      <td>$49.00</td>
                      <td>
                        <a href="#" class="btn btn-primary btn-sm">
                          X
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-6 mb-md-0 mb-3">
                  <button class="btn btn-primary btn-sm btn-block">
                    Update Cart
                  </button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-outline-primary btn-sm btn-block">
                    Continue Shopping
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label class="h4 text-black" for="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div class="col-md-8 mb-md-0 mb-3">
                  <input
                    type="text"
                    class="form-control py-3"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary btn-sm">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 pl-5">
              <div class="row justify-content-end">
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-12 border-bottom mb-5 text-right">
                      <h3 class="h4 text-uppercase text-black">Cart Totals</h3>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <span class="text-black">Subtotal</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-black">$230.00</strong>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <span class="text-black">Total</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-black">$230.00</strong>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary btn-lg btn-block py-3"
                        onclick="window.location='checkout.html'"
                      >
                        Proceed To Checkout
                      </button>
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
