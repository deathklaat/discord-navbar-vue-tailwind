<template>
  <div
    class="fixed top-0 left-0 h-screen w-16 m-0 pt-4 pr-1 flex flex-col dark:bg-gray-900 dark:text-white shadow"
  >
    <SideBarIcon icon="fire" />
    <SideBarIcon icon="plus" />
    <SideBarIcon icon="lightning" />
    <SideBarIcon icon="options" />
  </div>
</template>

<script setup>
import SideBarIcon from "./SideBarIcon.vue";
</script>
