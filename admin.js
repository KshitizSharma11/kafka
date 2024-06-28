const { kafka } = require("./client.js");
console.log(`logger for kafka ${kafka}`);
async function init() {
  const admin = kafka.admin();
  console.log("admin connecting to Kafka..............");
  await admin.connect();
  console.log("admin connected successfully");
  console.log("Creating topic rider-updates ");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created successfully");
  console.log("disconnecting admin");
  await admin.disconnect();
}
init();
