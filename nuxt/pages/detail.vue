<template>
  <div>
    detail page - {{detail}}
    <nuxt-child></nuxt-child>  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detail: 'i am detial' 
      }
    }, 
  }
</script>

<style lang="scss" scoped>

</style>