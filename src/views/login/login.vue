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
        <!-- 手机号输入框 -->
        <el-form-item class="input-from" label prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item class="input-from" label prop="password">
          <el-input show-password v-model="ruleForm.password"></el-input>
        </el-form-item>
        <!-- 验证码输入框 -->
        <el-row>
          <el-col :span="18">
            <el-form-item label prop="code">
              <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <div class="code-loc">
              <img @click="codeImg" :src="codeUrl" alt />
            </div>
          </el-col>
        </el-row>
        <!-- 用户协议 -->
        <template>
          <el-checkbox class="login-checked" v-model="ruleForm.checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </template>
        <!-- 登录注册按钮 -->
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button class="login-btn from-btn" type="primary" @click="dialogFormVisible = true">注册</el-button>
        </el-form-item>
        <!-- 注册对话框 -->
        <el-dialog title="用户注册" :visible.sync="dialogFormVisible" width="600px" center>
          <el-form :model="registeFrom" ref="registeFrom">
            <el-form-item class="from-input" label="头像" :label-width="formLabelWidth">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-form>
          <!-- 用户昵称 -->
          <el-form :model="registeFrom" ref="registeFrom">
            <el-form-item class="from-input" label="昵称" :label-width="formLabelWidth">
              <el-input v-model="registeFrom.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <!-- 用户邮箱 -->
          <el-form :model="registeFrom" ref="registeFrom">
            <el-form-item class="from-input" label="邮箱" :label-width="formLabelWidth">
              <el-input v-model="registeFrom.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <!-- 用户手机号码 -->
          <el-form :model="registeFrom" ref="registeFrom">
            <el-form-item class="from-input" label="手机" :label-width="formLabelWidth">
              <el-input v-model="registeFrom.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <!-- 用户密码 -->
          <el-form :model="registeFrom" ref="registeFrom">
            <el-form-item class="from-input" label="密码" :label-width="formLabelWidth">
              <el-input v-model="registeFrom.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <!-- 图形码 -->
          <el-form :model="registeFrom" ref="registeFrom">
            <el-row>
              <el-col :span="16">
                <el-form-item class="from-input" label="图形码" :label-width="formLabelWidth">
                  <el-input v-model="registeFrom.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :offset="1" :span="7">
                <div class="code-loc">
                  <img @click="codeImg" :src="codeUrl" alt />
                </div>
              </el-col>
            </el-row>
          </el-form>
          <!-- 手机验证码 -->
          <el-form :model="registeFrom" ref="registeFrom">
            <el-row>
              <el-col :span="16">
                <el-form-item class="from-input" label="验证码" :label-width="formLabelWidth">
                  <el-input v-model="registeFrom.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :offset="1" :span="7">
                <el-button class="code-loc">获取用户验证码</el-button>
              </el-col>
            </el-row>
          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-form>
    </div>
    <div class="login-right">
      <img src="../../assets/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
// 导入 抽取好的 api 文件
import { login } from "../../api/login.js";
// 手机号码判断
var validatePhone = (rule, value, callback) => {
  if (value === "") {
    // 如果输入内容为空 , 则提示用户
    callback(new Error("手机号码不能为空"));
  } else {
    // 判断手机号码是否正确
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if (reg.test(value) == true) {
      callback();
    } else {
      // 如果不正确 , 则提示
      callback(new Error("手机号码不正确 , 请重新输入!"));
    }
    callback();
  }
};
export default {
  data() {
    return {
      // 登录验证码生成
      codeUrl: process.env.VUE_APP_BASEURL + "/captcha?type=login",
      // 注册对话框 是否显示
      dialogFormVisible: false,
      // 表单
      ruleForm: {
        phone: "",
        password: "",
        code: "",
        checked: false
      },
      // 表单自定义校验规则
      rules: {
        phone: [{ validator: validatePhone, triggre: "blur" }],
        password: [
          { required: true, message: "密码不能为空", triggre: "change" },
          { min: 6, max: 16, message: "密码长度为6~16位数", triggre: "change" }
        ],
        code: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位数", trigger: "change" }
        ]
      },
      // 注册对话框表单
      formLabelWidth: "80px",
      registeFrom: {
        name: ""
      }
    };
  },
  // 方法的集合
  methods: {
    // 验证码点击事件
    codeImg() {
      this.codeUrl = `${
        process.env.VUE_APP_BASEURL
      }/captcha?type=login&t=${Date.now()}`;
    },
    // 登录按钮点击事件
    submitForm(formName) {
      // 判断用户是否已经勾选用户协议
      if (this.ruleForm.checked == false) {
        // 如果没有勾选, 则提示用户勾选之后再进行下一步,否则后面不再执行
        this.$message.warning("请勾选用户协议之后再操作下一步!");
        return;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.$message.success("登录成功")
          login({
            phone: this.ruleForm.phone,
            password: this.ruleForm.password,
            code: this.ruleForm.code
          }).then(res => {
            window.console.log(res);
            if (res.data.code === 200) {
              // 如果返回的是 200 状态码,就提示用户登录成功
              this.$message.success("登录成功");
              // 同时跳转到首页
              this.$router.push("/index");
            } else if (res.data.code === 202) {
              // 如果返回的是 202 状态码 , 也提示用户
              this.$message.error(res.data.message);
            }
          });
        } else {
          return false;
        }
      });
    }
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
      // 勾选框
      .login-checked {
        padding-left: 44px;
        margin-bottom: 28px;
      }
      // 登录注册按钮
      .login-btn {
        width: 100%;
        margin-left: 0;
      }
      .from-btn {
        margin-top: 26px;
      }
    }
  }
  // 验证码 css样式
  .code-loc {
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  // 注册对话框表单
  .el-dialog__header {
    background: linear-gradient(
      225deg,
      rgba(20, 147, 250, 1),
      rgba(1, 198, 250, 1)
    );
    .el-dialog__title {
      color: #fff;
    }
    
  }
  // 用户头像上传 css样式
  .el-form-item__content {
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>