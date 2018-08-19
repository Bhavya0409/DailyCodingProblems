scheduler = (func, time) => {
  setInterval(func, time);
}

test = () => {
  console.log('hello');
}

scheduler(test, 1000);
