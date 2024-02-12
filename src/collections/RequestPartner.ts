import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const RequestPartner: CollectionConfig = {
  slug: "request-partner",
  admin: {
    useAsTitle: "message",
    defaultColumns: ["phone", "firstName", "message"],
  },
  access: {
    read: () => true,
    create: () => true,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "message",
      type: "text",
      defaultValue: "Запит на партнерство",
    },
  ],
};

export default RequestPartner;
