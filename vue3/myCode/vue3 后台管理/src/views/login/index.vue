<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
<template>
  <div class="login-container">
    <!-- <span class="svg-container123">
      <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
    </span> -->
    <el-form class="login-form" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <lang-select class="lang-select" effect="light"></lang-select>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user" />
          <!-- <el-icon>
            <avatar />
          </el-icon> -->
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="username"
          name="username"
          type="text"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="password"
          name="password"
          :[pwdType]="passwordType"
        />
        <span class="show-pwd">
          <svg-icon
            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            @click="onChangePwdType"
          />
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handleLogin"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { validatePassword } from './rules';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

// 导入组件之后无需注册可直接使用
import { Avatar } from '@element-plus/icons-vue';

// todo 动态绑定笔记
const event = 'click';
const pwdType = 'type';
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456',
});

// 验证规则
const i18n = useI18n();
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      // message: '用户名为必填项',
      message: i18n.t('msg.login.usernameRule'),
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword(),
    },
  ],
});

// 处理密码框文本显示状态
const passwordType = ref('password');
const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text';
  } else {
    passwordType.value = 'password';
  }
};

// 登录动作处理
const loading = ref(false);
// const loginFromRef = ref(null);
const store = useStore();
const router = useRouter();
const handleLogin = () => {
  console.log('handleLogin');
  loading.value = true;
  store
    .dispatch('user/login', loginForm.value)
    .then(() => {
      loading.value = false;
      // 登录后操作
      router.push('/');
    })
    .catch((err) => {
      console.log(err);
      loading.value = false;
    });

  // todo  loginFromRef 为null 错误
  // loginFromRef.value.validate((valid) => {
  //   if (!valid) return;

  //   loading.value = true;
  //   store
  //     .dispatch('user/login', loginForm.value)
  //     .then(() => {
  //       loading.value = false;
  //       // TODO: 登录后操作
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       loading.value = false;
  //     });
  // });
};
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
