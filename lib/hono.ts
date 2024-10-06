import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";
import { envKeys } from "./env";

export const client = hc<AppType>(envKeys.APP_URL);