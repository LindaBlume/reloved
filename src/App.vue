<template>
  <div id="app">
    <mainpage v-if="currentPage === 'mainpage'" @show-product="showProductDetail" @show-cart="showCart"></mainpage>
    <warenkorb v-if="currentPage === 'warenkorb'" :cart="cart" @back="showMainPage"></warenkorb>
    <Produktdetails v-if="currentPage === 'productdetail'" :product="selectedProduct" @back="showMainPage" @show-cart="showCart" @add-to-cart="addToCart"></Produktdetails>

    <div>
      <p>Current Page: {{ currentPage }}</p>
      <p>Selected Product: {{ selectedProduct }}</p>
      <p>Cart: {{ cart }}</p>
    </div>
  </div>
</template>

<script>
import mainpage from './components/Mainpage.vue';
import Produktdetails from './components/produktdetails.vue';
import warenkorb from './components/warenkorb.vue';

export default {
  name: 'App',
  components: {
    mainpage,
    Produktdetails,
    warenkorb,
  },

  data() {
    return {
      currentPage: 'mainpage',
      selectedProduct: null,
      cart: [],
    };
  },
  methods: {
    showMainPage() {
      console.log('Navigating to Main Page');
      this.currentPage = 'mainpage';
    },
    showCart() {
      console.log('Navigating to Cart');
      this.currentPage = 'warenkorb';
      console.log(this.currentPage)
    },
    showProductDetail(product) {
      console.log('Showing Product Detail', product);
      this.selectedProduct = product;
      this.currentPage = 'productdetail';
    },
    addToCart(product) {
      console.log('Adding to Cart', product);
      this.cart.push(product);
    },
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>



