<style>
  @import "~/Asset/dashboard.css";

.fullBoard {
  background-color: red;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 99.2vw;
  overflow-x: hidden;

}

</style>

<script>
export default {
  data() {
    return {
      isActiveSide: false,
    };
  },
  methods: {
    toggleSide() {
      this.isActiveSide = !this.isActiveSide;
    },
  },
};
</script>

<template>
  <div class="fullboard">
    <Sidebar :toggleSide="toggleSide" />
    <slot />
  </div>
</template>
