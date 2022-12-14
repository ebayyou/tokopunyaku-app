class Category extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set searchKeyword(value) {
    this._searchKeyword = value;
    this.render()
  }

  get categoryElement() {
    return this.shadowRoot.querySelectorAll('.category__result');
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 967px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Satoshi', sans-serif;
          position: relative;
        }

        .search__category {
          margin: 80px;
          text-align: center;
        }
        
        .category__box {
          display: flex;
          flex-wrap: wrap;
          justify-content:center;
          align-items: center;
          gap: 1rem;
        }
        .category__result {
          font-size: 1rem;
          cursor: pointer;
          text-transform: capitalize;
        }
        .category__result:hover {
          color: #3770cd; 
        }

        .category__name {
          text-transform: capitalize;
        }
          
        @media (min-width: 768px) {
          .category__name {
            font-size: 2.4rem
          }
          .category__result {
            font-size: 1.15rem;
          }
        }

        @media (min-width: 1200px) {
          .category__box {
            gap: 1.7rem;
          }

          .category__result {
            font-size: 1.25rem;
          }
        }
      </style>

      <section class="search-category">
        <div class="container">
          <div class="search__category">
            <h1 class="category__name">${!this._searchKeyword ? 'Category Products' : this._searchKeyword}</h1>
            <div class="category__box">
              <span class="category__result">smartphones</span>
              <span class="category__result">laptops</span>
              <span class="category__result">skincare</span>
              <span class="category__result">womens-shoes</span>
              <span class="category__result">mens-shirts</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('search-category', Category);
