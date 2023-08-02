<script setup>
  const props = defineProps({
    num: Number,
    isAnswered: Boolean
  })

  const emit = defineEmits(['toggle'])
</script>

<template>
  <div class="question__item" @click="emit('toggle', num)">
    <img v-if="isAnswered" class="question__img" src="../../assets/icons/check-circle.png" alt="checkIcon" width="24">
    {{props.num + 1}}
  </div>
</template>

<style scoped>
  .question__item{
    position: relative;
    width: 71px;
    height: 71px;
    background-color: #FFFFFF;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .question__item:nth-child(4n){
    margin-right: 0;
  }
  .question__img{
    position: absolute;
    left: 47px;
    top: 0;
  }
</style>