import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import AllMinerals from '../components/AllMinerals';
import AllCryptocurrencies from '../components/AllCryptocurrencies';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';
import Success from '../components/Success';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/minerals',
      name: 'Minerals',
      component: AllMinerals,
    },
    {
      path: '/cryptocurrencies',
      name: 'Cryptocurrencies',
      component: AllCryptocurrencies,
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
    }
  ],
});
