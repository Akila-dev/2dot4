/* eslint-disable react/prop-types */
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

const ShareOn = ({ title }) => {
  const [copied, setCopied] = React.useState(false);
  const url = window.location.href;

  const shareLinks = [
    {
      icon: <FaFacebook className="social-icons" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    },
    {
      icon: <BiLogoLinkedinSquare className="social-icons" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      icon: <BiLogoLinkedinSquare className="social-icons" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    },
    {
      icon: <BiLogoLinkedinSquare className="social-icons" />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        title + " " + url
      )}`,
    },
  ];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-[0.35em]">
      <IoShareSocial className="social-icons" />
      <span className="pr-[0.5em] pl-[0.25em] p">Share On:</span>
      {shareLinks.map((link, index) => (
        <a href={link.url} target="_blank" rel="noreferrer" key={index}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default ShareOn;
