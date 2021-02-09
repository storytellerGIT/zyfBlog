<template>
  <div>
    <div class="backgroundImg"></div>
    <div class="main">
      <el-avatar class="avatar" :src="'http://49.235.206.70/img/avatar.jpg'" :size="150"></el-avatar>
      <p class="nickname">Mr.Zheng</p>
      <p class="introduction">temp</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
.backgroundImg {
  height: 100%;
  width: 100%;
  position: fixed;
  background-position: center;
  background: url("http://49.235.206.70/img/%E5%8D%97%E4%BA%AC%E7%9C%BC.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  filter: blur(7px);
  overflow:hidden;
  transform: scale(1.2);
}
.main{
  text-align: center; /*让div内部文字居中*/
  background-color: rgba(0, 0, 0, 0);
  border-radius: 20px;
  width: 300px;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.nickname{
  margin: 7px;
  color: #FFFFFF;
  font-size: 35px;
  font-family: 微软雅黑;
  font-weight: bold;
}
.introduction{
  color: #FFFFFF;
  font-size: 20px;
  font-family: 微软雅黑;
}
</style>
