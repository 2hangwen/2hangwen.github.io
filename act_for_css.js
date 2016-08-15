  function add_div_for_body(n){
        var direction=["border-top-color","border-right-color","border-bottom-color","border-left-color"];
        for(i=0;i<n;++i){
            console.log(i);
            $("body").append("<div id=css"+i+" ></div>");
            var r=parseInt(Math.random()*255);
            var g=parseInt(Math.random()*255);
            var b=parseInt(Math.random()*255);
            var pos_width=parseInt(Math.random()*90)+"%";
            var pos_heigth=parseInt(Math.random()*90)+"%";
          //  width: 100px;height: 100px;background: orange;border-radius: 100px;
            $("body div#css"+i).css("border-radius","10px");
            $("body div#css"+i).css("width","0px");
            $("body div#css"+i).css("height","0px");
          //  $("body div#css"+i).css("background","rgb("+r+","+g+","+b+")");
            $("body div#css"+i).css("border","10px solid "+"rgb("+r+","+g+","+b+")");
            $("body div#css"+i).css("position","fixed");
            $("body div#css"+i).css("top",pos_width);
            $("body div#css"+i).css("left",pos_heigth);
            $("body div#css"+i).css("z-index",-1);
            $("body div#css"+i).css("opacity",.4);
            $("body div#css"+i).css(direction[parseInt(Math.random()*4)],"white");
        }
    }

    function  play_for_css(){
        $("div[id*=css]").each(function () {
            var pos_width = parseInt(Math.random() * 90) + "%";
            var pos_heigth = parseInt(Math.random() * 90) + "%";
             $(this).css("top", pos_width);
             $(this).css("left", pos_heigth);
        });
    }
