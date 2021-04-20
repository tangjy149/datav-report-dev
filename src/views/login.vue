<template>
  <div class="wrapper">
    <el-card shadow="hover">
      <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
      <div class="wrapper__input">
        <input class="warpper__input__content" placeholder="请输入用户名" v-model="username" />
      </div>
      <div class="wrapper__input">
        <input
          class="warpper__input__content"
          placeholder="请输入密码"
          type="password"
          v-model="password"
        />
      </div>
      <div class="wrapper__login-button" @click="handleLogin">登录</div>
      <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
      <Toast v-if="showToast" :message="toastMessage" />
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../style/viribles.scss";
.wrapper {
  width: 35%;
  margin: 1rem auto 0rem auto;
  &__img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    .warpper__input__content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      color: rgba(0, 0, 0, 0.5);
      font-size: 0.15rem;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
        font-size: 0.15rem;
      }
    }
  }
  &__login-button {
    height: 0.48rem;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background-color: $btn-bgColor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: $bgColor;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.48rem;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
