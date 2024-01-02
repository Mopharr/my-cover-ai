<style>
@import "../Asset/dashboard.css";
</style>

<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    handleChange() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
  },
};
</script>

<template>
  <div class="fullboard">
    <Sidebar :handle-change="handleChange" :is-open="isOpen" />
    <div :class="isOpen === true ? 'boardPartAct' : 'boardPart'">
      <slot />
    </div>
  </div>
</template>
