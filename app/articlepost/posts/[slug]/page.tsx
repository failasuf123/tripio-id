import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../api/apiArticle/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-2">
          {post.data.title}
        </h1>
        <p className="text-gray-600">{post.data.date}</p>
      </div>

      <article className="prose mt-8">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default PostPage;
