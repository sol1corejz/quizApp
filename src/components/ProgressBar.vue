<script setup>
  import {computed} from "vue";

  const props = defineProps({
    data: Array
  })

  const bars = computed(() => props.data.length / 7);

  const intPart = computed(() => Math.trunc(props.data.filter(q => q.answered).length / bars.value));
  const floatPart = computed(() => props.data.filter(q => q.answered).length / bars.value - intPart.value);

  const wd = computed(() => 38 * floatPart.value);
  console.log(wd.value)
  const st = `width: ${wd.value}px`
</script>

<template>
  <div class="progress-bar">
    <span v-for="i in intPart" class="progress-bar__item progress-bar__item-filled"></span>
    <div class="progress-bar__item"><span v-if="floatPart" class="progress-bar__item-float" v-bind:style="st"></span></div>
    <span v-for="i in 6 - intPart" class="progress-bar__item "></span>
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
  position: relative;
  width: 38px;
  height: 6px;
  border-radius: 5px;
  background-color: rgba(82, 167, 84, 0.1);
}
.progress-bar__item-filled{
  background-color: #52A754;
}
.progress-bar__item-float{
  height: 6px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #52A754;
  border-radius: 5px;
}
</style>