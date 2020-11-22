
function myfunction(taka,tax, customer){
    var product_price = taka;
    return result = product_price- taka /100 * tax  +" By " + customer;

}

//Data Show kora holo
document.querySelector("#mobile").innerHTML=  myfunction(7000,20 ,"Sejaa"); 
document.querySelector("#bkash").innerHTML=  myfunction(1000,20 , "Monir");
document.querySelector("#laptop").innerHTML=  myfunction(10000,20 ,"Josim") 