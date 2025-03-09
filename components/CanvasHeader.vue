<template>
  <header class="header">
    <div class="header-container">
      <!-- LOGO -->
      <div class="logo-wrapper">
        <span class="logo-background">
          <span class="logo-text">S</span>
        </span>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
@reference "../assets/css/main.postcss";
.header {
  @apply h-12;
}

.header-container {
  @apply border p-1 bg-stone-800 border-stone-600/40 h-full rounded-lg;
}
</style>
