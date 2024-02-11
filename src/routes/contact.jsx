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
                  <a href="/" class="js-logo-clone">
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
                      <a href="/cart" class="site-cart">
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
                <a href="/">Home</a>
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
                <a href="/about">About</a>
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
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="#">Catalogue</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li class="active">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <a href="/">Home</a> <span class="mx-2 mb-0">/</span>{" "}
              <strong class="text-black">Contact</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="h3 mb-3 text-black">Get In Touch</h2>
            </div>
            <div class="col-md-7">
              <form action="#" method="post">
                <div class="p-lg-5 border p-3">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="c_fname" class="text-black">
                        First Name <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_fname"
                        name="c_fname"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="c_lname" class="text-black">
                        Last Name <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_lname"
                        name="c_lname"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_email" class="text-black">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="c_email"
                        name="c_email"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_subject" class="text-black">
                        Subject{" "}
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="c_subject"
                        name="c_subject"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_message" class="text-black">
                        Message{" "}
                      </label>
                      <textarea
                        name="c_message"
                        id="c_message"
                        cols="30"
                        rows="7"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-lg-12">
                      <input
                        type="submit"
                        class="btn btn-primary btn-lg btn-block"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-5 ml-auto">
              <div class="mb-3 border p-4">
                <span class="d-block text-primary h6 text-uppercase">
                  New York
                </span>
                <p class="mb-0">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div class="mb-3 border p-4">
                <span class="d-block text-primary h6 text-uppercase">
                  London
                </span>
                <p class="mb-0">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div class="mb-3 border p-4">
                <span class="d-block text-primary h6 text-uppercase">
                  Canada
                </span>
                <p class="mb-0">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
