import React from 'react';

import './app.scss';

import drivenLogoSrc from 'assets/img/driven-logo.png';

function App() {
  return (
    <div>

      <header>
        <div class="header-inner clearfix">
          <div className="header-info">

          </div>
          <div className="header-content">
            <div class="header-logo">
              <a href="http://driven.cx/"><img alt="logo" src={drivenLogoSrc} /></a>
            </div>
            <div>
              <div>
                <div class="header-search">
                  <div class="search">
                    <i class="material-icons">search</i>
                    <input type="search" name="search" placeholder="Search" />
                  </div>
                </div>
                <div>
                  <div>

                  </div>
                  <div>

                  </div>
                </div>
              </div>
              <div className="menu">
                <ul className="nav-list">
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                  <li>
                    <a href="#!">CATEGORIA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main role="main"></main>
    </div>
  );
}

export default App;
