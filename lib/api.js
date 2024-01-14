import blogData from "public/data/articles.json"

export function getBlogBySlug({params}){

    const slug = params.slug
    const blogPost = Object.values(blogData).find((post) => post.slug == slug);
    return blogPost || null;

}

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    nl: () => import('./dictionaries/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()