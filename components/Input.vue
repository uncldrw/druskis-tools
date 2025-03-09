<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

function onInput(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <span class="appInput focusable">
    <input placeholder="" type="text" :value="modelValue" @input="onInput" />
    <span
      v-if="placeholder.length"
      class="placeholder"
      :class="{ 'has-value': modelValue.length > 0 }"
    >
      {{ placeholder }}
    </span>
  </span>
</template>

<style lang="postcss">
@reference "../assets/css/main.postcss";

.appInput {
  @apply border rounded-md border-neutral-600 relative inline-block transition-all;

  input {
    @apply text-white text-sm outline-none px-3 py-2.5 bg-transparent w-full;
  }

  .placeholder {
    @apply absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-neutral-500 pointer-events-none transition-all opacity-100;

    &.has-value {
      @apply text-xs top-0 -translate-y-1/2 text-neutral-300;
    }
  }

  input:not(:placeholder-shown) + .placeholder {
    @apply opacity-0;
  }
}
</style>
