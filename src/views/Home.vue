<template>
  <div class="home">
    <top-bar />
    <top-view />
    <sales-view />
    <bottom-view />
  </div>
</template>

<script>
import TopView from '../components/report/TopView'
import SalesView from '../components/report/SalesView'
import BottomView from '../components/report/BottomView'
import TopBar from '../components/TopBar'
export default {
  name: 'Home',
  components: {
    TopView, SalesView, BottomView, TopBar
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 12rem;
  padding: 0.2rem;
  background-color: #eeeeee;
  box-sizing: border-box;
}
</style>
