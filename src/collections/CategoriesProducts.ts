import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const CategoriesProducts: CollectionConfig = {
  slug: "categories-products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },

  fields: [
    {
      name: "id",
      type: "text",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default CategoriesProducts;
