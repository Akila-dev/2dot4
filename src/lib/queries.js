export const JOB_QUERY = `*[_type == "job"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "department": department->name,
  employmentType,
  location,
  salaryRange,
  description,
  applicationLink,
  publishedAt
}`;

export const BLOG_QUERY = (start = 0, limit = 6) => `
  *[_type == "blog"] | order(publishedAt desc) [${start}...${start + limit}] {
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset -> { url },
      alt
    },
    excerpt,
    publishedAt,
    "tags": tags[]
  }
`;

export const SINGLE_BLOG_QUERY = (slug) => `
  *[_type == "blog" && slug.current == "${slug}"][0]{
    _id,
    title,
    "slug": slug.current,
    mainImage {
      asset -> { url },
      alt
    },
    excerpt,
    publishedAt,
    "tags": tags[],
    body
  }
`;
