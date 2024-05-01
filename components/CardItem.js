export const CardItem = {
  props: {
    id: Number,
    name: String,
    img_url: String,
    like: Boolean,
    number: Number,
    price: Number
  },
  template: `
    <div class="product-card" :key="id">
      <img :src="img_url">
      <p class="price">{{ price }} €</p>
      <div class="buttons">
        <a class="like-button">
          <i class="fa-regular fa-heart"></i>
        </a>
        <a class="cart-button">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </div>
  `,
}