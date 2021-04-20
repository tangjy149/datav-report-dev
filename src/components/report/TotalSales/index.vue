<template>
  <common-card title="累计销售额" value="￥ 34,234,493">
    <template v-slot:chart>
      <div class="wrapper">
        <div class="wrapper__compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="wrapper__compare__increase"></div>
        </div>
        <div class="wrapper__compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="wrapper__compare__decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额:</span>
      <span class="emphasis">￥ 34,234,493</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin]
}
</script>
<style lang="scss" scoped>
@import "../../../style/mixins.scss";
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__compare {
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    margin-top: 0.03rem;
    &__increase {
      @include commonIncrease;
    }
    &__decrease {
      @include commonDecrease;
    }
  }
}

.emphasis {
  @include commonEmphasis;
}
</style>
