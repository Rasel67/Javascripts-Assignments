//https://github.com/Rasel67/my_first_website 



/* kilometer To Meter */

function kilometerToMeter(kilometer){

    var meter = kilometer*1000;
    return meter;

}
var obj = kilometerToMeter(170);
console.log(obj);

var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500; 


/* Budget Calculator */

function budgetCalculator( a , b ,c){
    var Ghori = watchPrice*a;
    var mobile = phonePrice*b;
    var laptop =laptopPrice*c;
    var totalPrice = Ghori + mobile +laptop;
    return totalPrice;

}

var obj = budgetCalculator(10 , 100 , 6);
console.log(obj);




/* Hotel Cost */
var day10 = 100 ;
var day11thToTwenty = 80 ;
var day21thTounlimited = 50;

function hotelCost(day){

    if(day10){
        var firstTendays = day10*day;
                firstTendays;
            if(day11thToTwenty){
                    var secondTwentyDay = day11thToTwenty*day;
                    secondTwentyDay;
        }
                if(day21thTounlimited){
                    var thirdToUnlimited = day21thTounlimited*day;
                     thirdToUnlimited;
                }

    }
   var totalCost = firstTendays + secondTwentyDay + thirdToUnlimited;
   console.log(totalCost);

}
var obj = hotelCost(30);




/*  Mega Friend */

var arr = ["ranju", "salam" , "kalam" , "Rasel Chowdhury" , "salam chowdhury khan"];
  
  var lgth = 0;
  var longest;
  
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
        }
    }
    
  console.log(longest);





 