var vm = new Vue({
  el: "#app",
  mounted: function() {
    $(this.$el).fullpage({
      anchors:['home', 'music', 'movie', 'tour'],
      menu: "#menu",
      navigation: true,
      navigationPosition: 'right',
  		navigationTooltips: ['Home', 'Music', 'Movie', 'Tour']
    });
  }
});