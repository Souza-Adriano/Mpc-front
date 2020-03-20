<template>
  <div id="Home">
    <div class="start-animation">
      <div>
        <Lottie path="animation/loader"/>
      </div>
      <h1 class="home-title">Mpic</h1>
      <p>RaspiBerry PI</p>
    </div>
  </div>
</template>

<script>
import Lottie from '@/components/animation/Lottie'
export default {
  name: 'Home',
  components: { Lottie }
}
</script>

<style>
#Home {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.home-title {
  text-align: center;
}
</style>