<script setup>

</script>

<template>
  <header class="header">
    <p class="header__text">ray driving theory</p>
    <span class="header_btns">
        <div class="header__btn"><img src="../assets/icons/crown.png" alt="crown" width="24"></div>
        <div class="header__btn"><img style="margin-right: 4px" src="../assets/icons/fire.png" alt="fire" width="24"><p class="header_btn__text">13</p></div>
      </span>
  </header>
</template>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 8px;
}
.header__text{
  color: #2C2D2E;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}
.header_btns{
  display: flex;
  align-items: center;
}
.header__btn{
  display: flex;
  background-color: #FFF;
  padding: 7px;
  border-radius: 8px;
}
.header__btn:first-child{
  margin-right: 8px;
}
.header_btn__text{
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: auto;
}
</style>