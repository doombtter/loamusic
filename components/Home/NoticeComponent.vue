<!-- NoticeComponent.vue -->
<template>
    <div class="bg-white-100 p-4 rounded-lg shadow-md mb-4">
      <ul class="mt-2 space-y-2">
        <li v-for="notice in notices" :key="notice.id" class="bg-white p-2 rounded-lg shadow">
          <h3 class="text-md font-semibold">{{ notice.title }}</h3>
          <p class="text-sm text-gray-700">{{ notice.content }}</p>
          <!-- <p class="text-xs text-gray-500 text-right">{{ notice.date }}</p> -->
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // 공지 사항 데이터
  const notices = ref([
    {
      id: 1,
      title: "제보 바람!",
      content: "제보 바람이라는 단어를 확인한다면, 소셜 링크를 통해 제보해주세요",
      date: "2024-12-27"
    },
    {
      id: 2,
      title: "버그 발견!",
      content: "사이트 내 버그나 건의 사항이 있다면, 소셜 링크를 통해 연락주세요",
      date: "2024-12-26"
    },
    {
      id: 3,
      title: "데이터 갯수?",
      content: "현재 등록된 데이터 갯수는 " + "개 입니다.",
      date: "2024-12-26"
    }
  ])
  </script>
  