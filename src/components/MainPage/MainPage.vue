<script setup>
import LExam from "@/assets/icons/l-exam.png";
import Rocket from "@/assets/icons/rocket-launch.png";
import TV from "@/assets/icons/tv-play.png";
import Eighty from "@/assets/icons/80.png";
import Controller from "@/assets/icons/game-controller.png";
import Pen from "@/assets/icons/pen.png";
import Chart from "@/assets/icons/chart-bar.png";
import Book from "@/assets/icons/book-text.png";
import Bookmark from "@/assets/icons/bookmarks-user.png";
import {onMounted, ref} from "vue";
import ProgressBar from "@/components/ProgressBar.vue";
import Card from "@/components/Card.vue";
import MainButton from "@/components/MainButton.vue";
import NavigationItem from "@/components/NavigationItem.vue";
import MainHeader from "@/components/MainHeader.vue";

const active = ref( '0');

let data = sessionStorage.getItem('data');
data = JSON.parse(data);

function setActive(id) {
  active.value = id;
}
</script>

<template>
  <div class="container">
    <MainHeader />
    <div class="info_block">
      <div @click="() => this.$router.push('/questions')" class="info_block__top">
        <div class="info_block__img">
          <img src="../../assets/icons/graduation-cap.png" alt="cap" width="32">
        </div>
        <div class="info_block__text">
          <p class="info_block__header">Learning</p>
          <p class="info_block__description">Category В</p>
        </div>
        <div class="info_block__button">
          <img src="../../assets/icons/chevron-circle-right.svg" alt="btn" width="24">
        </div>
      </div>
      <div class="info_block__bottom">
        <p class="info_block__bottom_text">{{data.filter(q => q.answered === true).length}} questions out of {{data.length}} passed</p>
        <ProgressBar :data="data"/>
      </div>
    </div>
    <div class="card_block">
      <Card text="DVSA Exam" :img="LExam" :style="1"/>
      <Card text="Express mode" :img="Rocket" :style="2"/>
      <Card text="Hazard perception" :img="TV" :style="2"/>
      <Card text="Road signs" :img="Eighty" :style="2"/>
      <Card text="Multiplayer Learning" :img="Controller" :isBig="true" :style="2"/>
    </div>
    <div class="buttons_block">
      <MainButton text="Mistakes" :img="Pen" />
      <MainButton text="Statistics" :img="Chart" />
      <MainButton text="Highway Code" :img="Book" />
      <MainButton text="Favorites" :img="Bookmark" />
    </div>
    <div class="navigation_block">
      <NavigationItem text="Home" @click="() => setActive('0')" :isActive="active === '0'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 21H14.8C14.634 21 14.5 20.866 14.5 20.7V16.5C14.5 15.119 13.381 14 12 14C10.619 14 9.5 15.119 9.5 16.5V20.7C9.5 20.866 9.36595 21 9.19995 21H6C4 21 3 20 3 18V11.651C3 9.65302 3.52305 9.34608 4.43005 8.58608L10.394 3.58498C11.323 2.80598 12.6781 2.80598 13.6071 3.58498L19.571 8.58608C20.477 9.34608 21.001 9.65302 21.001 11.651V18C21 20 20 21 18 21Z" :fill=" active === '0' ? '#FF7355' : '#87898F'"/>
        </svg>
      </NavigationItem>
      <NavigationItem text="Your plan" @click="() => setActive('1')" :isActive="active === '1'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18.75H10C7.932 18.75 6.25 17.068 6.25 15C6.25 12.932 7.932 11.25 10 11.25H14C15.241 11.25 16.25 10.241 16.25 9C16.25 7.759 15.241 6.75 14 6.75H12C11.586 6.75 11.25 6.414 11.25 6C11.25 5.586 11.586 5.25 12 5.25H14C16.068 5.25 17.75 6.932 17.75 9C17.75 11.068 16.068 12.75 14 12.75H10C8.759 12.75 7.75 13.759 7.75 15C7.75 16.241 8.759 17.25 10 17.25H12C12.414 17.25 12.75 17.586 12.75 18C12.75 18.414 12.414 18.75 12 18.75ZM9.5 6C9.5 8.037 7.67998 9.23891 6.47498 10.0349L6.27698 10.166C6.19298 10.222 6.096 10.25 6 10.25C5.904 10.25 5.80702 10.222 5.72302 10.166L5.52502 10.0349C4.32002 9.23891 2.5 8.037 2.5 6C2.5 4.07 4.07 2.5 6 2.5C7.93 2.5 9.5 4.07 9.5 6ZM7.02002 6C7.02002 5.448 6.57202 5 6.02002 5H6.01001C5.45801 5 5.01501 5.448 5.01501 6C5.01501 6.552 5.46802 7 6.02002 7C6.57202 7 7.02002 6.552 7.02002 6ZM21.5 17.25C21.5 19.287 19.68 20.4889 18.475 21.2849L18.277 21.416C18.193 21.472 18.096 21.5 18 21.5C17.904 21.5 17.807 21.472 17.723 21.416L17.525 21.2849C16.32 20.4889 14.5 19.287 14.5 17.25C14.5 15.32 16.07 13.75 18 13.75C19.93 13.75 21.5 15.32 21.5 17.25ZM19.02 17.25C19.02 16.698 18.572 16.25 18.02 16.25H18.01C17.458 16.25 17.015 16.698 17.015 17.25C17.015 17.802 17.468 18.25 18.02 18.25C18.572 18.25 19.02 17.802 19.02 17.25Z" :fill=" active === '1' ? '#FF7355' : '#87898F'"/>
        </svg>
      </NavigationItem>
      <NavigationItem text="Leaderboard" @click="() => setActive('2')" :isActive="active === '2'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 17.5001V21.0001H16.5V16.0001H19.5C20.5 16.0001 21 16.5001 21 17.5001ZM4.5 14.0001C3.5 14.0001 3 14.5001 3 15.5001V21.0001H7.5V14.0001H4.5ZM15 12.5001C15 11.5001 14.5 11.0001 13.5 11.0001H10.5C9.5 11.0001 9 11.5001 9 12.5001V21.0001H15V12.5001ZM11.626 2.76006L10.871 4.28301C10.814 4.39801 10.704 4.47702 10.578 4.49602L8.83501 4.7481C8.51501 4.7941 8.388 5.18606 8.619 5.41106L9.879 6.63409C9.971 6.72309 10.013 6.85206 9.991 6.97906L9.703 8.65105C9.644 8.99105 10.002 9.25002 10.308 9.09002L11.819 8.299C11.932 8.24 12.068 8.24 12.181 8.299L13.693 9.09099C13.999 9.25099 14.356 8.99203 14.297 8.65203L14.009 6.97808C13.987 6.85208 14.029 6.72311 14.121 6.63311L15.381 5.41009C15.613 5.18509 15.485 4.793 15.165 4.747L13.422 4.49505C13.295 4.47705 13.185 4.39703 13.129 4.28203L12.374 2.75909C12.221 2.45109 11.779 2.45106 11.626 2.76006Z" :fill=" active === '2' ? '#FF7355' : '#87898F'"/>
        </svg>
      </NavigationItem>
      <NavigationItem text="Profile" @click="() => setActive('3')" :isActive="active === '3'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00903 6.5C8.00903 4.294 9.80303 2.5 12.009 2.5C14.215 2.5 16.009 4.294 16.009 6.5C16.009 8.706 14.215 10.5 12.009 10.5C9.80303 10.5 8.00903 8.706 8.00903 6.5ZM14 12.5H10C5.94 12.5 4.5 15.473 4.5 18.019C4.5 20.296 5.71105 21.5 8.00305 21.5H15.9969C18.2889 21.5 19.5 20.296 19.5 18.019C19.5 15.473 18.06 12.5 14 12.5Z" :fill=" active === '3' ? '#FF7355' : '#87898F'"/>
        </svg>
      </NavigationItem>
    </div>
  </div>
</template>

<style>
.container{
  font-family: Inter, serif;
  margin: 0 auto;
  width: 360px;
  padding-top: 48px;
}
.info_block{
  border: 1px solid #F3F3F3;
  width: 328px;
  height: 156px;
  background-color: #FFF;
  border-radius: 20px;
  margin-bottom: 8px;
  margin-left: 16px;
}
.info_block__top{
  cursor: pointer;
  display: flex;
  margin-bottom: 16px;
  padding-top: 24px;
  padding-left: 24px;
}
.info_block__img{
  margin-right: 16px;
  background-color: #FFE3DD;
  border-radius: 100%;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info_block__text{
  margin-right: 97px;
}
.info_block__header{
  color: #2C2D2E;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
}
.info_block__description{
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #87898F;
}
.info_block__button{
  display: flex;
  align-items: center;
}
.info_block__bottom_text{
  margin-left: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #2C2D2E;
  margin-bottom: 8px;
}
.card_block{
  display: flex;
  flex-wrap: wrap;
  margin-left: 16px;
  margin-right: 16px;
}
.buttons_block{
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
}
.navigation_block{
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  width: 100%;
  height: 74px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
</style>