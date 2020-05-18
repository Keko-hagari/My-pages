<template>
  <div>
    <h1>自己紹介</h1>
    <img src="@/assets/cat.jpg" alt="cat" class="cat-image">
    <div class="content">
      <p class="content__title">名前</p>
      <p>葉狩 康憲</p>
    </div>
    <div class="content">
      <p class="content__title">性別</p>
      <p>男</p>
    </div>
    <div class="content">
      <p class="content__title">趣味</p>
      <p>twitter</p>
    </div>
    <div class="about">
      <router-link to="/about">詳細はこちら</router-link>
    </div>
  </div>
</template>

<script >

export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style lang="css" scoped>
h1 {
  font-size: 40px;
  text-align: center;
}
.cat-image {
  height: 200px;
  display: block;
  margin: 10px auto;
}
.content{
  display: flex;
  justify-content: center;
  margin: 20px;
}
.content__title{
  font-size: 30px;
  color: gray;
  line-height: 28px;
  margin-right: 10px;
}
p {
  font-size: 30px;
  line-height: 28px;
}
.about {
  text-align: center;
  font-size: 25px;
  text-decoration: none;
}
</style>
