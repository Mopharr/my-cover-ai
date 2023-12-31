<style>
@import url("~/Asset/sidebar.css");
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
  <div :class="{ activeSide: !isActiveSide, side: isActiveSide }">
    <div class="log">
      <IconsHamburger class="ham" @click="toggleSide" />
    </div>
    <div className="linee"></div>

    <div class="navItem">
      <NuxtLink to="/" class="link">
        <IconsDashboard class="icons"/> <span> Dashboard</span>
      </NuxtLink>
      <NuxtLink to="/productDetails" class="link">
        <IconsProduct class="icons" /> <span> Product </span></NuxtLink
      >
    </div>

    <div class="sideBottom">
      <div className="linee"></div>

      <NuxtLink to="#" class="link">
        <IconsLogout class="icons" />
        <span> Logout </span>
      </NuxtLink>
    </div>
  </div>
</template>
