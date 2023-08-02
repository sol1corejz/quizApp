<script setup>
const props = defineProps({
  text: String,
  img: String,
})
</script>

<template>
  <div class="buttons_block__item">
    <div class="buttons_block__img">
      <img :src="props.img" alt="buttonIcon" width="28">
    </div>
    <p class="buttons_block__text">{{props.text}}</p>
  </div>
</template>

<style scoped>
.buttons_block__item{
  width: 60px;
  text-align: center;
}
.buttons_block__img{
  border-radius: 100%;
  background-color: #FF7355;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
.buttons_block__text{
  display: inline;
  color: #2C2D2E;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
</style>