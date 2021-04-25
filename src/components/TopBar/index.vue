<template>
  <el-card shadow="hover">
    <div class="topWrapper">
      <div class="topWrapper__title">可视化展示</div>
      <div class="topWrapper__funcBox">
        <div class="topWrapper__funcBox__buttons">
          <el-button type="text" class="topWrapper__funcBox__buttons__item">数据报表</el-button>
          <el-button
            type="text"
            class="topWrapper__funcBox__buttons__item"
            @click="handleDataV"
          >数据大屏</el-button>
        </div>
        <div class="topWrapper__funcBox__user">
          <div class="topWrapper__funcBox__user__icon iconfont">&#xe744;</div>
          <div class="topWrapper__funcBox__user__name">{{username}}</div>
          <div class="topWrapper__funcBox__user__icon iconfont" @click="handleBackLogin">&#xe745;</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import { useRouter } from 'vue-router'
const useRouterEffect = () => {
  const router = useRouter()
  const handleBackLogin = () => {
    localStorage.username = null
    router.push({ name: 'login' })
  }
  const handleDataV = () => {
    window.location.href = 'http://localhost:8081'
  }
  return { handleBackLogin, handleDataV }
}

export default {
  data () {
    return {
      username: localStorage.username
    }
  },
  setup () {
    const { handleBackLogin, handleDataV } = useRouterEffect()
    return { handleBackLogin, handleDataV }
  }
}
</script>

<style lang="scss" scoped>
.topWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 0.61rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &__title {
    display: flex;
    flex: 40%;
    justify-content: flex-start;
    padding-left: 0.95rem;
    font-size: 0.26rem;
    font-weight: bolder;
  }
  &__funcBox {
    display: flex;
    flex: 60%;
    justify-content: space-around;
    align-items: center;
    color: #666666;
    &__buttons {
      display: flex;
      flex: 75%;
      justify-content: flex-end;
      padding-right: 0.5rem;
      &__item {
        font-size: 0.17rem;
        color: #666666;
      }
    }
    &__user {
      flex: 25%;
      display: flex;
      justify-content: flex-start;
      &__icon {
        font-size: 0.26rem;
        margin-right: 0.1rem;
        margin-left: 0.2rem;
      }
      &__name {
        line-height: 0.24rem;
        font-size: 0.14rem;
      }
    }
  }
}
</style>
