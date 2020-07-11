import React from "react";
/* import Headerhtml from "./header.html"; */
class Header extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <link rel="stylesheet" href="header.css"></link> */}
          {/* <!-- BOOTSTRAP - BOOTSWATCH THEME - CERULEAN --> */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css"
          ></link>
          <title>Document</title>
        </head>
        <body>
          <div>
            <header className="bk-header bk-header--red">
              <a href="" className="bk-header_logo">
                <img
                  src="https://static.burgerkingencasa.es/bkhomewebsite/images/logo.png"
                  alt=""
                />
              </a>
              <a href="" className="bk-header_hamb"></a>
              <nav class="bk-header_nav">
                <ul class="bk-header_list">
                  <li class="bk-header_item">
                    <a href="" class="bk-header_link">
                      inicio
                    </a>
                  </li>
                  <li class="bk-header_item">
                    <a href="" class="bk-header_link">
                      carta
                    </a>
                  </li>
                  <li class="bk-header_item">
                    <a href="" class="bk-header_link">
                      ofertas
                    </a>
                  </li>
                  <li class="bk-header_item">
                    <a href="" class="bk-header_link">
                      calidad
                    </a>
                  </li>
                  <li class="bk-header_item">
                    <a href="" class="bk-header_link">
                      bk para niños
                    </a>
                  </li>
                  <li class="bk-header_item">
                    <a href="" class="bk-header_link">
                      burger king
                    </a>
                    <div class="bk-header_submenu">
                      <div class="bk-header__submenu-list">
                        <ul className="bk-header__submenu-list">
                          <li className="bk-header__subitem">
                            <a href="" className="bk-header__sublink bk-header__sublink--red">
                              restaurante
                            </a>
                          </li>
                          <li className="bk-header__subitem">
                            <a href="" className="bk-header__sublink bk-header__sublink--red">
                              contactos
                            </a>
                          </li>
                          <li className="bk-header__subitem">
                            <a href="" className="bk-header__sublink">
                              plan de sostenibilidad
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </body>
      </html>
    );
  }
}
export default Header;
