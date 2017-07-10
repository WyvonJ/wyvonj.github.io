(function() {
  //设定所有的tooltip
  var lg = console.log

  var $root = $('body,html') //缓存，避免多次查询
  var $backToTop = $('#back-top a')
  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(document).ready(function() {
    $(".skills-wrapper > .skills-item").each(function() {
      $(".diagram > span", this).css({
        width: $(this).data("level") + "%"
      })
    })
    $('#year').text((new Date()).getFullYear()) //footer显示年份
    $backToTop.hide() //初始隐藏backtotop

  })

  $('#loading').ajaxStart(function() {
    $(this).show()
  })

  //滚动到页面顶部
  $backToTop.click(function() {
    $root.stop(false, false).animate({
      scrollTop: 0
    }, 500)
    return false
  })

  $('a').click(function() {
    $root.animate({
      //获取锚点的top位置 
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500)
    return false
  })


  window.addEventListener('mousewheel', function(e) {
    if (window.scrollY >= 600) {
      $backToTop.show()
    } else {
      $backToTop.hide()
    }
  })


})()
