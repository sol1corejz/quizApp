<script setup>
import questions from "@/assets/questions.json";

const data = Object.values(questions);

const storageData = localStorage.getItem('data');
if(storageData === undefined || storageData === null) {
  localStorage.setItem('data', JSON.stringify(data));
}

</script>

<template>
  <router-view></router-view>
</template>

<style >
p{
  margin: 0;
}
</style>
