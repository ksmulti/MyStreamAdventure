var concat = require('concat-stream');

function reverse(s){
    return s.split("").reverse().join("");
}

process.stdin.pipe(concat(function (body) {
    var reverse_body = reverse(body.toString());
    console.log(reverse_body);
}));