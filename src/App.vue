<template>
  <div id="app">
    <mainpage v-if="currentPage === 'mainpage'" @show-product="showProductDetail" @show-cart="showCart"></mainpage>
    <warenkorb v-if="currentPage === 'warenkorb'" :cart="cart" @remove-from-cart="RemoveFromCart" @back="showMainPage"></warenkorb>
    <Produktdetails v-if="currentPage === 'productdetail'" :product="selectedProduct" @back="showMainPage" @show-cart="showCart" @add-to-cart="addToCart"></Produktdetails>
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
      this.currentPage = 'mainpage';
    },
    showCart() {
      this.currentPage = 'warenkorb';
    },
    showProductDetail(product) {
      this.selectedProduct = product;
      this.currentPage = 'productdetail';
    },
    addToCart(product) {
      this.cart.push(product);
    },
    RemoveFromCart(product){
      this.cart = this.cart.filter(item => item.id !==product.id);
    }
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>



