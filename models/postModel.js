import mongoose from "mongoose";

const postSchema = mongoose.model(
  {
    title: {
      type: string,
      required: [true, "title is required!"],
      trime: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
