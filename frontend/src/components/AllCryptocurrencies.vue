<template>
  <listOfProducts :products="getCryptocurrencies"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getCryptocurrencies',
    ]),
  },
};
</script>

<style>
</style>

