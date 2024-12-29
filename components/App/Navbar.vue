<template>
  <div ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
    <nav class="mx-auto my-2 px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul
        class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5 
        overflow-x-auto sm:overflow-x-visible whitespace-nowrap sm:whitespace-normal">
        <li v-for="item in items" :key="item.path" class="flex-shrink-0 sm:flex-shrink">
          <UTooltip :text="item.name" :ui="{ popper: { strategy: 'absolute' } }">
            <ULink :to="item.path"
              class="relative px-5 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400">
              <h5 aria-hidden="true" class="w-auto h-5 z-10">{{ item.text }}</h5>
              <span v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
              <span v-if="$route.path === item.path"
                class="absolute h-8 w-8 z-0 rounded-full dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1"></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useFixedHeader } from 'vue-use-fixed-header'
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

const char = ref('');

const search = () => {
  if (char.value == '' || null) { }
  else {
    navigateTo('/char/' + char.value)
    char.value = ''
  }
}

const items = [
  { name: "Main", path: "/", text: "메인" },
  { name: "All", path: "/search/all", text: "전체" },
  { name: "Lostark", path: "/search/lostark", text: "로아" },
  { name: "Game", path: "/search/game", text: "게임" },
  { name: "K-Pop", path: "/search/k-pop", text: "가요" },
  { name: "Pop", path: "/search/pop", text: "팝송" },
  { name: "Anime", path: "/search/anime", text: "애니" },
  { name: "ETC", path: "/search/etc", text: "기타" },
];
</script>