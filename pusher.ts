import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "ap1",
  useTLS: true,
});

export const clientPusher = new ClientPusher("ff0213d58edc37922b0d", {
  cluster: "ap1",
  forceTLS: true,
});
