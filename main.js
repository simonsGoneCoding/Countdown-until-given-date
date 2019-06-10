const startDate = new Date('2019-12-30 22:00:00').getTime();
const spans = [...document.querySelectorAll('h1 span')]


const countdown = setInterval(() => {
    const nowDate = new Date().getTime();
    const timeToStart = Math.floor((startDate - nowDate)); //miliseconds 
    const days = Math.floor(timeToStart / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeToStart / (1000 * 60 * 60) - days * 24);
    const minutes = Math.floor((startDate / (1000 * 60) - nowDate / (1000 * 60)) % 60);
    const seconds = Math.floor((timeToStart / 1000) % 60);
    const timeArray = [days, hours, minutes, seconds]
    spans.forEach((index, variable) => {
      index.textContent = timeArray[variable]
    })
  },
  1000)