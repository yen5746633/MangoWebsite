<template>
  <div>
    <section id="manage">
      <div class="container">
        <h3>芒果愛溫泉管理登入頁面</h3>
        <div class="row mt-2 justify-content-center">
          <div class="col-8">
            <div class="row justify-content-around">
              <p class="col-2">帳號</p>
              <input type="text" class="col-8" v-model="user.account">
            </div>
            <div class="row my-2 justify-content-around">
              <p class="col-2">密碼</p>
              <input type="text" class="col-8"  v-model="user.password">
            </div>
          </div>
          <div class="col-2 row">
            <button type="button" class="btn btn-success" @click="sendLogin(user.account,user.password)">登入</a></button>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'BackstageLogin',
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        account: "",
        password: ""
      }
    }
  },
  methods: {
    sendLogin(account,password){
      console.log(account)
      console.log(password)
      this.$router.push("/Backstagelogin/Backstagelist")
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
