<script setup>
const props = defineProps({
  text: String,
  isActive: Boolean
})
</script>

<template>
  <div class="navigation_block__item">
    <div class="navigation_block__img" :class="[{'navigation_block__img-active': props.isActive}]">
      <slot/>
    </div>
    <p class="navigation_block__text" :class="[{'navigation_block__text-active': props.isActive}]">{{props.text}}</p>
  </div>
</template>

<style scoped>
.navigation_block__item{
  transition: all ease-in-out 2s;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.navigation_block__item>.navigation_block__text-active{
  color: #FF7355;
}
.navigation_block__item>.navigation_block__img-active{
  background-color: rgba(255, 115, 85, 0.25);
}
.navigation_block__img{
  margin: 8px 25px;
  margin-bottom: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.navigation_block__text{
  display: inline;
  color: #87898F;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin: 0;
}

</style>