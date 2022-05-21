// Code your solutions in this file
function writeCards(names, event) {

    const messages = [];
   
     for (let i = 0; i < names.length; i++) {
       const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       messages.push(message);}

     return messages;
   }
   
   console.log(writeCards(['Bob', 'Sue'], 'wedding'));
   
   function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber >= 0) {
        countDown(nextNumber);
    }
}
countDown(3);
