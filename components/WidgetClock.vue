<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const time = ref("");
const date = ref("");
let timer = null;

const updateTime = () => {
  const now = new Date();

  // Format time (HH:MM:SS)
  time.value = now.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Format date (Day, DD.MM.YYYY)
  date.value = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <div class="bg-white p-4 rounded-3xl w-full col-span-1">
    <div
      class="bg-gradient-to-bl from-purple-500 to-pink-500 w-full rounded-xl min-h-24 p-4"
    >
      <div class="flex flex-col items-center justify-center text-white">
        <div class="text-4xl font-bold mb-2">{{ time }}</div>
        <div class="text-lg">{{ date }}</div>
      </div>
    </div>
  </div>
</template>
