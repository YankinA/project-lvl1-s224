import readlineSync from 'readline-sync';

export default() => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);
};



export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName} !`);

 const iter = (counter) => {
   const random = () => Math.floor(Math.random() * (100 - 0)) + 0;
   const randomNum = random();
   const evenNum = () => randomNum % 2 === 0 ? 'yes' : 'no';
   const even = evenNum();
  console.log(`Question: ${randomNum}`);
  if (counter > 3) {
    return console.log(`Congratulations, ${userName}!`);
}

const yourAnswer = readlineSync.question('Your answer: ');


if (even === yourAnswer) {
  console.log('Correct!');
  return iter(counter + 1);
}
 return console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${even}.\nLet's try again, ${userName}!`);
};
return iter(1);
};
