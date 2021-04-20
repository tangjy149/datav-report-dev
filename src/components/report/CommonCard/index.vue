<template>
  <div class="commonCard">
    <div class="commonCard__title">{{title}}</div>
    <div class="commonCard__value">{{value}}</div>
    <div class="commonCard__chart">
      <slot name="chart"></slot>
    </div>
    <div class="commonCard__line" />
    <div class="commonCard__total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
.commonCard {
  &__title {
    font-size: 0.12rem;
    color: #999;
  }
  &__value {
    font-size: 0.25rem;
    color: #000;
    margin-top: 0.05rem;
    letter-spacing: 0.01rem;
  }
  &__chart {
    height: 0.5rem;
  }
  &__line {
    margin: 0.1rem 0;
    border-top: 0.01rem solid #eee;
  }
  &__total {
    color: #666;
    font-size: 0.12rem;
  }
}
</style>
