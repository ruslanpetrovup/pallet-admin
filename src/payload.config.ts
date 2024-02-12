import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import { Users } from "./collections/Users";
import Products from "./collections/Products";
import Media from "./collections/Media";
import Orders from "./collections/Orders";
import Buyout from "./collections/Buyout";
import CategoriesProducts from "./collections/CategoriesProducts";
import ResetBonusUser from "./collections/ResetBonusUser";
import Storehouse from "./collections/Storehouse";
import RequestPartner from "./collections/RequestPartner";

export default buildConfig({
  serverURL: process.env.SERVER_ADMIN,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Products,
    Media,
    Orders,
    Buyout,
    CategoriesProducts,
    ResetBonusUser,
    Storehouse,
    RequestPartner,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
