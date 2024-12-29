<script setup>
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';
import api from '../../src/api';

const route = useRoute();
const variable = computed(() => route.params.slug);

const currentPage = ref(1); // 현재 페이지 번호
const pageSize = ref(10); // 페이지당 항목 수

// API 데이터 가져오기
const { data, pending } = useAsyncData("api-data", () => {
    if (variable.value[0] === 'all') {
        return api.searchMusic(null, null);
    } else {
        return api.searchMusic(null, variable.value[0]);
    }
});

// 프로젝트 데이터 가져오기
const { data: projects } = useAsyncData("projects-all", () =>
    queryContent("/loavesting").find()
);

const char = ref('');
const apidata = ref(data.value);
const isApiLoading = ref(pending.value);

watchEffect(() => {
    apidata.value = data.value;
    isApiLoading.value = pending.value;
});

const search = async () => {
    if (char.value === '' || char.value === null) {
        return;
    }

    isApiLoading.value = true;
    if (variable.value[0] === 'all') {
        apidata.value = await api.searchMusic(char.value, null);
    } else {
        apidata.value = await api.searchMusic(char.value, variable.value[0]);
    }
    isApiLoading.value = false;
};

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return apidata.value?.result.slice(start, end) || [];
});

const totalPages = computed(() => Math.ceil((apidata.value?.result.length || 0) / pageSize.value));

const changePage = (pageNumber) => {
    currentPage.value = pageNumber;
};

const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    const delta = 2;
    const range = [];
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
        range.push(i);
    }
    if (current - delta > 2) {
        range.unshift("...");
    }
    if (current + delta < total - 1) {
        range.push("...");
    }
    range.unshift(1);
    if (total > 1) {
        range.push(total);
    }
    return range;
});
</script>

<template>
    <div class="container mx-auto p-4">
        <div class="mb-8">
            <div class="flex items-center gap-3">
                <UInput :placeholder="variable + ' 에서 아티스트 / 곡명 / 카테고리 검색'" class="flex-1" size="lg" v-model="char"
                    @keydown.enter="search" />
                <UButton label="검색 &rarr;" size="lg" color="black" @click="search" />
            </div>
        </div>
        <div v-if="isApiLoading">
            <main class="min-h-screen flex justify-center items-center">
                <p class="text-gray-500">데이터를 불러오는 중입니다...</p>
            </main>
        </div>
        <!-- API 데이터 결과 -->
        <div v-else-if="paginatedData && paginatedData.length !== 0">
            <ul class="space-y-4">
                <li v-for="item in paginatedData" :key="item.uid" class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h2 class="text-lg font-bold">{{ item.title }} <span class="text-sm text-gray-500 ml-2">by {{ item.artist }}</span></h2>
                        <p class="text-gray-600">카테고리: {{ item.subcategory }}</p>
                    </div>
                    <p class="text-xl text-gray-700">{{ item.people }}명</p>
                </li>
            </ul>
            <!-- 페이징 처리 -->
            <div class="flex justify-center mt-4 space-x-2">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                    이전
                </button>
                <button v-for="page in visiblePages" :key="page" @click="changePage(page)" 
                        class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        :class="{'bg-gray-400': currentPage === page}" 
                        :disabled="page === '...'">
                    {{ page }}
                </button>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50">
                    다음
                </button>
            </div>
        </div>
        <!-- 에러 처리 -->
        <div v-else>
            <main class="min-h-screen">
                <div class="space-y-8">
                    <h1 class="uppercase text-s font-semibold text-black-400 mb-4">이게 무슨 일이죠?</h1>
                    <ul class="space-y-2">
                        <li> <a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0">
                            <p class="truncate text-gray-700 dark:text-gray-200">검색 결과가 없습니다.</p>
                        </a> </li>
                        <li> <a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0">
                            <p class="truncate text-gray-700 dark:text-gray-200">혹은, 로아베스팅 API 서버에 문제가 발생했습니다.</p>
                        </a> </li>
                        <li> <a class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0">
                            <p class="truncate text-gray-700 dark:text-gray-200">어쩔 수 없이 귀여운 로켓을 봐야할거같아요</p>
                        </a> </li>
                        <Rocket />
                    </ul>
                    <div>
                        <h1 class="uppercase text-s font-semibold text-black-400 mb-4">아니면...</h1>
                        <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
