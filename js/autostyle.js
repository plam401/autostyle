/**
 * Created by liyuan on 2015/9/8.
 */
$(function(){
    $('head').append('<style></style>');
    var $div = $('div');
    var nn=new Array();
    var no=new Array();
    /*nn*/
    nn[0]   = 'w';
    nn[1]   = 'h';
    nn[2]   = 'mg';
    nn[3]   = 'mt';
    nn[4]   = 'mr';
    nn[5]   = 'mb';
    nn[6]   = 'ml';
    nn[7]   = 'pd';
    nn[8]   = 'pt';
    nn[9]   = 'pr';
    nn[10]  = 'pb';
    nn[11]  = 'pl';
    /*no*/
    no[0]   = 'width';
    no[1]   = 'height';
    no[2]   = 'margin';
    no[3]   = 'margin-top';
    no[4]   = 'margin-right';
    no[5]   = 'margin-bottom';
    no[6]   = 'margin-left';
    no[7]   = 'padding';
    no[8]   = 'padding-top';
    no[9]   = 'padding-right';
    no[10]  = 'padding-bottom';
    no[11]  = 'padding-left';
    var $style = function(s,v){
        var shuxin = '';
        for(var i = 0; i < 12; i++){
            if(s == nn[i]){shuxin = no[i];}
        }
        $('style').append('.'+s+v+'{'+shuxin+':'+v+'px;}')
    };
    for(var n = 0; n < $div.length; n++){
        var produce = function(name){
            if(typeof ($div.eq(n).attr(name))!='undefined'){
                $style(name,$div.eq(n).attr(name));
                $div.eq(n).addClass(name+$div.eq(n).attr(name));
            }
        };
        for(var k = 0; k < nn.length; k++){
            produce(nn[k]);
        }
    }
});