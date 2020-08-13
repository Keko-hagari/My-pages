<template>
  <div>
    <div class="content">
      <div class="about_left">
        <img src="@/assets/about.jpg" alt="about" class="about_image">
      </div>
      <div class="about_right">
        <p>初めまして、エンジニア志望の葉狩 康憲です。<p/>
        <p>フロントエンドに就けるよう頑張ります。</p>
        <router-link to="/picts">よろしければこちらもどうぞ。</router-link>
        <p><a href="https://keko-hagari.github.io/calender-vuejs/">ポートフォリオ一作目</a></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
   
  }
}
</script>

<style lang="css" scoped>
  .about_image {
    height: 900px;
    display: block;
    margin-top: 20px;
    margin-left: 10px; 
  }
  .content {
    display: flex
  }
  .about_right {
    margin-left: 180px;
    margin-top: 100px;
    font-size: 20px;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: #748CAB;
  }
</style>
