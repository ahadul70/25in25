const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTic: true,
  showcolortitle: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call using setTimeout
    setTimeout(() => {
      if (dummyApiResponse) {
        resolve(dummyApiResponse);
      } else {
        reject("Some error occurred! Please try again");
      }
    }, 500);
  });
}

export default featureFlagsDataServiceCall;
