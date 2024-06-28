const { kafka } = require("./client.js");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  console.log("Connecting to consumer >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  await consumer.connect();
  console.log("Connected to consumer");
  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });
  await consumer.run({
eachMessage: async ({topic, partition, message}) => {
      console.log(
        `recieved for topic ${topic} on partition ${partition} \n message is ` +
          message.value.toString()
      );
    },
  });
}

init();
