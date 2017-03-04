<template>
  <div id="app">
    <div id="fb-root"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function () {
    /* eslint-disable */
    window.fbAsyncInit = function() {
      FB.init({
        xfbml      : true,
        version    : 'v2.8'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/de_DE/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
    /* eslint-enable */
  }
}
</script>

<style src="../static/materialize/css/materialize.min.css"></style>
