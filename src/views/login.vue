<template>
  <div class="wrapper">
    <el-card shadow="hover">
      <div class="wrapper__img iconfont">&#xe6ef;</div>
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
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../utils/request'
import Toast, { useToastEffect } from '../components/Toast'
const useLoginEffect = (changeToast) => {
  const router = useRouter()
  let isEmpty = true
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      if (data.username !== '' && data.password !== '') {
        isEmpty = false
      }
      const result = await post('/api/dataReport/login', {
        username: data.username,
        password: data.password
      })
      console.log(result)
      const str = JSON.parse(result)
      console.log(str.username)
      console.log(str.errno)
      if (str.errno === 0 && !isEmpty) {
        localStorage.username = str.message
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        changeToast('登录失败')
      }
    } catch (e) {
      changeToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'register' })
  }
  return { handleRegisterClick }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    // setup是用于告知，代码执行的大致逻辑
    const { showToast, toastMessage, changeToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(changeToast)
    const { handleRegisterClick } = useRegisterEffect()
    return { handleLogin, handleRegisterClick, username, password, showToast, toastMessage }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/viribles.scss";
.wrapper {
  width: 35%;
  margin: 0rem auto 0rem auto;
  padding: 1rem;
  &__img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
    font-size: 0.7rem;
    color: black;
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
    background-color: black;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.5);
    border-radius: 0.04rem;
    color: #ffffff;
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
