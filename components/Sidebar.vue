<style>
@import url("~/Asset/sidebar.css");
</style>
<script>
export default {
  props: {
    handleChange: Function,
    isOpen: Boolean,
  },
};
</script>

<template>
  <div :class="isOpen === true ? 'activeSide' : 'side'">
    <div class="log">
      <IconsHamburger class="ham" @click="handleChange" />
    </div>
    <div class="linee"></div>

    <div class="navItem">
      <NuxtLink to="/" class="link">
        <IconsDashboard class="icons" /> <span> Dashboard</span>
      </NuxtLink>
      <NuxtLink to="/productDetails" class="link">
        <IconsProduct class="icons" /> <span> Product </span></NuxtLink
      >
    </div>

    <div class="sideBottom">
      <div class="linee"></div>

      <NuxtLink to="#" class="link">
        <IconsLogout class="icons" />
        <span> Logout </span>
      </NuxtLink>
    </div>
  </div>
</template>
