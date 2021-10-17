<template>
  <v-row>
    <v-col v-for="product in products" :key="product" md="6" cols="6">
      <div class="product">
        <img :src="product.image" /> <br>
        <div class="product-info">
          <strong>{{ product.price }}</strong> <br />
          <span>{{ product.name }}</span> <br />
          <router-link :to="'/product-detail/' + product.id" class="show-more">Ver mais</router-link>
        </div>
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
          id: '001'
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
          id: '002'
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
          id: '003'
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
          id: '004'
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
          id: '005'
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
          id: '006'
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
          id: '007'
        },
        {
          name: "Mala a tiracolo acolchoada",
          image: require("@/assets/bolsa.jpg"),
          price: "19,99€",
          id: '008'
        },
      ],
    };
  },
};
</script>

<style>
.product {
  text-align: center;
}
.product-info {
  text-align: left;
  margin-left: 10%;
}
.product img {
  width: 80%;
  height: auto;
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