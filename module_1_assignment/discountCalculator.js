// 1) number question answer

function discountCalculator(value) {
    if(value >= 200){

        return (value * 15) / 100
    }
    else if(value >= 100 && value < 200){

       return (value * 10) / 100
    }
    else if(value >= 50 && value < 100){
        
        return (value * 5) / 100
    }
    else{
        
        return '😂 less than $50, no discount 😂'
    }
    
}

console.log(discountCalculator(50));
