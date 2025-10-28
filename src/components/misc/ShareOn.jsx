/* eslint-disable react/prop-types */
import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCopy } from "react-icons/io5";

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
      icon: <AiFillTwitterCircle className="social-icons scale-110" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    },
    {
      icon: <BiLogoLinkedinSquare className="social-icons scale-105" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    },
    {
      icon: <IoLogoWhatsapp className="social-icons" />,
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
      <button onClick={handleCopy} className="relative">
        <IoCopy className="social-icons" />
        {copied && (
          <span className="absolute -top-[2.5em] left-1/2 -translate-x-1/2 bg-[--bg] text-[--text] border border-[--card] rounded-[0.5em] px-[0.5em] py-[0.2em] text-[0.75em] whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
      {shareLinks.map((link, index) => (
        <a href={link.url} target="_blank" rel="noreferrer" key={index}>
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default ShareOn;
