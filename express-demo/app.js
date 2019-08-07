const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('reached home');
})

app.get('/sayHello', (req, res) => {
  let arr = [1, 2, 3];
  arr.forEach((num) => {
    if (typeof num === 'number') {
      res.send('hi')
    }
  })
})

app.get('/sayHello/name/:name', (req, res) => {
  let name = req.params.name;
  res.send(`hi ${name}`);
})

app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = parseInt(req.query.shift);

  if (!text) {
    res.status(400).send('need to submit text');
  } else if (!shift) {
    res.status(400).send('need to submit shift');
  }

  //abc //1 => bcd
  //'A'.charCodeAt(0) => 65 + 60 =
  // String.fromCharCode(66) = 'B'

  let charArr = text.toUpperCase().split(''); //[A, B, C]
  //                                             66
  //         0                                   [B, C, D]
  //     |-------
  //  26 |  2
  //
  //     ________
  //        2

  let resArr = charArr.map((letter) => {
    let charNum = letter.charCodeAt(0) + (shift % 26); //
    const convertBack = String.fromCharCode(charNum);
    return convertBack;
  })

  console.log(resArr.join(''));





  res.send(`info submitted ${text} ${shift}`)
})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});