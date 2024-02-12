import axios from "axios";
import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: () => true,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: "id",
      type: "text",
      required: true,
    },
    {
      name: "idUser",
      type: "text",
      required: true,
    },
    {
      name: "statusOrder",
      type: "select",
      options: [
        {
          label: "В процесі оброблення",
          value: "loading",
        },
        {
          label: "Виконано",
          value: "accept",
        },
        {
          label: "Відхилено замовником",
          value: "rejected",
        },
      ],
      defaultValue: "loading",
      hooks: {
        afterChange: [
          (args) => {
            if (args.data.statusOrder === "accept") {
              axios.post(`${process.env.SERVER_API}/auth/bonus/activated`, {
                id: args.data.id,
                idUser: args.data.idUser,
              });
            }
          },
        ],
      },
      required: true,
    },
    {
      name: "statusPayment",
      type: "select",
      options: [
        {
          label: "Оплачено",
          value: "accept",
        },
        {
          label: "Не Оплачено",
          value: "not accept",
        },
      ],
      defaultValue: "not accept",
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "delivery",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
    },
    {
      name: "storehouse",
      type: "text",
    },
    {
      name: "paymentSelect",
      type: "text",
      required: true,
    },
    {
      name: "dateSend",
      type: "text",
      required: true,
    },
    {
      name: "dateCreate",
      type: "text",
      required: true,
    },
    {
      name: "products",
      type: "array",
      required: true,
      fields: [
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
          name: "score",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "againData",
      type: "json",
      required: true,
      admin: {
        hidden: true,
      },
    },
  ],
};

export default Orders;
