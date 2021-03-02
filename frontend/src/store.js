import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    minerals: [
      {
        name: 'Gold',
        price: 2259,
        image: 'https://www.arguinzon.es/public/images/gold.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Silver',
        price: 1000,
        image: 'https://www.arguinzon.es/public/images/silver.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Bronce',
        price: 500,
        image: 'https://www.arguinzon.es/public/images/bronce.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Titanium',
        price: 1500,
        image: 'https://www.arguinzon.es/public/images/titanium.png',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      }
    ],

    cryptocurrencies: [
      {
        name: 'Bitcoin',
        price: 60000,
        image: 'https://www.arguinzon.es/public/images/bitcoin.png',
        stars: 0,
        totalReviews: 0,
        details: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software',
      },
      {
        name: 'Bitcoin Cash',
        price: 600,
        image: 'https://www.arguinzon.es/public/images/bitcoincash.png',
        stars: 1.5,
        totalReviews: 11,
        details: 'Bitcoin Cash is a cryptocurrency that is a fork of Bitcoin. Bitcoin Cash is a spin-off or altcoin that was created in 2017. In November 2018, Bitcoin Cash split into two cryptocurrencies: Bitcoin Cash and Bitcoin SV. Bitcoin Cash is sometimes also referred to as Bcash.',
      },
      {
        name: 'Cardano',
        price: 1,
        image: 'https://www.arguinzon.es/public/images/cardano.png',
        stars: 1,
        totalReviews: 2,
        details: 'Cardano is a cryptocurrency network and open source project that aims to run a public blockchain platform for smart contracts. Cardanos internal cryptocurrency is called Ada. The development of the project is overseen and supervised by the Cardano Foundation based in Zug, Switzerland.',
      },
      {
        name: 'Dodgecoin',
        price: 6,
        image: 'https://www.arguinzon.es/public/images/dodgecoin.png',
        stars: 5,
        totalReviews: 310,
        details: 'Dogecoin is a cryptocurrency invented by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system that is instant, fun, and free from traditional banking fees. Dogecoin features the face of the Shiba Inu dog from the "Doge" meme as its logo and namesake.',
      },
      {
        name: 'Ethereum',
        price: 1866,
        image: 'https://www.arguinzon.es/public/images/etherum.png',
        stars: 2.9,
        totalReviews: 42,
        details: 'Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain',
      },
      {
        name: 'Monero',
        price: 283,
        image: 'https://www.arguinzon.es/public/images/monero.png',
        stars: 0.5,
        totalReviews: 1,
        details: 'Monero is a privacy-focused cryptocurrency released in 2014. It is an open-source protocol based on CryptoNote. It uses an obfuscated public ledger, meaning anyone can send or broadcast transactions, but no outside observer can tell the source, amount, or destination',
      },
      {
        name: 'Tether',
        price: 283,
        image: 'https://www.arguinzon.es/public/images/tether.png',
        stars: 0.5,
        totalReviews: 1,
        details: 'Tether is a controversial cryptocurrency with tokens issued by Tether Limited. It formerly falsely claimed that each token was backed by one United States dollar, but on 14 March 2019 changed the backing to include loans to affiliate companies.',
      }
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getCryptocurrencies: state => state.cryptocurrencies,
    getMinerals: state => state.minerals,
    getAllProducts: state => state.cryptocurrencies.concat(state.minerals),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    }
  },
});
