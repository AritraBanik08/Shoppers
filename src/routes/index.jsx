import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
export default function Home() {
  return (
    <main>
      {/* <div class="site-wrap">
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
                <li class="has-children active">
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
        </header> */}

        <div
          class="site-blocks-cover"
          style="background-image: url(images/hero_1.jpg);"
          data-aos="fade"
        >
          <div class="container">
            <div class="row align-items-start align-items-md-center justify-content-end">
              <div class="col-md-5 text-md-left pt-md-0 pt-5 text-center">
                <h1 class="mb-2">Finding Your Perfect Shoes</h1>
                <div class="intro-text text-md-left text-center">
                  <p class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.{" "}
                  </p>
                  <p>
                    <a href="#" class="btn btn-sm btn-primary">
                      Shop Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section site-section-sm site-blocks-1">
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 col-lg-4 d-lg-flex mb-lg-0 mb-4 pl-4"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div class="icon align-self-start mr-4">
                  <span class="icon-truck"></span>
                </div>
                <div class="text">
                  <h2 class="text-uppercase">Free Shipping</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-lg-flex mb-lg-0 mb-4 pl-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon align-self-start mr-4">
                  <span class="icon-refresh2"></span>
                </div>
                <div class="text">
                  <h2 class="text-uppercase">Free Returns</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-4 d-lg-flex mb-lg-0 mb-4 pl-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon align-self-start mr-4">
                  <span class="icon-help"></span>
                </div>
                <div class="text">
                  <h2 class="text-uppercase">Customer Support</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt
                    fringilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-section site-blocks-2">
          <div class="container">
            <div class="row">
              <div
                class="col-sm-6 col-md-6 col-lg-4 mb-lg-0 mb-4"
                data-aos="fade"
                data-aos-delay=""
              >
                <a class="block-2-item" href="#">
                  <figure class="image">
                    <img src="images/women.jpg" alt="" class="img-fluid" />
                  </figure>
                  <div class="text">
                    <span class="text-uppercase">Collections</span>
                    <h3>Women</h3>
                  </div>
                </a>
              </div>
              <div
                class="col-sm-6 col-md-6 col-lg-4 mb-lg-0 mb-5"
                data-aos="fade"
                data-aos-delay="100"
              >
                <a class="block-2-item" href="#">
                  <figure class="image">
                    <img src="images/children.jpg" alt="" class="img-fluid" />
                  </figure>
                  <div class="text">
                    <span class="text-uppercase">Collections</span>
                    <h3>Children</h3>
                  </div>
                </a>
              </div>
              <div
                class="col-sm-6 col-md-6 col-lg-4 mb-lg-0 mb-5"
                data-aos="fade"
                data-aos-delay="200"
              >
                <a class="block-2-item" href="#">
                  <figure class="image">
                    <img src="images/men.jpg" alt="" class="img-fluid" />
                  </figure>
                  <div class="text">
                    <span class="text-uppercase">Collections</span>
                    <h3>Men</h3>
                  </div>
                </a>
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

        <div class="site-section block-8">
          <div class="container">
            <div class="row justify-content-center  mb-5">
              <div>
                <div class="col-md-7 site-section-heading pt-4 text-center">
                  <h2>Big Sale!</h2>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-12 col-lg-7 mb-5">
                    <a href="#">
                      <img
                        src="images/blog_1.jpg"
                        alt="Image placeholder"
                        class="img-fluid rounded"
                      />
                    </a>
                  </div>
                  <div class="col-md-12 col-lg-5 pl-md-5 text-center">
                    <h2>
                      <a href="#">50% less in all items</a>
                    </h2>
                    <p class="post-meta mb-4">
                      By <a href="#">Carl Smith</a>{" "}
                      <span class="block-8-sep">&bullet;</span> September 3,
                      2018
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quisquam iste dolor accusantium facere corporis ipsum
                      animi deleniti fugiat. Ex, veniam?
                    </p>
                    <p>
                      <a href="#" class="btn btn-primary btn-sm">
                        Shop Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      <script src="/js/jquery-3.3.1.min.js"></script>
      <script src="/js/jquery-ui.js"></script>
      <script src="/js/popper.min.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/owl.carousel.min.js"></script>
      <script src="/js/jquery.magnific-popup.min.js"></script>
      <script src="/js/aos.js"></script>

      <script src="/js/main.js"></script>
    </main>
  );
}
