import { io } from "socket.io-client";

const env = process.env.NODE_ENV;

const socket = io(
  env == "development"
    ? "http://localhost:8000"
    : process.env.NEXT_PUBLIC_SOCKET_URL,
);
socket.on("connect", () => {
  console.log("connected");
});
export default socket;
