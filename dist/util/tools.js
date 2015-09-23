
var Tools = {

    loadScript : function(url,callback) {
        var script = document.createElement("script");


        // IE
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null
                    if(callback){
                        callback();
                    }

                }
            };
        } else { // others
            script.onload = function () {
                if(callback){
                    callback();
                }
            };
        }
        var l=url.length;
        var script;
        for(var i=0;i<l;i++){
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url[i];
            document.body.appendChild(script);
        }

    }

}



