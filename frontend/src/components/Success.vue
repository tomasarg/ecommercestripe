<template>
  <div v-if="customer" class="product-box">
    <div class="product-info">
      <span class="product-price">Thanks for your purchase</span>
      <div>We sent an email to {{ customer.email }} with the order details</div>
      <div>Your total: ${{ amount }},00</div>
      <div>Order Number: {{ payment_intent }}</div>
    </div>
  </div>
</template>

<script>
import config from '../config';
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import stars from './Stars';
import modal from './Modal';

export default {
  components: {
    btn
  },

  data () {
    return {
      customer: null,
      session_id: null,
      amount: null,
      payment_intent: null
    }
  },

  computed: {
  },

  mounted () {
    this.getCheckOutSession();
  },

  methods: {
    ...mapActions([
    ]),
    async getCheckOutSession(){
      var session_id = this.$route.query.session_id;

      if (session_id) {
        const response = await fetch(config.BACKEND.API_URL + 'checkout-session?session_id=' + session_id, {method: 'GET'});

        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        const sessionInfo = await response.json();

        this.customer = sessionInfo.customer;
        this.session_id = session_id;
        this.amount = sessionInfo.amount;
        this.payment_intent = sessionInfo.payment_intent;
      }
    }
  },

};
</script>

<style scoped>
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .product-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>
