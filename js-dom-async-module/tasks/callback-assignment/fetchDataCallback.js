function fetchDataWithCallback(callback) {
  setTimeout(function () {
    const error = Math.random() < 0.5; 

    try {
      if (error) {
        throw new Error("Fetch failed");
      } else {
        callback("Data fetched");
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  }, 2000);
}


fetchDataWithCallback(function (data) {
  console.log(data); 
});
