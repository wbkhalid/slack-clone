import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const streamClient = StreamChat.getInstance(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRET
);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUser(userData);
    console.log(userData, "userData");
    return userData;
  } catch (error) {
    console.log(error, "upstream error");
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await streamClient.deleteUser(userId);
    console.log(userId, "userId ");
  } catch (error) {
    console.log(error, "upstream error");
  }
};
export const generateStreamToken = async (userId) => {
  try {
    const userIdString = userId.toString();

    return streamClient.createToken(userIdString);
  } catch (error) {
    console.log(error, "upstream error");
    return null;
  }
};
