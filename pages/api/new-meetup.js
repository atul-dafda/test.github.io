import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://atul-bloom:8K5pB2ygmeWmC6ln@cluster0.xp4rl1y.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    // can add try-catch block to handle error
    console.log(result);

    //close database connection
    client.close();

    // send response back
    res.status(201).json({ message: "Meetup added!" });
  }
}

export default handler;
