function grandparent(){
    var a=200;
    console.log(a);
    //console.log(c)   bahar se andar access nhi kr skte

    function parent(){
        var b=300;
        console.log(b);

        function child(){
            var c=500;
            console.log(c);
        }
        child();
    }
    parent();

}
grandparent();