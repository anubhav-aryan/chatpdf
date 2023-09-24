import { PineconeClient } from "@pinecone-database/pinecone";

let pinecone: PineconeClient | null = null;

export const getPinecone = async () => {
  if (pinecone === null) {
    pinecone = new PineconeClient();
    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT!,
      apiKey: process.env.PINECONE_API_KEY!,
    });
  }

  return pinecone;
};

export async function loadS3IntoPincecone(fileKey: string) {
    
}
