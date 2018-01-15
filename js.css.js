/**
 * Created by seraphimwx on 2017/11/28.
 */

(function () {
    $.fn.extend({"myPic":function(obj){
        if(obj){
            var value = obj.effect;
            console.log(value);
            console.log(this.selector);
            this.addClass("imgbox");
            switch(value){
                case "a":
                    this.addClass("box1");
                    break;
                case "b":
                    this.addClass("box2");
                    break;
                case "c":
                    this.addClass("box3");
                    break;
                case "d":
                    this.addClass("box4");
                    this.append('<div class="line1"></div><div class="line2"></div>');
                    break;
                case "e":
                    this.addClass("box5");
                    break;
            }
        }

    }})
})();
