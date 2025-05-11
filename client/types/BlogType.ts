type BlogType = {
  _createdAt: Date;
  views: number;
  author: { _id: string };
  _id: string;
  description: string;
  image: string;
  category: string;
  title: string;
};

export default BlogType;
