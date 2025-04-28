<script setup>
const attrs = useAttrs();
const slots = useSlots();
const props = defineProps({
  label: String,
  loading: Boolean,
  loadingIcon: {
    type: String,
    default: "svg-spinners:ring-resize",
  },
  icon: String,
  iconPos: {
    type: String,
    default: "right",
  },
});

onMounted(() => {
  // warnings
  if (attrs.href && attrs.to) {
    console.warn(
      '[CmsButton] Conflict: Both "href" and "to" props were provided. ' +
        'Please use only one. "href" will take precedence.'
    );
  }
});
</script>

<template>
  <component
    :is="attrs.href ? 'a' : attrs.to ? 'router-link' : 'button'"
    class="relative inline-flex cursor-pointer select-none items-center gap-1 rounded-md px-4 py-2.5 text-sm opacity-100 transition-all justify-center bg-white border border-white text-neutral-950"
    :class="{
      'appBtn variant-default focusable': true,
      'appBtn-vertical': ['top', 'bottom'].includes(iconPos),
      'appBtn-horizontal': ['left', 'right'].includes(iconPos),
      appBtn__loading: loading,
    }"
  >
    <span :class="{ invisible: loading && !icon }">
      <span v-if="label">{{ label }}</span>
      <slot v-else>
        <span v-if="!slots.default && !icon"></span>
      </slot>
    </span>
    <transition name="appBtn-fade" mode="out-in">
      <template v-if="!loading && icon">
        <slot v-if="slots.icon" name="icon" />
        <Icon
          v-else
          :name="icon"
          class="appBtn-icon"
          :class="{
            'order-first': ['top', 'left'].includes(iconPos),
            'order-last': ['bottom', 'right'].includes(iconPos),
          }"
        />
      </template>
      <template v-else-if="loading">
        <slot v-if="slots.loader" name="loader" />
        <Icon
          v-else
          :name="loadingIcon"
          class="appBtn-icon appBtn-icon-loader"
          :class="{
            'order-first': ['top', 'left'].includes(iconPos),
            'order-last': ['bottom', 'right'].includes(iconPos),
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2':
              loading && !icon,
          }"
        />
      </template>
    </transition>
  </component>
</template>

<style lang="postcss">
@reference "../assets/css/main.postcss"
.appBtn-fade-enter-active,
.appBtn-fade-leave-active {
  @apply transition-opacity duration-0;
}
.appBtn-fade-enter,
.appBtn-fade-leave-to {
  opacity: 0;
}

.appBtn-fade-enter-from {
  opacity: 0;
}
.appBtn-fade-leave {
  opacity: 1;
}

.appBtn {
  & > .appBtn-icon {
    @apply size-5;
    &.appBtn-icon-loader {
      @apply scale-75;
    }
  }

  &.appBtn-vertical {
    @apply flex-col;
  }
  &.appBtn-horizontal {
    @apply flex-row;
  }
  &.appBtn__loading {
    @apply cursor-default opacity-90;
  }
  &:hover {
    @apply bg-stone-200 border-stone-200;
  }
}
</style>
