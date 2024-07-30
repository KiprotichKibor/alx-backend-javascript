function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      const data = { message: 'Success' };
      resolve(data); // Resolve with data on success
    }, 1000); // Simulate a 1-second delay
  });
}

export default getResponseFromAPI;
