<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="로아뮤직" :description="description" />
    <div class="space-y-24">
      <NoticeComponent />
      <HomeSocialLinks />
      <!-- <HomeFeaturedProjects />
      <HomeFeaturedArticles /> -->
    </div>
  </main>
</template>

<script setup>
import NoticeComponent from '~/components/Home/NoticeComponent.vue';

const description = "편리한 로스트아크 악보찾기";
useSeoMeta({
  title: "로아뮤직",
  description,
});
</script>