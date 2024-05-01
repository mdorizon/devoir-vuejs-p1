const { createApp } = Vue;
import { CardItem } from "./components/CardItem.js";

const vm = createApp({
  components: {
    "card-product": CardItem,
  },
  data() {
    return {
      productsList: [],
    };
  },
  mounted() {
    console.log("App mounted");
    fetch('products.json')
      .then((response) => response.json())
      .then((data) => {
        this.productsList = data;
      });
  }
}).mount("#app");
