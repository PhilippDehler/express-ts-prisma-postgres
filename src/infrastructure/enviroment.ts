import env from "env-var";

export const enviroment = {
  port: env.get("PORT").required().asString(),
};
