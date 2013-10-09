$(function(){
    var funs = [],
        i = 0;
    $('.item').each(function(){
        var self = this;
        funs[i] = function(){
            $('.old',self).fadeOut();
            $('.new',self).fadeIn('fast',function(){
                defun();
            }); 
        };
        i++;
    });
    var defun=function() {
        $(document).dequeue("imgShow");
    }
    $(document).queue("imgShow",funs);
    defun();
});