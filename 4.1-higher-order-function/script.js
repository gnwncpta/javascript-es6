function repeatLoop(minimum, total, action){
    for(let i = minimum; i <= total; i++){
        action(i);
    }
}

function minimum(param){
    return param;
}

repeatLoop( param => {
    param = 10;
    return param;
}  , 10, alert);
