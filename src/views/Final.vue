<template>
  <div class="final-block">
    <div class="home-button-wrapper">
      <button type="button" class="home-button active">
        <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M19.414 0.913912C18.633 0.132864 17.3666 0.132862 16.5856 0.913911L1.41401 16.0855C0.154085 17.3454 1.04642 19.4997 2.82823 19.4997H3.00029V29.9997C3.00029 31.1043 3.89572 31.9997 5.00029 31.9997H13.001C14.1056 31.9997 15.001 31.1043 15.001 29.9997V24.0007C15.001 22.8961 15.8965 22.0007 17.001 22.0007H19.001C20.1056 22.0007 21.001 22.8961 21.001 24.0007V29.9997C21.001 31.1043 21.8965 31.9997 23.001 31.9997H31.0003C32.1049 31.9997 33.0003 31.1043 33.0003 29.9997V19.4997H33.1714C34.9532 19.4997 35.8455 17.3454 34.5856 16.0855L19.414 0.913912Z"/>
        </svg>
      </button>
    </div>
    <div class="final-image-block">
      <img src="../assets/image/image.jpg" alt="what i do here image">
    </div>
    <div class="your-result">
      <div class="your-result__percentage-block">
        <div class="your-result__result result1">
          <span class="your-result__percentage">100%</span>
          <span class="your-result__medication">Препарат 1</span>
        </div>
        <div class="your-result__result result2">
          <span class="your-result__percentage">100%</span>
          <span class="your-result__medication">Препарат 2</span>
        </div>
        <div class="your-result__result result3">
          <span class="your-result__percentage">100%</span>
          <span class="your-result__medication">Препарат 3</span>
        </div>
      </div>
      <div class="your-result__text-block">
        <div class="your-result__text-result">
          <h3 class="your-result__text-title">
            Ваш результат:
            <span class="your-result__your-result">&#171;Что я здесь делаю?&#187;</span>
          </h3>
          <p class="your-result__text-description">
            Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.
          </p>
        </div>
      </div>
    </div>
    <div class="try-again-button-block">
      <button type="button" class="try-again-button">Попробовать ещё</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Final"
}
</script>
<style scoped>
</style>