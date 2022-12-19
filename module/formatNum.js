function formatNum(number) {
  let nf = new Intl.NumberFormat('en-US');
  nf = nf.format(number);
  return nf;
}

export default formatNum;
