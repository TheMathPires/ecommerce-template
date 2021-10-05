<template>
  <v-row>
    <v-col v-for="product in products" :key="product" md="6" cols="6">
      <div class="product">
        <img :src="product.image" />
        <strong>{{ product.price }}</strong> <br />
        <span>{{ product.name }}</span> <br />
        <router-link to="/product-detail" class="show-more">Ver mais</router-link>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Products",

  data: () => {
    return {
      products: [
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
        },
      ],
    };
  },
};
</script>

<style>
.product img {
  width: 100%;
}
.product span {
  font-size: 0.85rem;
}
.product .show-more {
  font-size: 0.7rem;
  text-decoration: underline;
  color: rgb(133, 133, 133);
}
</style>