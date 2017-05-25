/**
 * Created by 叶显明 on 2017/5/24.
 */


require.config({
    paths:{
        "math":"math"
    }
});

require(["math"],function(math){
    alert(math.add(100,20));
});

/*
require(['jquery'],function($){
    alert($().jquery);
});*/
