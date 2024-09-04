<template>
  <div id="signUpPage" class="bg-yellow">
    <div class="container signUpPage vhContainer">
      <div class="side">
        <a href="#"><img class="logoImg" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png" alt=""></a>
        <img class="d-m-n" src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png" alt="workImg">
      </div>
      <div>
        <form class="formControls" @submit.prevent="register">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input class="formControls_input" type="text" id="email" v-model="form.email" placeholder="請輸入 email" required>
          <label class="formControls_label" for="name">您的暱稱</label>
          <input class="formControls_input" type="text" id="name" v-model="form.nickname" placeholder="請輸入您的暱稱">
          <label class="formControls_label" for="pwd">密碼</label>
          <input class="formControls_input" type="password" id="pwd" v-model="form.password" placeholder="請輸入密碼" required>
          <label class="formControls_label" for="confirmPwd">再次輸入密碼</label>
          <input class="formControls_input" type="password" id="confirmPwd" v-model="form.confirmPassword" placeholder="請再次輸入密碼" required>
          <input class="formControls_btnSubmit" type="submit" value="註冊帳號">
          <router-link class="formControls_btnLink" to="/login">登入</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router'

  const router = useRouter();

  const form = ref({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: ''
  });

  const register = async () => {
    if (form.value.password !== form.value.confirmPassword) {
      alert('密碼不一致');
      return;
    }

    try {
      const response = await axios.post('https://todolist-api.hexschool.io/users/sign_up', {
        email: form.value.email,
        password: form.value.password,
        nickname: form.value.nickname
      });

      if (response.status === 201) {
        alert('註冊成功，請登入');
        // 跳轉到待辦事項頁面
        router.push('/')
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('用戶已存在');
      } else {
        alert('註冊失敗');
      }
    }
  };
</script>
