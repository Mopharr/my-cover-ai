


<style>
@import url("~/Asset/dashboard.css");
</style>

<script>
definePageMeta({
  layout: "dashboard",
});
export default {
  computed: {
    isActiveSide() {
      return this.$parent.isActiveSide;
    },
  },
};
</script>

<template>
  <div>
    <div class="boardBody">
      <div class="dop">
        <div class="dTit">
          <h2>Dashboard</h2>
          <p>Overview of all activities</p>
        </div>
        <div class="method">
          <button><IoCloudDownloadOutline /> Export Report</button>
          <button><FaPlus /> Invite</button>
        </div>
      </div>
    </div>
    <Table />
  </div>
</template>
