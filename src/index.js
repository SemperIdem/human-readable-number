module.exports = function toReadable (number) {
  const digits = new Map();
  digits.set(0, 'zero');
  digits.set(1, 'one');
  digits.set(2, 'two');
  digits.set(3, 'three');
  digits.set(4, 'four');
  digits.set(5, 'five');
  digits.set(6, 'six');
  digits.set(7, 'seven');
  digits.set(8, 'eight');
  digits.set(9, 'nine');

  const tens = new Map();
  tens.set(10, 'ten');
  tens.set(11, 'eleven');
  tens.set(12, 'twelve');
  tens.set(13, 'thirteen');
  tens.set(14, 'fourteen');
  tens.set(15, 'fifteen');
  tens.set(16, 'sixteen');
  tens.set(17, 'seventeen');
  tens.set(18, 'eighteen');
  tens.set(19, 'nineteen');

  const other = new Map();
  other.set(2, 'twenty');
  other.set(3, 'thirty');
  other.set(4, 'forty');
  other.set(5, 'fifty');
  other.set(6, 'sixty');
  other.set(7, 'seventy');
  other.set(8, 'eighty');
  other.set(9, 'ninety');

  let length = String(number).length;
  let result = '';
  
  switch(length) {
    case 1:
      result = digits.get(number);
      return result;
    case 2:
      if (number < 20) {
        result = tens.get(number);
        return result;
      }
      else {
        result = other.get(Number(String(number)[0]));
        if (number % 10 != 0) {
          result += ' ' + digits.get(Number(String(number)[1]))
        }
        return result;
      }
    case 3:
      result = digits.get(Number(String(number)[0])) + ' hundred';
      if(number % 100 != 0) {
        rest = Number(String(number)[1] + String(number)[2]);
        result += ' ' + toReadable(rest);
      }
      return result;
  }
}

