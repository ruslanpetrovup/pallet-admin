import { CollectionConfig } from "payload/types";
import ResetBonusUserComponent from "../custom/ResetBonusUserComponent";
import { isAdmin } from "../access/isAdmin";

const ResetBonusUser: CollectionConfig = {
  slug: "reset-bonus-user",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    components: {
      views: {
        List: ResetBonusUserComponent,
      },
    },
  },
  fields: [],
};

export default ResetBonusUser;
