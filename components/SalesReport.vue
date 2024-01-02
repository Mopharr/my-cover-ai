<template>
  <div class="dashboardDetails">
    <div class="dDTop">
      <!-- This block is repeated for each revenue box. For brevity, I'm only showing one. -->
      <div class="tRev">
        <div class="reTop">
          <p>Today's Revenue</p>
          <!-- We can use Nuxt.js icons or your preferred icon set -->
          <nuxt-icon name="dots-vertical" />
        </div>
        <div class="reMid">
          <h3>$1,233</h3>
          <span class="mR">
            <nuxt-icon name="arrow-up-outline" />
            10%
          </span>
        </div>
        <div class="line"></div>
        <div class="reBot">
          <p>View Report</p>
        </div>
      </div>
      <!-- Repeat other tRev blocks as necessary -->
    </div>
    <div class="dDBot">
      <div class="tabTil">
        <p>Sales Report</p>
        <button>View Report</button>
      </div>
      <div class="tabDate">
        <p>12 month</p>
        <p>30 days</p>
        <p>7 days</p>
        <p>24 hours</p>
      </div>
      <LineChart :chart-data="data" :options="options" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const options = ref({
      scales: {
        x: {
          title: {
            display: true,
            text: "Month",
          },
        },
        y: {
          title: {
            display: true,
            text: "Sales",
          },
        },
      },
    });

    const data = ref({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Monthly Sales",
          data: [300, 20, 200, 100, 150, 190, 300, 320, 8, 9],
          borderColor: "#0E0E0E",
          backgroundColor: "rgba(14, 14, 14, 0.5)",
        },
      ],
    });

    return {
      options,
      data,
    };
  },
};
</script>

<style>

</style>
