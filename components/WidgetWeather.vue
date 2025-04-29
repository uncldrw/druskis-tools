<script setup>
import { ref, onMounted } from "vue";

const config = useRuntimeConfig();
const API_KEY = config.public.weatherApiKey;
const city = ref("Berlin");
const weatherData = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchWeather = async () => {
  try {
    loading.value = true;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value},DE&units=metric&appid=${API_KEY}`
    );
    if (!response.ok)
      throw new Error("Wetterdaten konnten nicht geladen werden");
    weatherData.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchWeather();
});
</script>

<template>
  <div class="bg-white p-4 rounded-3xl w-full col-span-1">
    <div
      class="bg-after bg-gradient-to-bl from-cyan-500 to-blue-500 w-full rounded-xl min-h-24 p-4"
    >
      <div class="flex w-full justify-between text-xl text-white">
        <h5>Paderborn</h5>
        <Icon name="ph:cloud-sun" />
      </div>
      <div class="flex w-full justify-between text-xl text-white">
        <span class="text-5xl">25°</span>
        <div class="flex flex-col text-base text-right">
          <span>Teils Bewölkt</span>
          <span>H:27° T:18°</span>
        </div>
      </div>
    </div>
  </div>
</template>
