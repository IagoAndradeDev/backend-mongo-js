import mongo from "@prisma/orm-mongo/runtime"
import { contractFromJson } from "@prisma/orm-mongo/static"

import contractJson from "./contract.json" with { type: "json" }

export const contract = contractFromJson(contractJson)

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error("DATABASE_URL não foi definida no arquivo .env")
}

export const db = mongo({
  contract,
  url: databaseUrl
});