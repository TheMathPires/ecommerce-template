<template>
  <div class="product-detail">
    <v-row>
      <v-col md="5" cols="5">
        <img :src="image" />
      </v-col>
      <v-col md="7" cols="7">
        <h1>{{ name }}</h1>

        <div class="colors">
          Cor: <button @click="changePicture($event)" v-for="(color, c) in colors" :key="c" :id="color.color">{{ color.color }}</button>
        </div>

        <hr>

        <div class="sizes">
          Tamanhos: XS S M L XL
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
      changePicture: function (event) {
        const productImage = document.querySelector('.product-detail img')
        productImage.src = (event.target.id === 'caqui') ? require("@/assets/bolsa.jpg") : require("@/assets/caramelo.jpg") 

        const colorButtons = document.querySelectorAll('.product-detail button')
        colorButtons.forEach(btn => {
          if (btn.classList.contains('clicked')) {
            btn.classList.remove('clicked')
          }
        })

        event.target.classList.add('clicked')
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
  font-weight: bold;
}
.product-detail .colors, .product-detail .sizes {
  padding: 2rem 0;
}
</style>