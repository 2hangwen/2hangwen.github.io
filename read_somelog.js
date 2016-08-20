  //获取加载了iframe里的内容  
  function get_iframe(t) {
            var key = "iframe#" + t;
            var tit="";
            var img="";
            //console.log($(key).contents().find("title").prop("text"));
            if($(key).contents().find("h1").eq(0).text() == "404" ){
               $(key).remove();
               //return 0;
            }else{
             //获取iframe的document,查找title标签并获取内容，这里用了？：;	
              var tit = $(key).contents().find("title").length ? $(key).contents().find("title").prop("text") : false;
              var img = $(key).contents().find("img").length ? $(key).contents().find("img").eq(0).prop("src") : false;
              console.log(img);
             // if (tit){
              // alert(tit);
               add_log($(key).prop("src"),tit);
               //清空iframe里的数据
               //$(key).prop("src","");
               $(key).remove();
            //  }
            } 
  }


function read_log(){
  for(i=1;i<30;++i){
     var filename=i+".html";
     var tag="<iframe id="+i+" src=some_log/"+filename+" onload=get_iframe(this.id) ><iframe>";
     console.log(tag);
    // $("body").append(tag);
     $(tag).insertBefore("iframe#music163");
  }
} 

$(function(){
  read_log();
  
 })
