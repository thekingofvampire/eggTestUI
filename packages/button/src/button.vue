<script setup lang="ts">

import { hello } from '@eggtestui/shared';

interface Props {
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: 'world',
});

const btnCLick = () => {
  hello(props.text);
};

const obj = {
  a: 1
}
</script>

<template>
  <button
    class="egg-button"
    @click="btnCLick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.egg-button {
  padding: 10px 20px;
  margin: 0;
  outline: 0;
  background: orange;
  border-radius: 8px;
  color: white;
  font-size: 14px;
}
</style>
