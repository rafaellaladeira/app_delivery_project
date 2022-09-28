const padTo2Digits = (thing) => thing.toString().padStart(2, '0');

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

export default formatDate;
