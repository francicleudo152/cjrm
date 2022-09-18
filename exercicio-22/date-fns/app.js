const hoje =new Date();
console.log(hoje);
console.log(dateFns.isToday(hoje));

console.log(dateFns.format(hoje, 'MMMM'));
console.log(dateFns.format(hoje, 'YY'));
console.log(dateFns.format(hoje, 'dddd'));
console.log(dateFns.format(hoje, 'Do'));
console.log(dateFns.format(hoje, 'DD/MM/YYYY'));

const passado = new Date('April 7 2020 17:00:00');

console.log(dateFns.distanceInWords(hoje, passado));
