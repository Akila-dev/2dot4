/* eslint-disable react/prop-types */
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { GoDotFill } from "react-icons/go";

import { ShareOn } from "../../components";

const BlogSingle = ({ data }) => {
  const { title, mainImage, excerpt, publishedAt, tags, body } = data;
  return (
    <div className="pb-[3em] space-y-[2em]">
      {/* Hero */}
      <div className="overflow-hidden rounded-[1em] border border-[--border]">
        <div>
          <img
            src={mainImage.asset.url}
            alt={mainImage.alt || title || "Blog Image"}
            className="w-full h-auto max-h-[22em] rounded-md object-cover"
          />
        </div>
        <div className="bg-[--card] p-[1em] md:p-[1.5em] flex flex-col gap-[1em]">
          <div className="flex items-center justify-between gap-[1em] flex-wrap">
            <p className="flex items-center gap-[0.3em] pt-[0.5em]">
              <span className="p border border-[--border] rounded-[0.5em] px-[0.5em] py-[0.2em] uppercase origin-left scale-95">
                {tags && tags[0]}
              </span>{" "}
              <GoDotFill className="inline-block" />
              <span>{format(new Date(publishedAt), "MMM d, yyyy")}</span>
            </p>
          </div>
          <h1 className="">{title}</h1>
        </div>
      </div>
      {/* Body */}
      <div className="space-y-[1.5em]">
        <p className="p border-b border-[--border] pb-[1.5em] !font-semibold italic">
          {excerpt}
        </p>
        <article className="prose prose-invert prose-p:text-[--grey] prose-h2:h2 prose-h3:h3 prose-img:rounded-md space-y-2 description">
          <PortableText value={body} components={portableComponents} />
        </article>
        <p className="flex items-center flex-wrap gap-[0.3em] pt-[0.5em]">
          <span className="pr-[0.5em]">Tags:</span>
          {tags.map((tag, i) => (
            <span
              key={i}
              className="p border border-[--border] rounded-[0.5em] px-[0.5em] py-[0.2em] uppercase origin-left scale-95"
            >
              {tag}
            </span>
          ))}
        </p>
        <ShareOn title={title} />
      </div>
    </div>
  );
};

const portableComponents = {
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <img
          src={value.asset.url}
          alt=""
          width={800}
          height={400}
          className="rounded-md"
        />
      ) : null,
  },
};

export default BlogSingle;
