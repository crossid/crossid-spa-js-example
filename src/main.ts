import "./style.css";
import { newCrossidClient, Client } from "@crossid/crossid-spa-js";

// inits a client that handles signing users in and out.
export const initClient = async () => {
  const client = await newCrossidClient({
    tenant_id: "indexia",
    client_id: "DMjxjVJEJ8ROScoxHEWw4gvmSerBZhdg",
    audience: ["example.com"],
    scope: "openid profile",
    redirect_uri: "http://localhost:3009",
    // use session_storage or local_storage for a persistent cache.
    cache_type: "memory",
  });

  return client;
};

export const login = async (client: Client) => {
  await client.loginWithRedirect({});
};
