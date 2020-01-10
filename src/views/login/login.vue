<template>
  <div class="login-content">
    <div class="login-left">
      <!-- 标题 -->
      <div class="box-title">
        <div class="left-img"><img src="../../assets/login-logo.png" alt=""></div>
        <div class="left-title">黑马面面</div>
        <div class="left-line"></div>
        <div class="left-user-title">用户登录</div>
      </div>
      
    </div>
    <div class="login-right">
      <img src="../../assets/login_banner_ele.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
/* 背景主体布局 */
.login-content{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background:linear-gradient(225deg,rgba(20,147,250,1),rgba(1,198,250,1));
  // 左边登录css样式
  .login-left {
    display: inline-block;
    width: 478px;
    height: 550px;
    background-color: #F5F5F5;
    box-sizing: content-box;
    // 标题 css样式
    .box-title{
      display: flex;
      align-items: center;
      padding: 48px 0 0 48px;
      // logo css样式
      .left-img {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      // 黑马面面 css样式
      .left-title{
        font-size: 24px;
        color: #0C0C0C;
      }
      // 线条
      .left-line{
        width: 1px;
        height: 28px;
        background-color: #C7C7C7;
        margin: 0 12px 0 14px;
      }
      // 用户登录 css样式
      .left-user-title {
        font-size: 22px;
        color: #0C0C0C;
      }
    }
  }
}
</style>