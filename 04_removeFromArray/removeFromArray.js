const removeFromArray = function(arr, ...values) {
    const arrFinal = arr.filter(Element => Element !== values);
    const arrType = arr.filter(Element => !values.includes(Element));
    return arrFinal, arrType;  
    
};



// Do not edit below this line
module.exports = removeFromArray;
