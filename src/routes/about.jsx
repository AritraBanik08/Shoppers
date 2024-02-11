import { Title } from "@solidjs/meta";
export default function Home() {
  return (
    <main>
      {/* <div class="site-wrap"> */}
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
              <li class="has-children active">
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
              <a href="/">Home</a> <span class="mx-2 mb-0">/</span>{" "}
              <strong class="text-black">About</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section border-bottom" data-aos="fade">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6">
              <div class="block-16">
                <figure>
                  <img
                    src="images/blog_1.jpg"
                    alt="Image placeholder"
                    class="img-fluid rounded"
                  />
                  <a
                    href="https://vimeo.com/channels/staffpicks/93951774"
                    class="play-button popup-vimeo"
                  >
                    <span class="ion-md-play"></span>
                  </a>
                </figure>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
              <div class="site-section-heading mb-4 pt-3">
                <h2 class="text-black">How We Started</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repellat, dicta at laboriosam, nemo exercitationem itaque
                eveniet architecto cumque, deleniti commodi molestias
                repellendus quos sequi hic fugiat asperiores illum. Atque, in,
                fuga excepturi corrupti error corporis aliquam unde nostrum
                quas.
              </p>
              <p>
                Accusantium dolor ratione maiores est deleniti nihil?
                Dignissimos est, sunt nulla illum autem in, quibusdam cumque
                recusandae, laudantium minima repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section border-bottom" data-aos="fade">
        <div class="container">
          <div class="row justify-content-center mb-5">
            <div class="col-md-7 site-section-heading pt-4 text-center">
              <h2>The Team</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img
                      src="images/person_1.jpg"
                      alt="Image placeholder"
                      class="mb-4"
                    />
                    <h3 class="block-38-heading h4">Elizabeth Graham</h3>
                    <p class="block-38-subheading">CEO/Co-Founder</p>
                  </div>
                  <div class="block-38-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae aut minima nihil sit distinctio recusandae doloribus
                      ut fugit officia voluptate soluta.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img
                      src="images/person_2.jpg"
                      alt="Image placeholder"
                      class="mb-4"
                    />
                    <h3 class="block-38-heading h4">Jennifer Greive</h3>
                    <p class="block-38-subheading">Co-Founder</p>
                  </div>
                  <div class="block-38-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae aut minima nihil sit distinctio recusandae doloribus
                      ut fugit officia voluptate soluta.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img
                      src="images/person_3.jpg"
                      alt="Image placeholder"
                      class="mb-4"
                    />
                    <h3 class="block-38-heading h4">Patrick Marx</h3>
                    <p class="block-38-subheading">Marketing</p>
                  </div>
                  <div class="block-38-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae aut minima nihil sit distinctio recusandae doloribus
                      ut fugit officia voluptate soluta.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img
                      src="images/person_4.jpg"
                      alt="Image placeholder"
                      class="mb-4"
                    />
                    <h3 class="block-38-heading h4">Mike Coolbert</h3>
                    <p class="block-38-subheading">Sales Manager</p>
                  </div>
                  <div class="block-38-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae aut minima nihil sit distinctio recusandae doloribus
                      ut fugit officia voluptate soluta.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="site-section site-section-sm site-blocks-1 border-0"
        data-aos="fade"
      >
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
    </main>
  );
}
