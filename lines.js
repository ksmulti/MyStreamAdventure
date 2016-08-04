var split = require('split');
var through = require('through2');

var write_count = 1;
function write(line, encoding, next) {
    if (write_count % 2 == 0)
        this.push(line.toString().toUpperCase() + '\n');
    else
        this.push(line.toString().toLowerCase() + '\n');
    write_count++;
    next();
}

var stream = through(write);
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
