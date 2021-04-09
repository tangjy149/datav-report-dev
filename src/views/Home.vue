<template>
  <div class="home">report</div>
  <top-view />
  <sales-view />
  <bottom-view />
  <map-view />
</template>

<script>
import TopView from '../components/report/TopView'
import SalesView from '../components/report/SalesView'
import BottomView from '../components/report/BottomView'
import MapView from '../components/report/MapView'
export default {
  name: 'Home',
  components: {
    TopView, SalesView, BottomView, MapView
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  background-color: #eeeeee;
  box-sizing: border-box;
}
</style>
