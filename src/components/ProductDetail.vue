<template>
  <div class="product-detail">
    <v-row>
      <v-col md="5" cols="5">
        <img :src="image" />
      </v-col>
      <v-col md="7" cols="7">
        <h1>{{ name }}</h1>

        <div class="colors">
            Cor: <button @click="changePicture()" v-for="(color, c) in colors" :key="c"> {{ color.color }} </button>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: "ProductDetail",

    data: () => {
        return {
            name: "Mala a tiracolo acolchoada",
            image: require("@/assets/caramelo.jpg"),
            price: "19,99€",
            colors: [
                {
                    color: "caqui",
                },
                {
                    color: 'caramelo',
                },
            ],
        };
    },
    methods: {
      changePicture: function () {
        const productImage = document.querySelector('.product-detail img')
        console.log(productImage.src)
        productImage.src = (productImage.src.includes('caramelo')) ? require("@/assets/bolsa.jpg") : require("@/assets/caramelo.jpg") 
      }
    },
};
</script>

<style>
.product-detail img {
    width: 100%;
}
.product-detail h1 {
    font-size: 1.6rem;
}
.product-detail button {
  margin-right: .5rem;
}
.product-detail button.clicked {
  margin-right: .2rem;
}
</style>