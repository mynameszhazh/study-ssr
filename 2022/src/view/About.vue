<template>
  <div class="about">
    <div class="list">
      <div class="item" v-for="(item, index) of list" :key="index">
        {{ item }}:{{ index }}
      </div>
      <button @click="btnClick">{{ this.$store.state.counter }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["kebi", "curry", "xjh"],
    };
  },
  created() {
    this.$store.commit("init", 20);
  },
  methods: {
    btnClick() {
      this.$store.commit("add");
    },
  },
};
</script>

<style scoped></style>
