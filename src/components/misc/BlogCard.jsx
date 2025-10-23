/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
const BlogCard = ({ data, hero, mini_card }) => {
  const { title, mainImage, excerpt, publishedAt, slug, tags } = data;
  return hero ? (
    <div
      className="w-full min-h-[25em] pt-[3em] md:pt-[5em] overflow-clip flex items-end border border-[--border] rounded-[1em] bg-cover bg-center bg-no-repeat hover:scale-[1.02] transition-all duration-700"
      style={{ backgroundImage: `url(${mainImage.asset.url})` }}
    >
      <div className="h-full bg-gradient-to-b from-transparent to-[--bg] p-[1em] py-[2em] md:p-[2em] lg:p-[3em] xl:px-[4.5em]">
        <p className="border border-[--border] rounded-[0.5em] px-[0.5em] py-[0.2em] uppercase inline-block mb-[1em]">
          Latest Post
        </p>
        <Link to={`/blog/${slug}`} className="flex justify-between gap-1 group">
          <h1 className="lg:w-5/6 group-hover:underline">{title}</h1>
          <div className="hidden lg:block">
            <HiOutlineArrowRight
              className={`size-[4em] transition-all duration-700 group-hover:-rotate-45 group-hover:scale-110`}
            />
          </div>
        </Link>
        <p className="pb-[1em] pt-[0.5em] md:w-3/4 p">{excerpt}</p>
        <div className="flex items-center flex-wrap gap-[0.4em]">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="p border border-[--border] rounded-[0.5em] px-[0.5em] py-[0.2em] uppercase origin-left scale-95"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  ) : mini_card ? (
    <Link
      to={`/blog/${slug}`}
      className="w-full h-[10em] overflow-clip flex items-end border border-[--border] rounded-[0.5em] bg-cover bg-center bg-no-repeat hover:scale-[1.02] transition-all duration-700"
      style={{ backgroundImage: `url(${mainImage.asset.url})` }}
    >
      <div className="bg-gradient-to-b from-transparent to-[--bg] p-[1em] space-y-[0.5em]">
        <h3 className="lg:w-5/6 group-hover:underline line-clamp-2 card-title">
          {title}
        </h3>
        <p className="flex items-center gap-[0.3em] pt-[0.5em]">
          <span className="p border border-[--border] rounded-[0.5em] px-[0.5em] py-[0.2em] uppercase origin-left scale-95">
            {tags && tags[0]}
          </span>{" "}
          <GoDotFill className="inline-block" />
          <span>{format(new Date(publishedAt), "MMM d, yyyy")}</span>
        </p>
      </div>
    </Link>
  ) : (
    <div className="space-y-[0.5em] transition-all duration-700 hover:scale-[1.02]">
      {mainImage?.asset?.url && (
        <img
          src={mainImage.asset.url}
          alt={mainImage.alt || title}
          className="w-full h-[12em] object-cover rounded-[1em] border border-[--border]"
        />
      )}
      <div className="space-y-[1em] py-[1em]">
        <div>
          <h3 className="text-lg font-semibold text-white card-title line-clamp-2">
            {title}
          </h3>
          <p className="flex items-center gap-[0.3em] pt-[0.5em]">
            <span className="p border border-[--border] rounded-[0.5em] px-[0.5em] py-[0.2em] uppercase origin-left scale-95">
              {tags && tags[0]}
            </span>{" "}
            <GoDotFill className="inline-block" />
            <span>{format(new Date(publishedAt), "MMM d, yyyy")}</span>
          </p>
          <p className="text-gray-300 text-sm line-clamp-2 pt-[1em] p">
            {excerpt}
          </p>
        </div>
        <Link
          to={`/blog/${slug}`}
          className="p inline-flex items-center gap-[0.5em] transition-all duration-700 hover:border-b hover:border-[--grey] hover:scale-105 origin-left"
        >
          <span>Read More</span> <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
