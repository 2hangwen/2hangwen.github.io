
function read_log(){
  for(i=1;i<30;++i){
     var filename=i+".html";
     var tag="<iframe id="+filename+" src=some_log/"+filename+" onload=get_iframe_title(this.id) ><iframe>";
     console.log(tag);
    // $("body").append(tag);
     (tag).insertBefore("iframe#music163");
  }
} 
