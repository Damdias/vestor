import mongoose from "mongoose";

interface ShareholderAttrs {
  name: string;
  stocks: number;
  companyId: string;
  userId: string;
}

interface ShareholderDoc extends mongoose.Document {
  name: string;
  stocks: number;
  companyId: string;
  userId: string;
}

interface ShareholderModel extends mongoose.Model<ShareholderDoc> {
  build(attrs: ShareholderAttrs): ShareholderDoc;
}

const ShareholderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    stocks: {
      type: Number,
    },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

ShareholderSchema.statics.build = (attrs: ShareholderAttrs) => {
  return new Shareholder(attrs);
};

const Shareholder = mongoose.model<ShareholderDoc, ShareholderModel>(
  "shareholder",
  ShareholderSchema
);
export { Shareholder };
