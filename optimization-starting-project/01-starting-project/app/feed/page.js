import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

//  Функція генерації метаданних для динамічних метаданних.

export async function generateMetadata({ params }) {
  const posts = await getPosts();
  const numberOfPosts = posts.length;

  return {
    title: `Brows all our ${numberOfPosts} posts`,
    description: "Brows all our posts.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
