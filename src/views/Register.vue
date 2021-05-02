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
      <div class="wrapper__input">
        <input
          class="warpper__input__content"
          placeholder="请再输入一遍密码"
          type="password"
          v-model="checkpass"
        />
      </div>
      <div class="wrapper__register-button" @click="handleRegister">注册</div>
      <div class="wrapper__register-link" @click="handleLoginClick">立即登录</div>
      <Toast v-if="showToast" :message="toastMessage" />
    </el-card>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../utils/request'
import Toast, { useToastEffect } from '../components/Toast'
// 处理注册逻辑
const useRegisterEffect = (changeToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    checkpass: ''
  })
  const handleRegister = async () => {
    try {
      if (data.username === '' || data.password === '' || data.checkpass === '') {
        changeToast('用户名或密码为空')
      } else {
        if (data.password === data.checkpass) {
          const result = await post('/api/dataReport/register', {
            username: data.username,
            password: data.password
          })
          const str = JSON.parse(result)
          console.log(str)
          if (str.errno === 0 && str.message === 'success') {
            localStorage.isLogin = true
            router.push({ name: 'login' })
          } else if (str.message === 'exsit') {
            changeToast('用户名已存在')
          } else {
            changeToast('注册失败')
          }
        } else {
          changeToast('密码不相同')
        }
      }
    } catch (e) {
      changeToast('请求失败')
    }
  }
  const { username, password, checkpass } = toRefs(data)
  return { username, password, checkpass, handleRegister }
}

const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { showToast, toastMessage, changeToast } = useToastEffect()
    const { username, password, checkpass, handleRegister } = useRegisterEffect(changeToast)
    const { handleLoginClick } = useLoginEffect()
    return {
      handleLoginClick,
      username,
      password,
      checkpass,
      handleRegister,
      showToast,
      toastMessage
    }
  }
}
</script>

<style lang="scss" scoped>
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
  &__register-button {
    height: 0.48rem;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background-color: black;
    box-shadow: 0 0.04rem 0.08rem 0 black;
    border-radius: 0.04rem;
    color: #ffffff;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.48rem;
  }
  &__register-link {
    text-align: center;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
