<template>
  <div>
    {{this.$route.params.id}} - detail id
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 2123 
      }
    }, 
    created () {
    },
  }
</script>

<style lang="scss" scoped>

</style>