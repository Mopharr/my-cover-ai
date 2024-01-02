<template>
  <div>
      <div className="dop">
        <div className="dTit">
          <h2>Dashboard</h2>
          <p>Overview of all activities</p>
        </div>
        <div className="DTBtn">
          <button><IoCloudDownloadOutline /> Export Report</button>
          <button><FaPlus /> Invite</button>
        </div>
      </div>
      <div className="sTop">
        <div className="sTit">
          <h2>Sales overview</h2>
          <div className="topOpt">
            <p>Default</p>

            <p>SDR View</p>
            <p><span className="gDot"></span> Saved View</p>
            <p>
              <FaPlus />
            </p>
          </div>
        </div>
        <div className="DTBtn">
          <button><CiCalendarDate /> Jan 6, 2022 – Jan 13, 2022</button>
          <button><IoFilterOutline /> Filters</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>