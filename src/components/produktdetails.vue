<template>
    <section id="product-detail-page" class="hidden">
      <header>
        <div class="promo-banner">Kostenlose Lieferung ab einem Bestellwert von 100 EUR</div>
        <div class="logo">
          <h3 class="brand">Reloved</h3>
          <p class="slogen">Besser als neu.</p>
          <div class="nav-icons">
            <span class="heart">❤</span>
            <button @click="$emit(show-cart)"><span>🛒</span></button>
          </div>
        </div>
        <nav>
          <input class="kategorie" type="text" placeholder="Nach Kategorien suchen">
        </nav>
      </header>
      
      <main>
        <button @click="$emit(back)">Zurück zur Homepage</button>
        <div class="product-detail-container">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-info">
            <h2>{{ product.name }}</h2>
            <select v-model="selectedSize">
              <option disabled value="">Größe auswählen</option>
              <option>34</option>
              <option>36</option>
              <option>38</option>
              <option>40</option>
              <option>42</option>
            </select>
            <button @click="addToCart">Zum Paket hinzufügen</button>
            <div class="accordion">
              <button @click="toggleAccordion('fit')">Größe&Fit</button>
              <div v-if="accordion.fit" class="accordion-content">Größe des Models: 170 cm. <br> Das Model trägt: 36</div>
              
              <button @click="toggleAccordion('details')">Produktdetails</button>
              <div v-if="accordion.details" class="accordion-content">100% Baumwolle: leicht, weich, <br> - hoher Bund <br> - normale Passform</div>
              
              <button @click="toggleAccordion('delivery')">Lieferung</button>
              <div v-if="accordion.delivery" class="accordion-content">Kostenloser Versand für qualifizierte Bestellungen</div>
            </div>
          </div>
        </div>
      </main>
    </section>
  </template>
  
  <script>

  export default {
    name: 'Produktdetails',
    props: ['product'],
    data() {
      return {
        selectedSize: '',
        accordion: {
          fit: false,
          details: false,
          delivery: false
        } 
      };
},
methods: {
  addToCart() {
    this.$emit("add-to-cart", this.selectedProduct)
    alert('Produkt hinzugefügt!');
  },
  toggleAccordion(section) {
    this.accordion[section] = !this.accordion[section];
  }
} 
};

  </script>

  <style>

#product-detail-page header {
    background: white;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  #product-detail-page .product-detail-container {
    display: flex;
    padding: 50px;
    justify-content: center;
  }
  
  .product-image img {
    width: 300px;
    height: auto;
    border-radius: 5px;
  }
  
  .product-info {
    margin-left: 20px;
    width: 300px;
  }
  
  .product-info h2 {
    margin-top: 0;
  }
  
  .product-info .price {
    font-size: 1.5em;
    color: #333;
  }
  
  select, button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
  }
  
  .accordion button {
    width: 100%;
    background-color: transparent;
    border: none;
    text-align: left;
    padding: 10px;
    font-size: 1em;
  }
  
  .accordion-content {
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #ddd;
  }

</style>