import { createHandler, StartServer } from "@solidjs/start/server";
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <title>Shoppers &mdash; Colorlib e-Commerce Template</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Mukta:300,400,700"
          />
          <link rel="stylesheet" href="/fonts/icomoon/style.css" />

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/jquery-ui.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />

          <link rel="stylesheet" href="/css/aos.css" />

          <link rel="stylesheet" href="/css/style.css" />

          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
