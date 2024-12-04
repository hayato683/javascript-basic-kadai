for(let number = 1; number<=15; number++){
if(number % 3 === 0 && number % 5 ===0){
    console.log('3と5の倍数です');
}
else if (number % 5 === 0){
    console.log('5の倍数です');
}
else if(number % 3 === 0){
    console.log('3の倍数です');
}
else{
    console.log(number);
}
}