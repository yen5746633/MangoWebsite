<template>
  <div>
    <div id="app">
      <section id="love">
        <div class="container">
          <div class="man_circle">
            <div class="cir"></div>
          </div>
          <div class="row mx-3">
            <div class="col-md-12 col-lg-6 col-xl-7 img"></div>
            <div class="mx-3"></div>
            <div class="col-md-12 col-lg-5 col-xl-4">
              <h2>愛文芒果</h2>
              <hr/>
              <div class="row">
                <div class="col-xl-6">
                  <h4>特色:<br/>口感清爽<br/>香甜柔和<br/>風味濃郁</h4>
                </div>
                <div class="col-xl-6">
                  <h4>一箱10斤裝<br/>約8~10顆 <br/>[偶數箱免運]</h4>
                </div>
              </div><br/>
              <h6>團購10箱以上另有優惠，歡迎來電洽詢</h6><br/>
              <div class="row">
                <div class="col-xl-6">
                  <h5>售價: $400 </h5>
                </div>
                <div class="col-xl-6">
                  <select class="custom-select custom-select-xs" id="selectlove">
                    <option value="0">0 箱</option>
                    <option value="1">1 箱</option>
                    <option value="2">2 箱</option>
                    <option value="3">3 箱</option>
                    <option value="4">4 箱</option>
                    <option value="5">5 箱 </option>
                    <option value="6">6 箱 </option>
                    <option value="7">7 箱 </option>
                    <option value="8">8 箱 </option>
                    <option value="9">9 箱 </option>
                    <option value="10">10 箱</option>
                  </select>
                </div>
              </div><br/>
              <div class="addlovemango" v-on:click="addcar(0,'#selectlove','.item_love')">加入購物車</div>
            </div>
          </div>
        </div>
      </section>
      <section id="gold">
        <div class="container">
          <div class="kno_circle">
            <div class="cir"> </div>
          </div>
          <div class="row mx-3">
            <div class="col-md-12 col-lg-6 col-xl-7 img"></div>
            <div class="mx-3"></div>
            <div class="col-md-12 col-lg-5 col-xl-4">
              <h2>金煌芒果</h2>
              <hr/>
              <div class="row">
                <div class="col-xl-6">
                  <h4>特色:<br/>口感較Q<br/>核薄肉多<br/>甜中微酸</h4>
                </div>
                <div class="col-xl-6">
                  <h4>一箱10斤裝<br/>約8~10顆 <br/>[偶數箱免運]</h4>
                </div>
              </div><br/>
              <h6>團購10箱以上另有優惠，歡迎來電洽詢</h6><br/>
              <div class="row">
                <div class="col-xl-6">
                  <h5>售價: $350 </h5>
                </div>
                <div class="col-xl-6">
                  <select class="custom-select custom-select-xs" id="selectgold">
                    <option value="0">0 箱</option>
                    <option value="1">1 箱</option>
                    <option value="2">2 箱</option>
                    <option value="3">3 箱</option>
                    <option value="4">4 箱</option>
                    <option value="5">5 箱 </option>
                    <option value="6">6 箱 </option>
                    <option value="7">7 箱 </option>
                    <option value="8">8 箱 </option>
                    <option value="9">9 箱 </option>
                    <option value="10">10 箱 </option>
                  </select>
                </div>
              </div><br/>
              <div class="addgoldmango" v-on:click="addcar(1,'#selectgold','.item_gold')">加入購物車      </div>
            </div>
          </div>
        </div>
      </section>
      <section id="buy">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h4>保存方式:</h4>
              <h5> <br/> 收到貨後要在室溫放置等待成熟<br/>有濃郁果香後(有小黑點更好吃)再食用或是冷藏避免過熟<br/>每一顆芒果的成熟時間不一定，所以都要各自檢查呦!</h5>
              <h4> <br/>預計出貨:</h4>
              <h5><br/>產季從6月開始 <br/>加入Line的銷售群組或是訂閱FB[芒果愛溫泉]可以隨時查看最新動態!</h5>
            </div>
            <div class="col-lg-5">
              <h3>購物清單:
                <hr/>
                <div id="mango_buy">
                  <div class="item_love"> </div>
                  <div class="item_gold"> </div>
                  <div class="item_ship"></div>
                  <div class="item_total"></div>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </section>
    <section id="car" class="px-0">
      <form>
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <h3>訂購人</h3>
                <div class="form-group">
                  <label>姓名</label><span>*</span>
                  <input class="valid form-control" id="custom_name" type="text" name="custom_name" placeholder="輸入訂購人" required="required"/>
                </div>
                <div class="form-group">
                  <label>手機</label><span>*</span>
                  <input class="valid form-control" id="custom_phone" type="text" name="custom_phone" placeholder="輸入訂購人手機號碼" maxlength="10" minlength="10" required="required"/>
                </div>
                <div class="form-group">
                  <label>Email</label><span>*</span>
                  <input class="valid form-control" id="custom_email" type="email" name="custom_email" placeholder="輸入訂購人信箱" required="required"/>
                </div>
              </div>
              <div class="col-lg-5">
                <h3>收件人</h3>
                <div class="form-group">
                  <label>姓名</label><span>*</span>
                  <input class="valid form-control" id="recipient_name" type="text" name="recipient_name" placeholder="輸入收件人" required="required"/>
                </div>
                <div class="form-group">
                  <label>手機</label><span>*</span>
                  <input class="valid form-control" id="recipient_phone" type="text" name="recipient_phone" placeholder="輸入收件人手機號碼" maxlength="10" minlength="10" required="required"/>
                </div>
                <div class="form-group">
                  <label>市內電話(公司電話)</label>
                  <input class="valid form-control" id="recipient_home_phone" type="text" placeholder="輸入收件人市內電話(公司電話)"/>
                </div>
                <div class="form-group">
                  <label>收件住址</label><span>*</span>
                  <input class="valid form-control" id="recipient_address" type="text" name="recipient_address" placeholder="輸入收件住址" required="required"/>
                </div>
              </div>
            </div><br/>
            <div class="row">
              <div class="col-7">
                <h3>付款方式</h3>
                <div class="col-12">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" id="pay_card" onclick="changepay('ATM轉帳');" href="javascript:void(0)" type="radio" name="exampleRadios" value="option1" checked=""/>
                    <label class="form-check-label">線上刷卡</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" id="pay_atm" onclick="changepay('ATM轉帳');" href="javascript:void(0)" type="radio" name="exampleRadios" value="option2"/>
                    <label class="form-check-label">ATM轉帳</label>
                  </div>
                </div>
              </div>
              <div class="col-5">
                <h3>備註
                  <div class="form-group">
                    <input class="form-control" id="custom_note" type="text" placeholder="例: 僅17:00後可收件,單子上不要有金額..."/>
                  </div>
                </h3>
              </div>
            </div><br/>
            <div class="row">
              <div class="col-12">
                <div class="form-check">
                  <input id="customCheck" type="checkbox"/>
                  <label for="payeCheck">確認資料無誤</label>
                  <button class="btn btn-success" id="sendBtn" type="submit" v-on:click="send()">送出訂單</button>
                </div>
              </div>
            </div>
          </div>
      </form>
    </section>
    </div>
    <section id="boto">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <h5>市話:06-57******<br/>MON.~Sat. 8:00~20:00</h5>
          </div>
          <div class="col-md-6 col-lg-3">
            <h5>台南市玉井區***************</h5>
          </div>
          <div class="col-md-6 col-lg-3">
            <h5>E-MAIL：*****@******</h5>
          </div><img class="col-md-6 col-lg-2 img" src="images/line_group.png" alt=""/>
        </div>
        <div class="row">
          <div class="col-md-7 col-lg-10"></div>
          <div class="col-md-3 col-lg-2">
            <h2>Line</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Sell',
  props: {
    msg: String
  },
  data() {
    return {
      shoplist: [
        {name: "愛文",price: 400},
        {name: "金煌",price: 350 }
      ],
      total_price: 0,
      datas: [
        {name: "愛文",price: 400},
        {name: "金煌",price: 350 }
      ]
    }
  },
  methods :{
   addcar: function(e,a,b){
     if (e>=0){
     var love_buy = buy_html.replace("{{mango_name}}", vm.shoplist[e].name)
                           .replace("{{mango_num}}",$(a).val())
                           .replace("{{mango_price}}", ($(a).val())*(vm.shoplist[e].price))
       $(b).html(love_buy)
       console.log($(a).val())
       ship_e = ((1*($('#selectgold').val())+1*($('#selectlove').val()))%2!=0)*100;
       var total_buy = total_html.replace("{{total_price}}", 350*($('#selectgold').val())+400*($('#selectlove').val())+(ship_e))
       $(".item_total").html(total_buy)
     if(ship_e==0){
        $(".item_ship").html(ship_html.replace("{{ship_exp}}",0)) }else{
          $(".item_ship").html(ship_html.replace("{{ship_exp}}",100)) }
     //  },
     }
   },
  }
