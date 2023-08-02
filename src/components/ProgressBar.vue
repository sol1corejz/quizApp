<script setup>
  import {computed} from "vue";

  const props = defineProps({
    data: Array
  })

  const bars = computed(() => props.data.length / 7);

  const intPart = computed(() => Math.trunc(props.data.filter(q => q.answered).length / bars.value));
  const floatPart = computed(() => props.data.filter(q => q.answered).length % bars.value);


</script>

<template>
  <div class="progress-bar">
    <progress  max="100" :value="progress"></progress>
<!--    <span class="progress-bar__item"></span>-->
<!--    <span class="progress-bar__item"></span>-->
<!--    <span class="progress-bar__item"></span>-->
<!--    <span class="progress-bar__item"></span>-->
<!--    <span class="progress-bar__item"></span>-->
<!--    <span class="progress-bar__item"></span>-->
<!--    <span class="progress-bar__item"></span>-->
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