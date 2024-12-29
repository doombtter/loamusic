<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <!-- 모달 헤더 -->
        <header class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">{{ classname }}</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </header>
  
        <!-- 모달 본문 -->
        <div>
          <p class="text-sm text-gray-500 mb-4">각인별 점수를 입력해주세요:</p>
          <div v-for="(levels, engraving) in engravings" :key="engraving" class="mb-4">
            <h3 class="text-sm font-semibold text-gray-700">{{ engraving }}</h3>
            <div class="flex items-center space-x-2">
              <input
                v-for="(value, level) in levels"
                :key="level"
                type="number"
                class="border rounded-md px-2 py-1 w-14 text-center"
                v-model="engravingScores[engraving][level]"
                placeholder="0"
              />
            </div>
          </div>
        </div>
  
        <!-- 모달 하단 -->
        <footer class="flex justify-end space-x-2">
          <button @click="closeModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
            취소
          </button>
          <button @click="saveScores" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            저장
          </button>
        </footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Props 받기
  const props = defineProps({
    classname: String,
    engravings: Object,
    initialScores: Object,
  });
  
  // 데이터 상태
  const engravingScores = ref(JSON.parse(JSON.stringify(props.initialScores)));
  
  // 이벤트 Emit
  const emit = defineEmits(['close', 'save']);
  
  // 모달 닫기
  function closeModal() {
    emit('close');
  }
  
  // 점수 저장
  function saveScores() {
    emit('save', engravingScores.value);
  }
  </script>  