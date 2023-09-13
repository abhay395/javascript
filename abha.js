let mydate =new Date(2005,11);
switch (mydate.getDay()){
    case 0: text='sunday'
    break;
    case 1: text='monday'
    break;
    case 2: text='tuseday'
    break;
    case 3: text='wensday'
    break;
    case 4: text='thusday'
    break;
    case 5: text='friday'
    break;
    case 6: text='satrday'
    break;
    default: text='dis is not a day'

}
console.log(text)
