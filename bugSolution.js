const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(error => {
      console.error('Error in / route:', error);
      next(error); // Pass the error to the error handling middleware
    });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Dummy asynchronous operation
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const success = Math.random() < 0.8; 
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Asynchronous operation failed'));
      }
    }, 1000);
  });
}
