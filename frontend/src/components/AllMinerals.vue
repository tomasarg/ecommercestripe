<template>
  <listOfProducts :products="getMinerals"/>
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
      'getMinerals',
    ]),
  },
};
</script>

<style>
</style>

