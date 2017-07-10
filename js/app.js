(function() {
  //设定所有的tooltip
  var lg = console.log
  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(document).ready(function() {
    $(".skills-wrapper > .skills-item").each(function() {
      $(".diagram > span", this).css({
        width: $(this).data("level") + "%"
      })
    })
    var year = (new Date()).getFullYear()
    $('#year').text(year)

  })

  $('#loading').ajaxStart(function() {
    $(this).show()
  })

  //滚动到页面顶部
  $('#back-top a').click(function() {
    $('body,html').stop(false, false).animate({
      scrollTop: 0
    }, 500)
    return false
  })

  $('a').click(function() {
    $('html, body').animate({
      //获取锚点的top位置 
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500)
    return false
  })

})()
