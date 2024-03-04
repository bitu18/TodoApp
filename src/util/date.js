const date = new Date();

let day = date.getDate();
day = day < 10 ? `0${day}` : day;

let month = date.getMonth() + 1;
month = month < 10 ? `0${month}` : month;

const year = date.getFullYear();

const today = `${day}/${month}/${year}`;
export default today;
