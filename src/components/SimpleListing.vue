<template>
  <div class="image-listing container">
    <ul class="grid-row">
      <li v-for="item in imgArray?.hits" :key="item.id" class="grid-item">
        <SimpleCard
            @click="openFullScreen(item.largeImageURL)"
            :alt="item.tags"
            :image="item.previewURL"
            :likes="item.views"
            :views="item.likes"
        />
      </li>
    </ul>
    <SimpleModal
      v-model:show="showFullScreen"
      :image="fullScreenImage"
      @close="closeFullScreen"
    />
  </div>
</template>

<script setup>
import http from '@/api/http-common';
import { ref } from "vue";
import SimpleCard from "@/components/ui/SimpleCard.vue";
import SimpleModal from "@/components/ui/SimpleModal.vue";

const imgArray = ref(null);
const showFullScreen = ref(false);
const fullScreenImage = ref('');

const fetchImages = async () => {
  try {
    const { data } = await http.get();
    imgArray.value = data;
  } catch (e) {
    console.log(e);
  }
};

const openFullScreen = (imageUrl) => {
  fullScreenImage.value = imageUrl;
  showFullScreen.value = true;
};

const closeFullScreen = () => {
  showFullScreen.value = false;
};

fetchImages()
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-row {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  grid-gap: 15px 15px;
  justify-content: center;
}

.grid-item {
  cursor: pointer;
  background: var(--light);
  box-shadow: var(--shadow);
  color: var(--dark);
  text-align: center;
  font-family: sans-serif;
}

.grid-item img {
  max-width: 100%;
  height: auto;
}

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
}

.fullscreen-enter-active,
.fullscreen-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fullscreen-enter,
.fullscreen-leave-to {
  opacity: 0;
}
</style>
