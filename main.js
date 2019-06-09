const startDate = new Date('2019-12-30 22:00:00').getTime();
const spans = [...document.querySelectorAll('h1 span')]


const countdown = setInterval(() => {
  const nowDate = new Date().getTime();
  const timeToStart = Math.floor((startDate - nowDate) / 1000);
  const days = Math.floor(timeToStart / (60 * 60 * 24));
  const hours = Math.floor(timeToStart / (60 * 60) - days * 24);
  const minutes = Math.floor(timeToStart / (60) - hours * 60);
  const seconds = timeToStart % 60;
  // const seconds = timeToStart - (minutes * 60 + hours * 3600 + days * 3600 * 24);
  const timeArray = [days, hours, minutes, seconds]
  spans.forEach((index, variable) => {
   index.textContent = timeArray[variable]
  })
 },
 1000)