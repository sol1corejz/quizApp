<script setup>
  const props = defineProps({
    text: String,
    img: String,
    isBig: Boolean,
    style: 1 || 2
  })
</script>
<template>
  <div v-if="!isBig" class="card_block__item">
    <div class="card_block__img" :class="[{'card_block__img-orange': props.style === 1}]">
      <img :src="props.img" alt="cardIcon" width="24">
    </div>
    <p class="card_block__text">{{props.text}}</p>
  </div>
  <div v-else class="card_block__item card_block__item-big">
    <div class="card_block__img" :class="[{'card_block__img-orange': props.style === 1}]">
      <img :src="props.img" alt="cardIcon" width="24">
    </div>
    <p class="card_block__text card_block__text-big">{{props.text}}</p>
  </div>
</template>
<style scoped>
p{
  margin: 0;
}
.card_block__item{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #FFFFFF;
  width: 160px;
  height: 72px;
  border-radius: 20px;
  border: 1px solid #F3F3F3;
  padding: 16px 12px;
  margin-bottom: 8px;
}
.card_block__item:nth-child(odd){
  margin-right: 8px;
}
.card_block__item.card_block__item-big{
  margin-right: 0;
  margin-bottom: 24px;
  width: 100%;
}
.card_block__img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgba(107, 42, 188, 0.1);
  margin-right: 8px;
}
.card_block__img-orange{
  background-color: rgba(255, 32, 69, 0.1);
}
.card_block__text{
  width: 90px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #000000DE;
}
.card_block__text-big{
  width: 100%;
}
</style>