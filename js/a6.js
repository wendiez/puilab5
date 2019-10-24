
// Store

// Retrieve
document.getElementById("quantadjustItem").innerHTML = localStorage.getItem("shoppingcartitem_00");


let shoppingcartitem = 0; 
let currentSize = "S" ;
let colortxt= ["select a color", "Color: Green", "Color: Dark Green", "Color: Navy Blue"];
let sizetxt = ["breast girth SS 65-71 cm $30.99", "breast girth S 72-91 cm $34.99","breast girth M 92-117 cm $39.99","breast girth L 118-136 cm $59.99"]








document.addEventListener('DOMContentLoaded', function(){
    // Handler when the DOM is fully loaded
    // add minus items
    

    document.getElementById('btn-clickadd').addEventListener('click', additem);
    document.getElementById('btn-clickminus').addEventListener('click', minusitem);
    document.getElementById('btn-addtocart').addEventListener('click', addtocart);

    
    //document.querySelectorAll('.sizess').addEventListener('click', updateSize);
    //document.getElementById('green').addEventListener('click', changecolor);
    

    //change different color of product pictures
    let presschangecolor = document.querySelectorAll('.oval');
    //console.log(typeof'presschangecolor');
    //ALWAYS do loop FOR class!!!
    for (var i = 0; i < presschangecolor.length; i++) { 
        presschangecolor[i].addEventListener('click', function(event) {
            getclicked_classindex(); //get the index of clicked ovals
            //console.log(">>>>"+ event.target.className);
            //console.log(">>"+ event.target);        
        });
    }    
    //console.log(typeof presspicture);
    //console.log( Array.from(presschangecolor));
    function getclicked_classindex(){
        presschangecolor.forEach(function(check){
            check.addEventListener('click', checkIndex);
          })
        function checkIndex(event){
            //console.log( Array.from(presschangecolor).indexOf(event.target) );
            let x = Array.from(presschangecolor).indexOf(event.target)+1 //clicke on color ovals
            let y = 1;
            changeslides(x,y); //push the index to update color
            updatecolortext(x);
          }
        }



    let presschangesize = document.querySelectorAll('.size-selection');
    console.log(typeof'presschangesize');
    //ALWAYS do loop FOR class!!!

    for (var i = 0; i < presschangesize.length; i++) { 
        presschangesize[i].addEventListener('click', function(event) {
            getclicked_classindex2(); //get the index of clicked ovals
            console.log(">>>>"+ event.target.className);
           //console.log(">>"+ event.target);        
        });
    }

    function getclicked_classindex2(){
        presschangesize.forEach(function(check){
            check.addEventListener('click', checkIndex);
          })
        function checkIndex(event){
            //console.log( Array.from(presschangecolor).indexOf(event.target) );
            let x = Array.from(presschangesize).indexOf(event.target)+1 //clicke on color ovals
            updatesizetext(x); //push the index to update color

          }
        }



    function additem(){
    console.log('add');
    shoppingcartitem = parseInt(document.getElementById('cartItem').innerHTML);
    shoppingcartitem++;
    document.getElementById('cartItem').innerHTML = shoppingcartitem; //change number
    //var x = document.getElementById('cartItem').getAttribute('class');
    //console.log(x);
    localStorage.setItem("shoppingcartitem_00",shoppingcartitem);
    document.getElementById('quantadjustItem').innerHTML = shoppingcartitem; //change number
    document.getElementById('obj-cartcountbg').style.opacity = '1.0';
    }

    function minusitem(){
        console.log('minus');
        if (shoppingcartitem == 0){
            shoppingcartitem == 0 
        }else{
        shoppingcartitem = parseInt(document.getElementById('cartItem').innerHTML);
        shoppingcartitem--;
    }
        
        localStorage.setItem("shoppingcartitem_00",shoppingcartitem);
        document.getElementById('cartItem').innerHTML = shoppingcartitem;
        document.getElementById('quantadjustItem').innerHTML = shoppingcartitem;
        document.getElementById('obj-cartcountbg').style.opacity = '1.0';
    }

    function addtocart(){
        console.log('add item to cart')
        document.getElementById('obj-cartcountbg').style.opacity = '1.0';

    }

    function changeslides(currentslidecolorindex,currentslideindex){
        document.getElementById("slide-0-big").src="./img/6detail-bitmap-1-"+[currentslidecolorindex]+".png";
        console.log(document.getElementById("slide-0-big").src)
        //console.log(currentslidecolorindex+"-"+currentslidecolorindex) ;
    }


    function updatecolortext(currentslidecolorindex){
        document.getElementById('colortext').innerHTML = colortxt[currentslidecolorindex]; //update the colortext
        //document.getElementById('colortext').style.color = "rgb(185, 191, 5, 1.0)" ;  //update the colortext's color
        document.getElementById('colortext').style.transform = "scale(1.2)" ;
        document.getElementById('colortext').style.left = "740px" ;
        //console.log(colortxt[currentslideindex])
    }

    function updatesizetext(currentSizeIndex){
        document.getElementById('text-dimension').innerHTML = sizetxt[currentSizeIndex]; //update the colortext
        console.log("size is"+currentSizeIndex);
    }




    changetoone = function (){
        document.getElementById('slide-0-big').setAttribute("src","./img/6detail-bitmap-1-1.png");
    }
    
    changetotwo = function (){
        document.getElementById('slide-0-big').setAttribute("src","./img/6detail-bitmap-3-1.png");
    }
    changetothree = function (){
        document.getElementById('slide-0-big').setAttribute("src","./img/6detail-bitmap-4-1.png");
    }
    
    changetofour = function (){
        document.getElementById('slide-0-big').setAttribute("src","./img/6detail-bitmap-5-1.png");
    }




});


