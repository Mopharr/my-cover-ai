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
      console.log("dashboad", this.isOpen);
    },
  },
};
</script>

<template>
  <div class="fullboard">
    <Sidebar :handle-change="handleChange" :is-open="isOpen" />
    <div :class="{ boardPartAct: isOpen, boardPart: !isOpen }">
      <slot />
    </div>
  </div>
</template>
