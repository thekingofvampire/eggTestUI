<script setup lang="ts">
import { hello } from '@eggtestui/shared';

interface Props {
  modelValue?: string;
}
withDefaults(defineProps<Props>(), {
  modelValue: 'balabala',
});

const emit = defineEmits<{
  (event: 'update:modelValue', val: string): void;
}>();

const inputE = (e: any) => {
  const { value } = e.target;
  emit('update:modelValue', value);
  hello(value);
};
</script>

<template>
  <input
    type="text"
    class="egg-input"
    :value="modelValue"
    @input="inputE"
  >
</template>

<style scoped lang="scss"></style>
