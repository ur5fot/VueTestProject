<template>
  <div class="buyer-block">
    <div class="buyer-block__image-block">
      <img :src="`${buyer.photo}`" alt="buyer photo" class="buyer-block__image-preview">
    </div>
    <div class="buyer-block__description">
      <div class="buyer-block__title">
        <h3><span class="buyer-name">{{buyer.name}}</span>, <span class="buyer-age">{{buyer.age}}</span> <span class="buyer-year">{{buyer.year}}</span></h3>
      </div>
      <p class="buyer-question">
        {{buyer.quest}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    buyer: {
      type: Object,
      required: true
    }
  }
}
</script>