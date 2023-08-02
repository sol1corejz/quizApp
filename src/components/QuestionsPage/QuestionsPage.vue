<script setup>
  import QuestionItem from "@/components/QuestionsPage/QuestionItem.vue";
  import {ref} from "vue";

  let data = ref(localStorage.getItem('data'));
  data.value = JSON.parse(data.value);


  function toggleQuestion (index) {
    data.value[index].answered = !data.value[index].answered;
    localStorage.setItem('data', JSON.stringify(data.value))
    data.value = localStorage.getItem('data');
    data.value = JSON.parse(data.value);
  }
</script>

<template>
  <div class="container">
    <header class="header">
      <router-link class="header__btn" to="/main">
        <img src="../../assets/icons/arrow-left.png" alt="backIcon" width="24">
      </router-link>
      <div class="header__text">Learning</div>
    </header>
    <div class="title">
      <div class="title__text">Tests</div>
      <div class="title__underline"></div>
    </div>
    <div class="main_block">
      <QuestionItem v-for="(q, index) in data" @toggle="(id) => toggleQuestion(id)" :key="index" :num="index" :isAnswered="q.answered"/>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding-bottom: 15px;
  display: flex;
  margin-left: 16px;
}
.header__btn {
  cursor: pointer;
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
.main_block{
  margin-left: 16px;
}
</style>