// //////input
// var inputs = document.querySelectorAll('input.valid');

// inputs.forEach( input =>{
//   document.addEventListener('input', function() {
//     if(input.checkValidity()){
//       input.classList.add('valid');
//       input.classList.remove('invalid');
//     }else{
//       input.classList.add('invalid');
//       input.classList.remove('valid');
//     }
//     });
// })

// /////////////////填寫頁面
// var appUrl = "https://script.google.com/macros/s/AKfycbw_7JFjg4z_4F0_N1Xn3zwflHH7EneYkLEAd8VgggM1fNQJL0MX/exec",
//   sheetsUrl =  "https://docs.google.com/spreadsheets/d/1i9SzT0Qg4X7RA2Vsb6oBmLkxiCvncBgweR6zJjCTmPQ/edit#gid=0",
//   sheetName = "工作表1";

// var order_recipient_name = $("#recipient_name");
// var order_address = $("#recipient_address");
// var order_cellphone =  $("#recipient_phone");
// var order_home_phone = $("#recipient_home_phone");
// var order_mango_love = $("#selectlove");
// var order_mango_gold = $("#selectgold");
// var order_mango_total = (350*($('#selectgold').val())+400*($('#selectlove').val()));
// var order_mango_pay = (350*($('#selectgold').val())+400*($('#selectlove').val())+ship_e);
// var order_custom_name = $("#custom_name");
// var order_custom_phone = $("#custom_phone");
// var order_custom_note =$("#custom_note");
// var order_custom_email =$("#custom_email");
// var order_ship =$("#custom_ship");
// var insertType= "bottom";

