<template>
  <div class="sidebar">
    <div class="ham">
      <IconsHamburger />
    </div>
    <NuxtLink to="/"> Dashboard </NuxtLink>
    <NuxtLink to="/productDetails"> Product</NuxtLink>
    <li></li>
  </div>
</template>

<style>
.sidebar {
  width: 300px;
  background-color: red;
  height: 100vh;
}
.sidebar ul {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: flex-start;
}
</style>
