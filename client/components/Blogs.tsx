import BlogType from "@/types/BlogType";
import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Image from "next/image";
//<Image src={post.image} alt="POS image" width={300} height={300} />

const Blogs = ({ post }: { post: BlogType }) => {
  return (
    <div className="h-[300px] w-[300px] shadow-2xl shadow-black bg-black flex flex-col items-start relative rounded-lg overflow-hidden">
      <img src={post.image} alt="" />
      <h1>{post.title}</h1>
      <p>{formatDate(post._createdAt)}</p>

      <div className="flex bg-[#bb1227] gap-2 items-center px-1 rounded-2xl absolute top-0 right-0">
        <Eye className="size-5" />
        <p>{post.views}</p>
      </div>
    </div>
  );
};

export default Blogs;
