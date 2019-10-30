// Retrieve
let  shoppingcartitem_a9 = localStorage.getItem("shoppingcartitem_00");

//localStorage.setItem("shoppingcartitem_00", shoppingcartitem_a9);


//let totalshoppingcartitem_a9=shoppingcartitem_a9;
let vestquant = parseInt(document.getElementById("vestquanttxt").innerHTML);
let bottlequant = parseInt(document.getElementById("bottlequanttxt").innerHTML);


let harnesstotalprice= shoppingcartitem_a9*39.99;
console.log(harnesstotalprice);
let harnesstotalpricefixed=harnesstotalprice.toFixed(2);

document.getElementById("cartItem-a9").innerHTML= shoppingcartitem_a9;
document.getElementById("harnessquanttext").innerHTML= shoppingcartitem_a9;



document.addEventListener('DOMContentLoaded', function(){
    check = function (){
        //function to for html body onload();
        //alert("成功啦！");
    }

    calculatetotalquantity = function(){
        totalshoppingcartitem_a9= vestquant+bottlequant+shoppingcartitem_a9;
    }
    calculatetotalquantity();

    calculatefinalprice = function(){
        finalprice = harnesstotalpricefixed;
        let finalpricefixed=(Number(finalprice)).toFixed(2);
        //toFixed() method formats a number. 
        //The current value is of type string and instead of arithmetic addition, string concatenation is happening. 
        //Convert those to number before adding and using toFixed():
        
        document.getElementById("finalpricetext").innerHTML="USD"+"<br>"+finalpricefixed;
        document.getElementById("finalpricetext").style.color="red";
        document.getElementById("totalcheckouttext").innerHTML= "Total (" + totalshoppingcartitem_a9+" items)"
    }
    
    document.getElementById("harnesstotalpricetxt").innerHTML = "USD"+ "<br>" +harnesstotalpricefixed;
    calculatefinalprice ();

    console.log("T"+totalshoppingcartitem_a9 + " / "+vestquant+" / "+bottlequant);
});

