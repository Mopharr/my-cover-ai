<template>
  <div class="modal">
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
  methods: {
    selectCategory(category) {
      this.$emit("select", category);
    },
  },
};
</script>

<style>
.modal {
  width: 300px;
  position: absolute;
  left: -32%;
  top: 120%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0 1em;
}
.modal ul {
  list-style: none;
  padding: 0;
}
.modal li {
  padding: 10px 0;
  cursor: pointer;
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  list-style: none;
  color: var(--Gray-600, #475467);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  padding-left: 0.5em;
}

.modal li:hover {
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.1);
  padding-left: 0.5em;
}
</style>
