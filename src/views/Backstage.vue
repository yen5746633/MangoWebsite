<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-top bg-light navbar-light">
      <div class="container"><a class="navbar-brand" href="/">Mango Sweetie.</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">付款狀態 Pay</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item payed" href="#">已付款</a><a class="dropdown-item yet_pay" href="#">未付款</a></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="manage">
      <div class="container">
        <div class="table-responsive">
          <table class="table-striped table-hover" id="app">
            <tr>
              <th v-for="head in headers">
                <td>{{head}}</td>
              </th>
            </tr>
            <tr id="del" v-for="data in books">
              <td>{{data.ship_status}}</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Backstage',
  props: {
    msg: String
  },
  data() {
    return {
      books: {},
      old_headers: ["收件人","收件住址","收件電話","收件家電","愛文","金煌","總數","收款","訂購人","訂購人信箱","訂購電話","備註","訂單編號","付款狀態","出貨狀態"],
      headers: ["編號","出貨狀態","收件人","愛文", "金煌", "總數","金額", "備註", "付款狀態", "編輯訂單"]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      await this.$axios({
        method: "GET",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS5da_SAPAfGo7wXIC4NGLlY4X9ZA0KyFiHdsQQV0SESw281zM-axtP_tC5Pa-ehxwGT7KZy21MfIRl/pub?gid=0&single=true&output=csv",
      }).then(res => {
        const csv = this.$papa.parse(res.data, {'header': true}).data
        this.books = csv
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
