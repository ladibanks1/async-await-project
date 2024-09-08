// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
  }
}

// Example usage for Task 01
const values = ['apple', 'banana', 'cherry'];
iterateWithAsyncAwait(values);

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
  try {
    const response = await fetch('https://mongo-crud-api-bbel.onrender.com/getAccount/7247744753'); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
}

// Example usage for Task 03
awaitCall();

// Task 04: Awaiting Concurrent Requests
async function concurrentRequests() {
  try {
    const [response1, response2] = await Promise.all([
      fetch('https://mongo-crud-api-bbel.onrender.com/getAccount/7247744753'), 
      fetch('https://mongo-crud-api-bbel.onrender.com/getAccount/7247744753')
    ]);

    if (!response1.ok || !response2.ok) {
      throw new Error('One or both network responses were not ok');
    }

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log('Data from API 1:', data1);
    console.log('Data from API 2:', data2);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
}

// Example usage for Task 04
concurrentRequests();
