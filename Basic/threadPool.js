Promise.resolve().then(() => {
  console.log("Inside Promise");
});
process.nextTick(() => {
  console.log("Inside nextTick");
});
setTimeout(() => {
  console.log("Inside Timeout");
}, 0);
