const calculateDiscount=(count)=>{
    let discount=0;
    switch(count){
        case 0:
             discount=0;
        break;
        case 1:
             discount=0;
        break;
        case 2:
             discount=0.1;
        break;
        case 3:
             discount=0.15;
        break;
        case 4:
             discount=0.20;
        break;
        default:
             discount=0.25;
        break;
    }
    return discount;
}
export default calculateDiscount