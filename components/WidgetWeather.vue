<script setup>
import { ref, onMounted, computed } from "vue";

const city = ref("Berlin");
const weatherData = ref(null);
const hourlyData = ref(null);
const loading = ref(true);
const error = ref(null);
const containerRef = ref(null);
const sunriseTime = ref(null);
const sunsetTime = ref(null);

const isSunrise = computed(() => {
  if (!sunriseTime.value) return false;
  const now = new Date();
  const sunrise = new Date(sunriseTime.value);

  // Prüfe ob die aktuelle Stunde mit der Sonnenaufgangsstunde übereinstimmt
  return now.getHours() === sunrise.getHours();
});

const isSunset = computed(() => {
  if (!sunsetTime.value) return false;
  const now = new Date();
  const sunset = new Date(sunsetTime.value);

  // Prüfe ob die aktuelle Stunde mit der Sonnenuntergangsstunde übereinstimmt
  return now.getHours() === sunset.getHours();
});

const formatHour = (timestamp, index) => {
  const now = new Date();
  const hour = new Date(timestamp).getHours();
  const currentHour = now.getHours();

  // Wenn es die erste Stunde ist (index 0), zeige "Jetzt"
  if (index === 0) {
    return "Jetzt";
  }

  return `${hour.toString().padStart(2, "0")} Uhr`;
};

const formatHourSunRiseSet = (timestamp, index) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

const isSunriseOrSunset = (timestamp) => {
  if (!sunriseTime.value || !sunsetTime.value) return false;

  const time = new Date(timestamp);
  const sunrise = new Date(sunriseTime.value);
  const sunset = new Date(sunsetTime.value);

  // Prüfe ob die Stunde mit Sonnenauf- oder -untergang übereinstimmt
  return (
    time.getHours() === sunrise.getHours() ||
    time.getHours() === sunset.getHours()
  );
};

const fetchWeather = async () => {
  try {
    loading.value = true;

    // First get coordinates for the city
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city.value}&count=1&language=de&format=json`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("Stadt nicht gefunden");
    }

    const { latitude, longitude } = geoData.results[0];

    // Then get weather data including sunrise/sunset
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=sunrise,sunset&timezone=Europe%2FBerlin`
    );

    if (!weatherResponse.ok) {
      throw new Error("Wetterdaten konnten nicht geladen werden");
    }

    const data = await weatherResponse.json();

    // Speichere Sonnenauf- und -untergangszeiten
    sunriseTime.value = data.daily.sunrise[0];
    sunsetTime.value = data.daily.sunset[0];

    // Finde den Index der aktuellen Stunde
    const now = new Date();
    const currentHour = now.getHours();
    const startIndex = data.hourly.time.findIndex((time) => {
      const hour = new Date(time).getHours();
      return hour === currentHour;
    });

    // Extrahiere die nächsten 24 Stunden ab der aktuellen Stunde
    const next24Hours = {
      time: data.hourly.time.slice(startIndex, startIndex + 24),
      temperature_2m: data.hourly.temperature_2m.slice(
        startIndex,
        startIndex + 24
      ),
      weathercode: data.hourly.weathercode.slice(startIndex, startIndex + 24),
    };

    weatherData.value = {
      current: {
        temp: next24Hours.temperature_2m[0],
        weathercode: next24Hours.weathercode[0],
      },
    };
    hourlyData.value = next24Hours;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "Klarer Himmel",
    1: "Überwiegend klar",
    2: "Teilweise bewölkt",
    3: "Bedeckt",
    45: "Nebel",
    48: "Nebel mit Raureif",
    51: "Leichter Nieselregen",
    53: "Mäßiger Nieselregen",
    55: "Starker Nieselregen",
    61: "Leichter Regen",
    63: "Mäßiger Regen",
    65: "Starker Regen",
    71: "Leichter Schneefall",
    73: "Mäßiger Schneefall",
    75: "Starker Schneefall",
    80: "Leichte Regenschauer",
    81: "Mäßige Regenschauer",
    82: "Starke Regenschauer",
    85: "Leichte Schneeschauer",
    86: "Starke Schneeschauer",
    95: "Gewitter",
    96: "Gewitter mit leichtem Hagel",
    99: "Gewitter mit starkem Hagel",
  };
  return weatherCodes[code] || "Unbekannt";
};

