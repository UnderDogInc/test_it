<template>
  <transition name="fade">
    <div v-if="props.show" class="fullscreen" @click="close">
      <img :src="props.image" class="fullscreen-img" alt="fullscreen-image"/>
    </div>
  </transition>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: ""
  }
})
const emits = defineEmits(['update:show'])

const close = () => {
  emits('update:show', false)
};
</script>

<style scoped>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-img {
  max-width: 90%;
  max-height: 90%;
  cursor: pointer;
  border-radius: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
