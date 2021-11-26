var array=[];
function display()
{
    
    //  var ele = document.getElementById('n1').value
    // array.push(ele)
    // var ele = document.getElementById('n2').value
    // array.push(ele)
    // var ele = document.getElementById('n3').value
    // array.push(ele)
    // var ele = document.getElementById('n4').value
    // array.push(ele)
    for(var i=1;i<=4;i++)
    {
        var ele = document.getElementById('n'+i).value
        array.push(ele)
    }
    document.getElementById('para').innerHTML = array.join();
    document.getElementById('button').style.visibility = 'hidden';
}
function sort(){
array.sort();
document.getElementById('para').innerHTML = array.join();
}
function fun(){
    document.getElementById("form").reset()
}