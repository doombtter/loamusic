<template>
    <main class="min-h-screen">
        <div class="space-y-24">
            <ul class="space-y-2">
                <h1 class="uppercase text-s font-semibold text-black-400 mb-4">이게 무슨 일이죠?</h1>
                <li>
                    <a
                        class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0">
                        <p class="truncate text-gray-700 dark:text-gray-200">
                            존재하지 않는 페이지입니다.
                        </p>
                    </a>
                </li>
                <li>
                    <a
                        class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0">
                        <p class="truncate text-gray-700 dark:text-gray-200">
                            이건 마치 404 오류 같군요
                        </p>
                    </a>
                </li>
                <li>
                    <a
                        class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0">
                        <p class="truncate text-gray-700 dark:text-gray-200">
                            로켓을 타고 다른 페이지로 이동하세요
                        </p>
                    </a>
                </li>
                <Rocket />
            </ul>
        </div>
    </main>
</template>

<script setup lang="ts">
</script>