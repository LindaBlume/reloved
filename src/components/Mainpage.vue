<template>
  <section id="main_section">
    <div id="app">
      <header>
        <div class="promo-banner">
          15% Rabatt auf dein erstes Monatspaket
        </div>
        <div class="logo">
    <h3 class ="brand">Reloved</h3>
    <p class="slogen">Besser als neu.</p>
    <div class="nav-icons">
      <span class="heart">❤</span>
      <button @click="$emit('show-cart')"><span>🛒</span></button>
    </div>
  </div>
  <nav>
    <input class="kategorie" type="text" placeholder="Nach Kategorien suchen">
  </nav>
  
      </header>
  
      <main>
      <section class="category">
          
          <div class="products">
            <h2 class="sortiment">Neu im Sortiment</h2>
                  <img class="product-special" src="/public/teen-photo-8466399_1280.jpg" alt="Denim Jeans">
                  <p class="denimjeans">Denim Jeans</p>
                  <button @click="changeToProduktDetail(9)">Jetzt ansehen</button>
          </div>
      </section>
  
      <div class="category summer-essentials">
          <h2 class="sortiment">Summer Essentials</h2>
          <section class="category"> 
              <div class="essentials">
                <div class="product" v-for="product in summerProducts" :key="product.id">
                <img :src="product.image" :alt="product.name">
                <button @click="changeToProduktDetail(product.id)">{{ product.name }}</button>
                </div>   
              </div>
          </section>
      </div>
  
      <section class="category">
          <h2 class="sortiment">Am häufigsten angesehen</h2>
          <div class="essentials">
            <div class="product" v-for="product in popularProducts" :key="product.id">
              <img :src="product.image" :alt="product.name">
              <button @click="changeToProduktDetail(product.id)">{{ product.name }}</button>
              </div>    
          </div>
      </section>   
  </main>
    </div>
  </section>
  </template>
  
  <script>
  export default {
    name: 'mainpage',
    data() {
      return {
        products: [
          {
            id: 1,
            name: "Minirock in Blau mit Rüschen",
            image: "/public/skirt-7786998_1280.jpg",
            description: "...."
          },
          {
            id: 2,
            name: "Sommerhut",
            image: "/public/woman-7363571_1280.jpg",
            description: "..."
          },
          {
            id: 3,
            name: "Basic Top",
            image: "/public/fashion-4785546_1280.jpg",
            description: "..."
          },
          {
            id: 4,
            name: "Retro Pilotensonnenbrille",
            image: "/public/sunglasses-1247235_1280.jpg",
            description: "..."
          },
          {
            id: 5,
            name: "Freizeitkleid",
            image: "/public/woman-1274056_1280.jpg",
            description: ".."
          },
          {
            id: 6,
            name: "Sommer Top",
            image: "/public/women-8318437_1280.jpg",
            description: ".."
          },
          {
            id: 7,
            name: "Maxi Kleid weiß",
            image: "/public/woman-6670772_1280.jpg",
            description: ".."
          },
          {
            id: 8,
            name: "Cat Eye Sonnenbrille",
            image: "/public/woman-6466907_1280.jpg",
            description: ".."
          },
          {
            id: 9,
            name: "Denim Jeans",
            image: "/public/teen-photo-8466399_1280.jpg",
            description: "..."
          }
        ],
      };
    },
  computed: {
    summerProducts(){
      return this.products.slice(0, 4);
    },
    popularProducts(){
      return this.products.slice(4, 8);
    }
  },
  methods: {
  async changeToProduktDetail(productId){
    const product = this.products.find(item => item.id === productId);
      this.$emit("show-product", product);
    }
}  
  };
  </script>
 
  <style>
  * {
    box-sizing: border-box;
  }
  body, html {
    background-color: white;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  header {
    background: rgb(255, 255, 255);
    padding: 10px;
  }
  .promo-banner {
    background-color: #6eb0c2;
    padding: 10px;
    text-align: center;
    font-size: 14px;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav input {
    flex: 1;
  }
  .nav-icons span {
    padding: 0 10px;
  }
  .category {
    margin: 20px 5%;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
    float: right;
    background-color: #E8EFEF;
  }
  .product{
    background-color: none;
  }
  .product img {
    width: 100%;
    height: auto;
    float: right;
  }
  .sortiment{
    color: black;
  }
  .kategorie{
    background-color: #abacac;
    color: black;
  }
  
  .essentials {
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 30px;
    background-color: #ffffff;
    align-items: center;
  }
  .heart{
    color: black;
  }
  .ansehen{
    background-color:#E8EFEF;
    color: black;
    border: 1.5px solid rgb(0, 0, 0);
    width: 100px;
    height: 50px;
    
  }
  .denimjeans{
    color:black;
    font-size: 25px;
    float: left;
  }
  .product {
      display: flex; /* Flexbox verwenden, um die Elemente in der .product-Klasse anzuordnen */
      flex-direction: column; /* Die Elemente in der .product-Klasse in Spalten anordnen */
  }
  
  .product img {
      width: 100%; /* Die Breite des Bildes auf 100% des Container festlegen */
      height: auto; /* Die Höhe automatisch anpassen, um das Seitenverhältnis beizubehalten */
      max-height: none; /* Maximale Höhe für das Bild festlegen, um eine einheitliche Höhe zu gewährleisten */
      max-width: 100%;
  } 
  .category {
      display: flex;
      flex-direction: column;
     
  }
  
  .summer-essentials {
      align-items: center;
      margin-bottom: 20px; /* Platz zwischen "Summer Essentials" und den anderen Kategorien hinzufügen */
  }
  .button{
    background-color: transparent;
    color: black;
    border: transparent;
  }
  .button li a:hover{
    color: #6eb0c2 ;
  }
  .product-special {
      width: 300px;
      order: 2; 
  }
  .ansehen{
    width: 150px;
    float: right;
  }
  nav {
    display: flex;
    align-items: center; /* Elemente vertikal zentrieren */
    justify-content: space-between; /* Elemente gleichmäßig im Container verteilen */
    order: 2;
  }
  
  .logo {
    color: black;
    margin-bottom: 10px;
    display: flex;
  }
  .slogen{
    flex: 1;
  }
  .nav-icons{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-icons li{
    list-style: none;
  }
  #button_warenkorb{
    color: none;
    background-color: none;
  }

  </style> 


 
  
  