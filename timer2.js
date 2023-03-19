
const stin = process.stdin;
const stout = process.stdout;
stin.setRawMode(true);
stin.setEncoding('utf8');
const alarm = () => {
  process.stdout.write('\x07');
};

stin.on('data', input => {
  if (input === 'b') {
    alarm();
  }
  if (input >= 1 && input <= 9) {
    stout.write(`Timer set for ${input} seconds...\n`);
    setTimeout (() => {
      alarm(); 
    }, (input * 1000));
  }
  if (input === '\u0003') {
    stout.write("Thanks and adios, ciao, arrivederci, auf wiedersehen etc\n");
    process.exit();
  }
});
