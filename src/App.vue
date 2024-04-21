<template>
  <SimpleCov/>
  <SimpleListing msg="Welcome to Your Vue.js App"/>
</template>

<script setup>
import SimpleListing from './components/SimpleListing.vue'
import SimpleCov from "@/components/ui/SimpleCov.vue";
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
