<template>
  <div>
    <h1>写真コーナー</h1>
    <div class="content">
    <img src="@/assets/ramen1.jpeg" alt="ramen" class="ramen_img">
    <img src="@/assets/ramen2.jpeg" alt="ramen" class="ramen_img">
    <img src="@/assets/ramen3.jpeg" alt="ramen" class="ramen_img">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Picts',
  
}
</script>

<style lang="css" scoped>
  h1 {
    color: #3E5C76;
    text-align: center;
  }
  .ramen_img {
    height: 300px;
    display:block;
    margin: 40px auto;
  }
  .content {
    display:flex;
  }
</style>
