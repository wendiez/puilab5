
// Store

// Retrieve
document.getElementById("quantadjustItem").innerHTML = localStorage.getItem("shoppingcartitem_00");


let shoppingcartitem = 0; 
let currentSize = "S" ;
let colortxt= ["select a color", "Color: Green", "Color: Dark Green", "Color: Navy Blue"];


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

    
    let presspicture = document.querySelectorAll('.allslides');
    //console.log(typeof presspicture);
    console.log( Array.from(presschangecolor));

    for (var i = 0; i < presspicture.length; i++){
        presspicture[i].addEventListener('click', function(event) {
            getclicked_classindex2();  //get the index of clickedobj 
            console.log(">"+ event.target.className);
            let obj=event.target;
            let parent=obj.parentElement;
            console.log(">"+ event.target.className);
            console.log(parent);
            //console.log(">>"+ event.target); 
        });
    }



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

    function getclicked_classindex2(){
        presspicture.forEach(function(check){
            check.addEventListener('click', checkIndex);
          })

          console.log(presspicture);
        function checkIndex(event){
            console.log( "is"+ Array.from(presspicture).indexOf(event.target) );
            let y= 4 //currentslideindex
            let x= Array.from(presspicture).indexOf(event.target)+2 //currentslidecolorindex
            changeslides(x,y); 
            //push the index to update color
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

    function updateSize(){
        currentSize =  document.getElementsByClassName('a6detail sizess ss').nodevalue;
        document.getElementById('text-size').nodevalue = currentSize
        console.log('currentSize')



    }


    function changeslides(currentslidecolorindex,currentslideindex){
        document.getElementById("slide-0-big").src="./img/6detail-bitmap-"+[currentslideindex]+"-"+[currentslidecolorindex]+".png";

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
});
