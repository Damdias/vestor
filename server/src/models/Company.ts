import mongoose from "mongoose";

interface CompanyAttrs {
  name: string;
  stocks: {
    stockType: string;
    stock: number;
  };
  userId: string;
}

interface ShareTypes extends mongoose.Document {
  stockType: string;
  stock: number;
}
interface CompanyDoc extends mongoose.Document {
  name: string;
  stocks: Array<ShareTypes>;
  userId: string;
}

interface CompanyModel extends mongoose.Model<CompanyDoc> {
  build(attrs: CompanyAttrs): CompanyDoc;
}

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    stocks: [
      {
        stockType: {
          type: String,
          required: true,
        },
        stock: { type: Number },
      },
    ],
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        ret.stocks = ret.stocks.map((stock: ShareTypes) => ({
          stockType: stock.stockType,
          stock: stock.stock,
          id: stock._id,
        }));
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

CompanySchema.statics.build = (attrs: CompanyAttrs) => {
  return new Company(attrs);
};

const Company = mongoose.model<CompanyDoc, CompanyModel>(
  "company",
  CompanySchema
);
export { Company };
