$(function(){var t={init:function(){this.bindEvent()},bindEvent:function(){$(".detail-bottom").on("click",".job-switcher",function(){var t=$(this).attr("clicked");"false"==t?($(this).parent().find(".job-container").fadeIn(),$(this).removeClass("fa-plus").addClass("fa-minus"),$(this).attr("clicked","true")):($(this).parent().find(".job-container").fadeOut(),$(this).removeClass("fa-minus").addClass("fa-plus"),$(this).attr("clicked","false"))})}};t.init()});