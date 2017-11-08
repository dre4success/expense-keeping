import numeral from 'numeral';
numeral.register('locale', 'NGN', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  currency: {
    symbol: '\u20A6'
  }
});

numeral.locale('NGN');
