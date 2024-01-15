import blogData from "public/data/articles.json"

export function getBlogBySlug({params}){

    const slug = params.slug
    const blogPost = Object.values(blogData).find((post) => post.slug == slug);
    return blogPost || null;

}
