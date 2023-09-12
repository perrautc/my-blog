import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "07u7cf02",
  dataset: "production",
  apiVersion: "2023-09-11",
  useCdn: false,
};

const client = createClient(config);

export default client;
