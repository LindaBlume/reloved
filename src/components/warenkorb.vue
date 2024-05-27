<template>
  <section id="warenkorb_section">
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
    <button @click="$emit('back')">Zurück zur Homepage</button>
    <div class="cart" v-if="cart.length > 0">
      <h2>Mein Monatspaket</h2>
      <div class="cart_product" v-for="product in cart" :key="product.id">
        <button class="entfernen" @click="removeFromCart(product)">Entfernen</button>
        <img class="pic" :src="product.image" :alt="product.name">
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <select v-model="selectedSize">
            <option>EU 34</option>
            <option>EU 36</option>
            <option>EU 38</option>
            <option>EU 40</option>
            <option>EU 42</option>
          </select>
          <button @click="addToWishlist"><span class="heart-w">❤</span></button>
          
        </div>
      </div>
      <div class="subscription-info">
        <p>Infos zu deinem Abonnement</p>
      </div>
      <button class="confirm-btn">Paket für diesen Monat hiermit bestätigen</button>
      <h3>Wir akzeptieren</h3>
      <div class="payment-methods">
        <img src="/public/paypal.png" alt="Paypal">
        <img src="/public/visa.png" alt="Visa">
        <img src="/public/logo.png" alt="Mastercard">
        <img src="/public/apple-pay.png" alt="Applepay">
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</section>
</template>


<script>
import FooterComponent from './Footer.vue';

export default {
    name: 'warenkorb',
    components: {
      'footer-component': FooterComponent
    },
    props: {
      cart: {
        type: Array,
        required: true
      }
    },
    methods: {
  addToWishlist(){
    alert("Zur Wunschliste hinzugefügt");
  },
  removeFromCart(product){
    this.$emit('remove-from-cart', product);
  }
},
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
.kategorie{
  background-color: #abacac;
  color: black;
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
body, html {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}
.cart {
  padding: 20px;
}
.cart_product {
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  gap: 30px;
  background-color: #E8EFEF;
  
}
.product img {
  width: 100px;
  margin-right: 20px;
}
.product-details h3 {
  margin: 0;
}
button {
  background-color: #E8EFEF;
  color: black;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.confirm-btn {
  background-color: #E8EFEF;
  width: 500px;
  height: 60px;
}
.payment-methods img {
  width: 100%;
  margin-top: 20px;
}
.pic{
  width: 20%;
  height: 20%;
}
#button-mainpage{
  width: 20%;
}
.payment-methods img {
  width: 40px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 0 10px; /* Adjust the spacing between icons */
}
.heart-w{
  font-size: 1.5rem;
}
.entfernen{
  display: flex;
  order: 2;

}
</style>


