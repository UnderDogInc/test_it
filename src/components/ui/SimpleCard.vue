<template>
  <div class="simple-card">
    <img class="simple-card__image" :src="props.image" :alt="props.alt">
    <div class="simple-card__info">
      <div class="simple-card__likes">
        {{props.likes}}
        <LikeIcon fill="green"/>
      </div>
      <div class="simple-card__views">
        <ViewIcon fill="blue"/>
        {{props.likes}}
      </div>
    </div>
  </div>
</template>

<script setup>
import LikeIcon from "@/components/ui/icons/LikeIcon.vue"
import { defineProps } from 'vue'
import ViewIcon from "@/components/ui/icons/ViewIcon.vue";
const props = defineProps({
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: 'http://via.placeholder.com/320x320',
  },
  alt: {
    type: String,
    default: 'sorry im is empty',
  }
})
</script>

<style scoped>
.simple-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  gap: 15px;
  padding-bottom: 10px;
  transition: 0.3s ease-in-out;
}
.simple-card__image {
  width: 100%;
  height: 320px;
  display: block;
  object-fit: cover;
}
.simple-card:hover {
  opacity: 0.8;
}
.simple-card__likes {
  display: flex;
  align-items: center;
  gap: 10px;
  color: green
}
.simple-card__views {
  display: flex;
  align-items: center;
  gap: 10px;
  color: blue;
}
</style>
