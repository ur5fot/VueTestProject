<template>
  <div class="cover-title-block">
    <div class="cover-title">
      <span class="cover__hello-title">Добро пожаловать в игру</span>
      <h1 class="cover__header-title">Помоги <span class="d-block upper">фармацевту</span></h1>
    </div>
    <router-link to="/main">
      <button type="button" class="primary-button">Начать</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CoverTitleBlock"
}
</script>
<style scoped>
</style>