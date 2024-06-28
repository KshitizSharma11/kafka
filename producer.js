const { kafka } = require("./client.js");
async function init() {
  const producer = kafka.producer();
  console.log("Connecting to producer ................");
  await producer.connect();
  console.log("connected to producer");
  console.log("sending updates .......................");
  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: 0,
        key: "rider-update",
        value: JSON.stringify({ name: "vegeta", location: "planet sadala" }),
      },
    ],
  });
  await producer.disconnect();
}
init();
