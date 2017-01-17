import React from 'react';

const Compare = (last, random) => {
  if(last > random && last < 101) {
    return 'Sorry, that guess is too high. Try a lower number.';
  }
  else if (last < random && last > 0) {
    return 'Sorry, that guess is too low. Try a higher number.';
  }
  else if (last == random){
    return 'Wooooooo Hooooooo!';
  }
  else if (last === ''){
    alert('Error: Not a number');
    return '';
  }
  else {
    alert('Error: Outside range, pick another number');
    return '';
  }
}

export default Compare;
