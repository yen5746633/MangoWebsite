<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-sm navbar-top">
      <div class="container">
        <a class="navbar-brand" href="/">Mango Sweetie.</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMango" aria-controls="navbarMango" aria-expanded="false" aria-label="Toggle navigation">
          <!-- 這是按鈕上呈現的icon圖案 -->
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMango">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="/Sell">訂購 Mango</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="jumbotron rounded-0">
      <div class="container">
        <h1>Sweetie.</h1>
      </div>
    </header>
  </div>
</template>
<script>
import $ from "jquery";
import skrollr from 'skrollr';

export default {
  props: {
    msg: String
  },
  mounted() {
    $(window).scroll(function(evt){
      if ($(window).scrollTop()>0) {
        $(".navbar").removeClass("navbar-top");
        $(".navbar").addClass("bg-light");
        $(".navbar").addClass("navbar-light ");
      }
      else {
          $(".navbar").addClass("navbar-top");
          $(".navbar").removeClass("bg-light");
          $(".navbar").removeClass("navbar-light ");
      }
    });

    var s = skrollr.init();
  }
};
</script>
