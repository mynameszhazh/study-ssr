<template>
  <div class="home">
    {{ mas }} - {{this.$store.state.counter}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      mas: 'value',
    };
  },
  asyncData({store, route}) { 
    // console.log(route, 'async')
    return store.dispatch('getCounter')
  }
};
</script>

<style scoped>
.home {
  color: red;
}
</style>
