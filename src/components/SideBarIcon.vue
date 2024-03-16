<template>
  <div class="sidebar-icon group" @click="testDarkMode">
    <span v-html="svgIcon" />
    <span class="sidebar-tooltip group-hover:scale-100">{{ tooltipText }}</span>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import icons from "../jsIcons";
import useDarkMode from "../composables/useDarkMode";

const props = defineProps({
  icon: String,
  tooltip: String,
});

const svgIcon = computed(() => icons[props.icon]);
const tooltipText = computed(() => props.tooltip ?? "tooltip");

const darkMode = useDarkMode();
const testDarkMode = () => darkMode.toggle();
</script>

<style scoped>
.sidebar-icon {
  @apply relative flex items-center justify-center w-12 h-12 mb-2
    mx-auto shadow-lg bg-gray-800 
    text-green-500 hover:bg-green-600 hover:text-white
    rounded-3xl hover:rounded-xl
    transition-all duration-300 ease-linear
    cursor-pointer;
}

.sidebar-tooltip {
  @apply absolute w-auto p-2 m-2 min-w-max left-14
    rounded-md shadow-md
    text-white bg-gray-900
    text-xs font-bold
    transition-all duration-100 scale-0 origin-left;
}
</style>
