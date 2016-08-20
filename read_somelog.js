  //获取加载了iframe里的内容  
  function get_iframe(t) {
            var key = "iframe#" + t;
            var tit="";
            var img="";
            if($(key).length){
             //获取iframe的document,查找title标签并获取内容，这里用了？：;	
              var tit = $(key).contents().find("title").length ? $(key).contents().find("title").prop("text") : false;
              var img = $(key).contents().find("image").length ? $(key).contents().find("image").eq(0).prop("src") : false;
              console.log(img);
              if (tit && img){
              // alert(tit);
               add_log($(key).prop("src"),tit);
               //清空iframe里的数据
               //$(key).prop("src","");
               $(key).remove();
              } 
            }
  }


function read_log(){
  for(i=1;i<30;++i){
     var filename=i+".html";
     var tag="<iframe id="+filename+" src=some_log/"+filename+" onload=get_iframe(this.id) ><iframe>";
     console.log(tag);
    // $("body").append(tag);
     $(tag).insertBefore("iframe#music163");
  }
} 
