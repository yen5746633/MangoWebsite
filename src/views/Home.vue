<template>
  <div>
    <section id="seed">
      <div class="container">
        <div class="man_circle">
          <div class="cir"></div>
        </div>
        <div class="row mx-3">
          <div class="col-md-12 col-lg-6 col-xl-7 img"></div>
          <div class="mx-3"></div>
          <div class="col-md-12 col-lg-5 col-xl-2">
            <h2>陽光.<br/>綠葉.<br/>開花.<br/>結果.</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="talk">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3>台南市號稱水果的故鄉<br/> <br/>我們的果園就位在台南市楠西與玉井交接的龜丹溫泉區內<br/> <br/>溫泉區的土質特別肥沃，加上排水良好、日照充足<br/> <br/>才能孕育出甜美多汁，口感又佳的夏季美味 <br/> <br/>-芒果-<br/> </h3>
          </div>
        </div>
      </div>
    </section>
    <section id="know">
      <div class="container">
        <div class="kno_circle">
          <div class="cir"> </div>
        </div>
        <div class="row mx-3">
          <div class="col-md-12 col-lg-6 col-xl-5">
            <h2>芒果小知識:</h2>
            <h4><br/> <br/>等聞到芒果果香且變軟後就是成熟囉~<br/>在果皮表面長出小黑點後會更好吃喔!</h4>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-7 img"></div>
        </div>
      </div>
    </section>
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
  name: 'Home',
  props: {
    msg: String
  },
  mounted() {
    // var s = skrollr.init();
    // $(window).scroll(function(evt){
    //   if ($(window).scrollTop()>0) {
    //     $(".navbar").removeClass("navbar-top");
    //     $(".navbar").addClass("bg-light");
    //     $(".navbar").addClass("navbar-light ");
    //     $("h1").css("color","#ffec70");
    //   }
    //   else {
    //       $("h1").css("color","#F4F0ED");
    //       $(".navbar").addClass("navbar-top");
    //       $(".navbar").removeClass("bg-light");
    //       $(".navbar").removeClass("navbar-light ");
    //   }
    // });

  },

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
