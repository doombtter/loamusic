<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">Social Links</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <Icon :name="link.icon" class="w-6 h-6"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "Discord",
    url: "https://discord.gg/cw7qArVxjz",
    icon: "mdi:discord",
  },
  {
    name: "LOAVESTING",
    url: "https://loavesting.com",
    icon: "mdi:github",
  },
  {
    name: "KakaoTalk",
    url: "https://open.kakao.com/o/sjrp00Ug",
    icon: "mdi:message",
  },
];
</script>
