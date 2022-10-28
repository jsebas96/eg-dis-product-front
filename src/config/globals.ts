import env from "./.env.json";

const environment = process.env.NODE_ENV;

export const base_url =
  environment === "production"
    ? env?.main_api.prod
      ? env.main_api.prod
      : undefined
    : env?.main_api?.dev
    ? env.main_api.dev
    : undefined;
