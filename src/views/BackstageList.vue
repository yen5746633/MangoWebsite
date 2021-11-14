<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-top bg-light navbar-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hi，芒果愛溫泉</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item sign_out" @click="loginOut()">登出</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <section id="manage">
      <div class="container">
        <p>1. 本網站建議使用電腦操作</p>
        <p>2. 小視窗請將頁面滑至底部以便操控左右滑條查看更多資訊</p>
        <hr>
        <div v-if="pageCount > 1">
          顯示第 {{(currentPage - 1) * 5 + 1}} 到 {{(currentPage - 1) * 5 + 5}} 筆紀錄，總共 {{pageCount}} 筆
          <b-pagination
            class="justify-content-center"
            :total-rows="pageCount"
            v-model="currentPage"
            :per-page="perPage"
          />
        </div>
        <div class="table-responsive">
          <table class="table-striped table-hover mx-auto" id="app">
            <tr>
              <th v-for="head in headers">
                <td>{{head}}</td>
              </th>
            </tr>
            <tr id="del" v-for="data in books">
              <td>{{data.order_number}}</td>
              <td>{{data.ship_status==1 ? "✓" : "×"}}</td>
              <td>{{data.recipient}}</td>
              <td>{{data.love}}</td>
              <td>{{data.gold}}</td>
              <td>{{data.total}}</td>
              <td>{{data.debit}}</td>
              <td>{{data.remark}}</td>
              <td>{{data.pay_status==1 ? "✓" : "×"}}</td>
              <td>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#staticBackdrop" @click="editItem(data)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"></path>
                  </svg>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 編輯視窗 -->
      <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">編輯訂單</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row my-2">
                <p class="col-4">收件人</p>
                <input type="text"  class="col-6" :value="editOrder.recipient" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">收件住址</p>
                <input type="text"  class="col-6" :value="editOrder.address" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">收件電話</p>
                <input type="text"  class="col-6" :value="editOrder.cellphone" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">收件家電</p>
                <input type="text"  class="col-6" :value="editOrder.telephone" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">愛文</p>
                <input type="text"  class="col-6" :value="editOrder.love" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">金煌</p>
                <input type="text"  class="col-6" :value="editOrder.gold" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">總數</p>
                <input type="text"  class="col-6" :value="editOrder.total" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">收款</p>
                <input type="text"  class="col-6" :value="editOrder.debit" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">訂購人</p>
                <input type="text"  class="col-6" :value="editOrder.orderer" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">訂購人信箱</p>
                <input type="text"  class="col-6" :value="editOrder.orderer_email" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">訂購電話</p>
                <input type="text"  class="col-6" :value="editOrder.orderer_cellphone" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">備註</p>
                <input type="text"  class="col-6" :value="editOrder.remark" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">訂單編號</p>
                <input type="text" class="col-6" :value="editOrder.order_number" :disabled="editOrder.ship_status==1">
              </div>
              <div class="row my-2">
                <p class="col-4">付款狀態</p>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" :value="editOrder.pay_status" :disabled="editOrder.ship_status==1">
                  <option value="0">未付款</option>
                  <option value="1">已付款</option>
                </select>
              </div>
              <div class="row my-2">
                <p class="col-4">出貨狀態</p>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" :value="editOrder.ship_status" :disabled="editOrder.ship_status==1">
                  <option value="0">未出貨</option>
                  <option value="1">已出貨</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">刪除訂單</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" :disabled="editOrder.ship_status==1">保存</button>
            </div>
          </div>
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
      bookCsv: {},
      headers: ["編號","出貨狀態","收件人","愛文", "金煌", "總數","金額", "備註", "付款狀態", "編輯訂單"],
      pages: 0,
      pageCount: 0,
      perPage: 5,
      currentPage: 1,
      editOrder: {}
    }
  },
  created() {
    this.getData()
  },
  computed: {
    books () {
      const start = (this.currentPage - 1) * this.perPage
      const end = this.currentPage * this.perPage
      const items = Object.keys(this.bookCsv).slice(start, end).reduce((result, key) => {
          result[key] = this.bookCsv[key];
          return result;
      }, {});
      return items
    },
  },
  methods: {
    async getData() {
      await this.$axios({
        method: "GET",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS5da_SAPAfGo7wXIC4NGLlY4X9ZA0KyFiHdsQQV0SESw281zM-axtP_tC5Pa-ehxwGT7KZy21MfIRl/pub?gid=0&single=true&output=csv",
      }).then(res => {
        this.bookCsv = this.$papa.parse(res.data, {'header': true}).data
        this.pageCount = this.bookCsv.length
        this.pages = (Math.ceil(this.pageCount/5))
      })
    },
    editItem(item){
      this.editOrder = item
    },
    loginOut(){
      this.$router.push("/Backstagelogin")
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
