<template>
  <div class="about">
    <div class="list">
      <div class="item" v-for="(item, index) of list" :key="index">
        {{ item }}:{{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["kebi", "curry", "james", "xjh"],
    };
  },
};
</script>

<style scoped></style>
