import logo from '../../image/toko-logo.png';
import './detailComponent/DetailProfile';
import './detailComponent/About';
import './Button';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .wrapper {
      padding: 0.2rem 0.4rem;
      background-color: #E4DCEA;
    }

    .container {
      max-width: 1267px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all .3s;
    }

    .header__brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all .3s; 
      cursor: pointer;
    }

    .header__name {
      font-family: 'Satoshi', sans-serif;
      font-size: 0.96rem;
      font-weight: 600;
      color: #717171;
    }

    nav {
      width: 25%;
      margin: 0;
    }
    
    .nav__group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      padding: 0;
    }

    .nav__item {
      font-family: 'Satoshi', sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      color: #717171;
      text-decoration: none;
      transition: color .3s;
    }

    .nav__item:hover {
      color: #322d69;
    }

    .header__name-brand {
      font-family: 'General Sans', sans-serif;
      font-size: 1.1em;
      font-weight: bold;
      font-style: italic;  
      color: rgb(5, 3, 3);
      margin-left: 0.4em;
    }

    .header__logo {
      width: 45px;
    }

    .header__info {
      width: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header__icons {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

   
    @media (min-width: 1200px) {
      .scale-up:hover {
        transform:  scale(1.5) translateY(10px);
        position: absolute;
        z-index: 10;
        padding: 0.2em;
        background-color: white;
        border: solid 3px #1d1b43;
        box-shadow: 
          5px 5px 0 -4px white,
          4px 4px #1d1b43;
        border-radius: 0.6rem;
      }  
    }

    @media (max-width: 1200px) {
      .container {
        max-width: 967px;
      }

      nav {
        width: 35%;
      }
    }

    @media (max-width: 768px) {
      .container {
        position: relative;
        width: 100%;
      }

      nav {
        width: 50%;
      }

      .header__info {
        width: 90%;
        padding: 0.6em;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        left: 0;
        z-index: 100;
        margin: 0 auto;
        background-color: #E4DCEA;
        border-radius: 0.6rem;
        border: 3px solid #322d69;
        transition: all .3s ease-in;
        transform: translateY(10px);
      }

      .hidden {
        opacity: 0;
        display: none;
        transform: translateY(0);
      }

      .column-respons {
        flex-direction: column;
      }

      .header__brand {
        gap: 0.9rem;
      }
      .header__name-brand {
        margin-left: 0;
      }  

      .menu-icon {
        cursor: pointer;
      }
    }

    @media (max-width: 568px) {
      nav {
        width: 95%;
      }
      .nav__group {
        justify-content: space-around;
      }
    }
    
    @media (min-width: 780px) {
      .menu-icon { 
        opacity: 0;
        visibility: hidden;
      }
    }
  </style>

  <header>
    <div class="wrapper">
      <div class="container column-respons">
        <div class="header__brand">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #717171;transform: ;msFilter:;"><path d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"></path><circle cx="11.75" cy="18" r="1"></circle></svg>
          <h3 class="header__name">Download Tokopunyaku App Here</h3>
        </div>

        <nav class="nav">
          <ul class="nav__group">
            <li class="nav__list"><a href="#home" class="nav__item">Home</a></li>
            <li class="nav__list"><a href="#contact-me" class="nav__item">Contact us</a></li>
            <li class="nav__list"><detail-about color_button='#717171'><detail-about></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="wrapper">
      <div class="container">
        <div class="header__brand scale-up">
            <img class="header__logo" src="${logo}" alt="alt" />
            <h1 class="header__name-brand">Tokopunyaku</h1>
        </div>

        <div className="menu">
          <box-icon name='menu' class="menu-icon"></box-icon>
        </div>

        <div class="header__info hidden">
          <div class="header__icons">
          <box-icon name='message-square-dots' ></box-icon>
            <box-icon name='shopping-bag' ></box-icon>
            <box-icon name='bell' ></box-icon>
            <box-icon name='headphone' ></box-icon>
          </div>

          <detail-profile></detail-profile>

          <button-ui name_button='Become Merchant' color_button='#1d1b43'></button-ui>
        </div>
      </div>
    </div>
  </header>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.menu-icon').addEventListener('click', () => {
      this.clickEvent();
    });
  }

  clickEvent() {
    const headerInfo = this.shadowRoot.querySelector('.header__info');

    if (headerInfo.classList.contains('hidden')) headerInfo.classList.remove('hidden');
    else headerInfo.classList.add('hidden');
  }
}

customElements.define('navbar-ui', Navbar);