const getWeatherIcon = (weathercode, timestamp) => {
  const hour = new Date(timestamp).getHours();
  const isDay = hour >= 6 && hour < 18;

  // Wettercodes und entsprechende Icons
  const weatherIcons = {
    0: isDay ? "ph:sun" : "ph:moon", // Klarer Himmel
    1: isDay ? "ph:sun-dim" : "ph:moon", // Überwiegend klar
    2: isDay ? "ph:cloud-sun" : "ph:cloud-moon", // Teilweise bewölkt
    3: "ph:cloud", // Bedeckt
    45: "ph:cloud-fog", // Nebel
    48: "ph:cloud-fog", // Nebel mit Raureif
    51: "ph:cloud-drizzle", // Leichter Nieselregen
    53: "ph:cloud-drizzle", // Mäßiger Nieselregen
    55: "ph:cloud-drizzle", // Starker Nieselregen
    61: "ph:cloud-rain", // Leichter Regen
    63: "ph:cloud-rain", // Mäßiger Regen
    65: "ph:cloud-rain", // Starker Regen
    71: "ph:snowflake", // Leichter Schneefall
    73: "ph:snowflake", // Mäßiger Schneefall
    75: "ph:snowflake", // Starker Schneefall
    80: "ph:cloud-rain", // Leichte Regenschauer
    81: "ph:cloud-rain", // Mäßige Regenschauer
    82: "ph:cloud-rain", // Starke Regenschauer
    85: "ph:snowflake", // Leichte Schneeschauer
    86: "ph:snowflake", // Starke Schneeschauer
    95: "ph:cloud-lightning", // Gewitter
    96: "ph:cloud-lightning", // Gewitter mit leichtem Hagel
    99: "ph:cloud-lightning", // Gewitter mit starkem Hagel
  };

  return weatherIcons[weathercode] || "ph:question";
};

onMounted(() => {
  fetchWeather();
});
</script>

<template>
  <div class="bg-white p-4 rounded-3xl w-full col-span-1">
    <div
      class="bg-after bg-gradient-to-bl from-cyan-500 to-blue-500 w-full rounded-xl min-h-1/2 max-h-1/2 p-4"
    >
      <div class="flex w-full justify-between text-xl text-white">
        <h5>{{ city }}</h5>
        <Icon
          :name="
            weatherData
              ? getWeatherIcon(
                  weatherData.current.weathercode,
                  hourlyData.time[0]
                )
              : 'ph:cloud-sun'
          "
        />
      </div>
      <div class="flex w-full justify-between text-xl text-white">
        <span class="text-5xl"
          >{{ Math.round(weatherData?.current.temp) }}°</span
        >
        <div class="flex flex-col text-base text-right">
          <span>{{
            getWeatherDescription(weatherData?.current.weathercode)
          }}</span>
        </div>
      </div>
      <div>
        <h6 class="text-sm mb-2 text-white">24-Stunden Vorhersage:</h6>
        <template v-if="loading">
          <div class="grid grid-cols-6 gap-1">
            <div
              :class="[
                ' text-white inline-flex flex-col rounded-lg p-2 backdrop-blur-sm items-center bg-white/10 ',
              ]"
              v-for="n in 6"
              :key="n"
            >
              <span class="text-xs w-12 h-4 text-center">hour</span>
              <Icon name="ph:empty" class="w-4 h-4 my-1" />
              <span class="text-sm font-medium w-8 h-4 pb-5">temp</span>
            </div>
          </div>
        </template>
        <swiper-container
          v-else
          :space-between="4"
          :slides-per-view="6"
          ref="containerRef"
          class="flex gap-0 transition-all cursor-grab active:cursor-grabbing"
          :mousewheel="true"
          :free-mode="true"
        >
          <swiper-slide
            v-for="(temp, index) in hourlyData.temperature_2m"
            :key="index"
            class="cursor-grab active:cursor-grabbing"
          >
            <div
              :class="[
                'text-white  flex flex-col rounded-lg p-2 backdrop-blur-sm items-center bg-white/10',
              ]"
            >
              <span class="text-xs">{{
                formatHour(hourlyData.time[index], index)
              }}</span>
              <Icon
                :name="
                  getWeatherIcon(
                    hourlyData.weathercode[index],
                    hourlyData.time[index]
                  )
                "
                class="w-4 h-4 my-1"
              />
              <span class="text-sm font-medium">{{ Math.round(temp) }}°</span>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.flex::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
