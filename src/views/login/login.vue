<template>
  <div class="login-content">
    <div class="login-left">
      <!-- 标题 -->
      <div class="box-title">
        <div class="left-img">
          <img src="../../assets/login-logo.png" alt />
        </div>
        <div class="left-title">黑马面面</div>
        <div class="left-line"></div>
        <div class="left-user-title">用户登录</div>
      </div>

      <!-- 登录表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="43px"
        class="demo-ruleForm login-from"
      >
        <el-form-item class="input-from" label="" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item class="input-from" label="" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="18">
            <el-form-item label="" prop="password">
              <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <div class="code-img">
              <img src="../../assets/01.png" alt />
            </div>
          </el-col>
        </el-row>
        <template>
          <el-checkbox class="login-checked" v-model="checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>
            和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </template>
        <el-form-item>
          <el-button class="login-btn" type="primary">登录</el-button>
          <el-button class="login-btn from-btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-right">
      <img src="../../assets/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        name: [
          { required: true, message: "手机号不能为空", triggre: "blur" },
          { min: 11, max: 11, message: "手机号长度为11位数", trigger: "blur" }
        ]
      }
    };
  }
};
</script>

<style lang="less">
/* 背景主体布局 */
.login-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  // 左边登录css样式
  .login-left {
    display: inline-block;
    width: 478px;
    height: 550px;
    background-color: #f5f5f5;
    box-sizing: content-box;
    // 标题 css样式
    .box-title {
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
      .left-title {
        font-size: 24px;
        color: #0c0c0c;
      }
      // 线条
      .left-line {
        width: 1px;
        height: 28px;
        background-color: #c7c7c7;
        margin: 0 12px 0 14px;
      }
      // 用户登录 css样式
      .left-user-title {
        font-size: 22px;
        color: #0c0c0c;
      }
    }
    // 表单 css样式
    .login-from {
      margin-top: 27px;
      margin-right: 41px;
      .code-img {
        height: 40px;
        img {
          height: 100%;
        }
      }
      .login-checked {
        padding-left: 44px;
        margin-bottom: 28px;
      }
      .login-btn {
        width: 100%;
        margin-left: 0
      }
      .from-btn {
        margin-top: 26px;
      }
    }
  }
}
</style>