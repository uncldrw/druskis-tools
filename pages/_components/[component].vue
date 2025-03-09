<script></script>

<template>
  <div class="w-screen h-screen grid place-content-center">
    <template v-if="$route.params.component">
      <component :is="'Button'">Hi</component></template
    >
    <p v-else>Keine Komponente</p>
  </div>
</template>
