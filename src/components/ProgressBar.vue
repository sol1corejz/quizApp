<script setup>

</script>

<template>
  <div class="progress-bar">
    <span class="progress-bar__item"></span>
    <span class="progress-bar__item"></span>
    <span class="progress-bar__item"></span>
    <span class="progress-bar__item"></span>
    <span class="progress-bar__item"></span>
    <span class="progress-bar__item"></span>
    <span class="progress-bar__item"></span>
  </div>
</template>

<style scoped>
.progress-bar{
  display: flex;
  justify-content: space-between;
  margin-left: 24px;
  margin-right: 24px;
}
.progress-bar__item{
  width: 38px;
  height: 6px;
  border-radius: 5px;
  background-color: rgba(82, 167, 84, 0.1);
}
</style>