// var sendBtn = $('#sendBtn');
// var parameter = {};


// var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var Today=new Date();

// var numm =(arr[Math.floor(Math.random()*26)]+String(Today.getFullYear()-1911)+String(Today.getMonth()+1)+String(Today.getDate())+String(Today.getHours())+String(Today.getMinutes())+String(Today.getSeconds())+String(Math.floor(Math.random()*1000)));

// sendBtn.on('click', function() {
//   if(($('#selectlove').val() | $('#selectgold').val()) == 0 ){
//     alert("購物車不可為空!")
//   }else if(document.forms[0].checkValidity() == 1 ){
//     parameter = {
//     url: sheetsUrl,
//     name: sheetName,
//     data: ([[order_recipient_name.val(),order_address.val(),order_cellphone.val(),order_home_phone.val(),order_mango_love.val(),order_mango_gold.val(),(1*(order_mango_love.val())+1*(order_mango_gold.val())),(350*($('#selectgold').val())+400*($('#selectlove').val())+ship_e),order_custom_name.val(),order_custom_email.val(),order_custom_phone.val(),order_custom_note.val(),numm]]).toString(),
//     row: ([[order_recipient_name.val(),order_address.val(),order_cellphone.val(),order_home_phone.val(),order_mango_love.val(),order_mango_gold.val(),(1*(order_mango_love.val())+1*(order_mango_gold.val())),(350*($('#selectgold').val())+400*($('#selectlove').val())+ship_e),order_custom_name.val(),order_custom_email.val(),order_custom_phone.val(),order_custom_note.val(),numm]]).length,
//     column: ([[order_recipient_name.val(),order_address.val(),order_cellphone.val(),order_home_phone.val(),order_mango_love.val(),order_mango_gold.val(),(1*(order_mango_love.val())+1*(order_mango_gold.val())),(350*($('#selectgold').val())+400*($('#selectlove').val())+ship_e),order_custom_name.val(),order_custom_email.val(),order_custom_phone.val(),order_custom_note.val(),numm]])[0].length,
//     insertType: "bottom",
//   };
//   $.get(appUrl, parameter);
//   alert("成功下訂!!"+numm+"正在前往結帳頁面...");
//   }else{
//       alert("必填欄位不可為空或是格式錯誤!");
//     }
// });

}
</script>

