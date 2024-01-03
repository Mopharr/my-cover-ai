<template>
  <div class="modal">
    <ul>
      <li v-for="category in categories" :key="category" @click="selectCategory(category)">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  },
  methods: {
    selectCategory(category) {
      this.$emit('select', category);
    }
  }
};
</script>

<style>
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.modal ul {
  list-style: none;
  padding: 0;
}
.modal li {
  padding: 10px 0;
  cursor: pointer;
}
</style>
