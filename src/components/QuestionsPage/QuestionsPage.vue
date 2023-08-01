<script setup>

</script>

<template>
  <div class="container">
    <header class="header">
      <div class="header__btn">
        <img src="../../assets/icons/arrow-left.png" alt="backIcon" width="24">
      </div>
      <div class="header__text">Learning</div>
    </header>
    <div class="title">
      <div class="title__text">Tests</div>
      <div class="title__underline"></div>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 48px;
  display: flex;
  margin-left: 16px;
}
.header__btn {
  margin-right: 16px;
}
.header__text {
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: #2C2D2E;
}
.title{
  color: #FF7355;
  margin-bottom: 26px;
}
.title__text{
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 14px;
}
.title__underline{
  width: 109px;
  border-top: 2px solid #FF7355;
  margin: 0 auto;
}
</style>