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
