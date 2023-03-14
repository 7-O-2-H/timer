const timer = function(input) {
  if (input.length === 0) {
    console.log('No input');
    return;
  }
  for (let i = 0; i < input.length; i++) {
    const delay = input[i];
    if (delay < 0) {
      console.log('Invalid input');
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (delay * 1000));
  }
};

timer(process.argv.slice(2).map(Number));