<template>
  <div class="modalCon">
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
.modalCon {
  position: relative;
}
.modal {
  width: 300px;
  position: absolute;
left: -20%;
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
  border-bottom: 1px solid grey;
  transition: all 0.3s ease;
}

.modal li:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
