import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import payload from "payload";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    beforeValidate: [
      async (args) => {
        function generateProductId(numberProduct: number) {
          var productId = (numberProduct + 1).toString().padStart(6, "0");
          return productId;
        }
        const result = await payload.find({ collection: "products" as never });

        if (args.operation === "create") {
          return {
            ...args.data,
            _id: generateProductId(result.totalDocs),
            id: generateProductId(result.totalDocs),
          };
        } else {
          return args.data;
        }
      },
    ],
  },
  fields: [
    {
      name: "id",
      type: "text",
      required: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: "customId",
      type: "text",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "span",
      type: "text",
      required: true,
    },
    {
      name: "size",
      type: "text",
      required: true,
    },
    {
      name: "weight",
      type: "text",
      required: true,
    },
    {
      name: "upload",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories-products", // Указание связанной коллекции
      hasMany: false, // Указание, что каждый продукт относится только к одной категории
    },
    {
      name: "images",
      type: "array",
      required: true,
      fields: [
        {
          name: "catalog",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default Products;
