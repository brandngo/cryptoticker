export default function numStringRound(str, places) {
  const num = parseFloat(str);
  if (num < 0.009) {
    let length = (num + '').replace('.', '').length;  // for floats
    return num.toFixed(places+length - 2);
  }
  return num.toFixed(places);
};