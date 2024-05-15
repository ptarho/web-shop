import { IComment } from "./comment";

export type IProduct = {
  _id: string;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: IComment[];
};
