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
  @apply h-14;
}

.header-container {
  @apply border p-1 bg-stone-800 border-stone-600/40 h-full rounded-lg;
}

.logo-wrapper {
  @apply h-full;
}

.logo-background {
  @apply h-full aspect-square inline-grid rounded-md place-content-center relative transition-[background] cursor-pointer;
  background: conic-gradient(
    oklch(0.457 0.24 277.023),
    oklch(0.457 0.24 277.023),
    oklch(0.457 0.24 277.023)
  );
  &:after {
    @apply from-indigo-950 to-stone-950 bg-gradient-to-br size-[calc(100%-2px)] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md z-10;
    content: "";
  }
  &:before {
    @apply bg-stone-900 size-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md -z-10 filter blur-xs shadow;
    content: "";
    background: conic-gradient(
      oklch(0.457 0.24 277.023),
      oklch(0.592 0.249 0.584),
      oklch(0.457 0.24 277.023)
    );
  }
}

.logo-text {
  @apply font-black italic text-white text-3xl relative z-20;
}
</style>
