fun1:
function covt(){
    temp=document.querySelector('#type').value;
    deg=document.getElementById('num').value;
    if(deg==""){
        alert("Enter a temperature to convert");
    }
    else{
        deg=Number.parseFloat(deg);
        console.log(temp);
        console.log(typeof (deg));
        if(temp=="Fahrenheit"){
            ans=((deg-32)*5)/9;
            ans=ans.toFixed(2);
            console.log(ans);
            let result=document.getElementById('num1');
            result.value=ans+" *C";
        }
        else if(temp=="Celsius"){
            ans=(deg*1.8)+32;
            ans=ans.toFixed(2);
            console.log(ans);
            let result=document.getElementById("num1");
            result.value=ans+" *F";
        }
    }
}

function refresh(){
    window.location.reload("Refresh")
}