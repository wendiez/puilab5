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
    document.getElementById('btn-clickadd').addEventListener('click', additem);
    document.getElementById('btn-clickminus').addEventListener('click', minusitem);
    document.getElementById('cancelalldealsclick').addEventListener('click',removeElement);

    


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


    function removeElement() {
        // Removes an element from the document
        var elementremove = document.getElementById("p1","p1copy","p2copy");
        elementremove.parentNode.removeChild(elementremove);
        removeElement2();
        updatepostion();
        updatetotalprice2();
        //updateopa();

   
    }

    function removeElement2() {
        // Removes an element from the document
        var elementremovelist = document.querySelectorAll('.group4');
        for (var i = 0; i < elementremovelist.length; i++){
            elementremovelist[i].parentNode.removeChild(elementremovelist[i]);
        };
        
    }

    function updateopa(){
        let xlist=document.querySelectorAll('.p1');
        for (var i = 0; i < xlist.length; i++){
            x[i].style.opcacity=0.2;
        };
    }

    function updatepostion(){
        document.getElementById("p1copy").style.top="361px";
        document.getElementById("p1copy2").style.top="810px";
        document.getElementById("group4copy").style.top="529px";
        document.getElementById("group4copy2").style.top="978px";

    }

    function updatetotalprice2(){

        document.getElementById("finalpricetext").innerHTML="USD 29.98";
        document.getElementById("finalpricetext").style.color="red";
        document.getElementById("totalcheckouttext").innerHTML= "Total 2 items)"
        document.getElementById("discountprice").style.visibility="hidden";

    }

    function additem(){
        console.log('add');
        //shoppingcartitem_a9 = parseInt(document.getElementById('cartItem').innerHTML);
        shoppingcartitem_a9++;
        harnesstotalpricefixed=shoppingcartitem_a9*39.99;
        localStorage.setItem("shoppingcartitem_00",shoppingcartitem_a9);
        document.getElementById("harnesstotalpricetxt").innerHTML = "USD"+ "<br>" +harnesstotalpricefixed;
        document.getElementById('harnessquanttext').innerHTML = shoppingcartitem_a9; //change number
        document.getElementById("cartItem-a9").innerHTML= shoppingcartitem_a9+2;

        calculatefinalprice ();
        }
    

    function minusitem(){
        console.log('minus');
        if (shoppingcartitem_a9 <= 0){
             //document.getElementsByClassName("class="product1");
             removeElement();
        }else {
            shoppingcartitem_a9--; 
            harnesstotalpricefixed=shoppingcartitem_a9*9.99; 
        }
        localStorage.setItem("shoppingcartitem_00",shoppingcartitem_a9);
        document.getElementById("harnesstotalpricetxt").innerHTML = "USD"+ "<br>" +harnesstotalpricefixed;
        document.getElementById('harnessquanttext').innerHTML = shoppingcartitem_a9;
        document.getElementById("cartItem-a9").innerHTML= shoppingcartitem_a9+2; 
        calculatefinalprice ();
           }
        
});

