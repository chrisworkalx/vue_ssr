<template>
  <div id="app">
    <div class="demo" @click="handleClick">hello vue ssr</div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('点击了');
    }
  }
};
</script>

<style scoped>
.demo {
  width: 300px;
  height: 300px;
  background-color: #f40;
  color: #fff;
}
</style>
