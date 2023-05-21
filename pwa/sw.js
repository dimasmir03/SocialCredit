self.addEventListener('install', function(event) {
    console.log("SW Install Event: Is in the process");
})

self.addEventListener('activate', (event) => {
  console.log("SW Activate Event: Is in the process")
})

self.addEventListener('fetch', (event) => {
    console.log("SW Fetch Event: Is in the process");
})