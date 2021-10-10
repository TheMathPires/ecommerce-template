<template>
  <div class="product-detail">
    <v-row>
      <v-col md="4" cols="4" class="product-info">
        <small>REF. {{ ref }}</small> 

        <h1>{{ name }}</h1> <br>

        <small>{{ size }}</small> <br>

        <small class="ports">Envio para a loja GRÁTIS.</small>

        <div class="separator"></div>

        <div class="price">
          <h3>17,99€</h3>
        </div>
      </v-col>
      <v-col md="4" cols="4" class="product-image">
        <img :src="image" />
      </v-col>
      <v-col md="4" cols="4">

        <div class="colors">
          Cor: <button @click="changePicture($event)" v-for="(color, c) in colors" :key="c" :id="color.color">{{ color.color }}</button>
        </div>

        <hr>

        <div class="sizes">
          Tamanho: <strong>Único</strong>
        </div>

        <div class="add-to-cart">
          <button>Juntar ao carrinho</button>
          <a href="#">Ver disponibilidade na loja</a>
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
            ref: '3536/101-I2021',
            size: '14,5 cm x  21 cm x 12  cm',
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
.product-detail .add-to-cart {
  display: flex;
  flex-direction: column;
}
.product-detail .add-to-cart a {
  text-align: center;
  color: #777;
  font-size: .8rem;
}
.product-detail .add-to-cart button {
  background-color: orange;
  color: #2c2c2c;
  width: 200px;
  margin: 0 auto;
  padding: .5rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.product-detail .ports {
  color: green;
}
.product-detail .separator {
  width: 40px;
  height: 5px;
  background-color: #2c2c2c;
  margin: 2rem 0 1rem 0;
}
.product-info.col-4 {
  padding-left: 2rem;
  margin-left: 0;
}
</style>