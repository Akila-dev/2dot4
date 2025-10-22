/* eslint-disable react/prop-types */
import { CONTACT } from "../utils/data";
import { HoverScale } from "../components";

import { BiLogoLinkedinSquare } from "react-icons/bi";
import { PiInstagramLogoFill, PiDotsThreeOutlineFill } from "react-icons/pi";
import { PiYoutubeLogoFill } from "react-icons/pi";

const FooterSocialLinks = ({ footer }) => {
  const contact = { ...CONTACT };

  const socialIcons = [
    <PiInstagramLogoFill key={0} className="social-icons" />,
    <BiLogoLinkedinSquare key={1} className="social-icons" />,
    <PiYoutubeLogoFill key={2} className="social-icons" />,
  ];

  return (
    <div>
      {/* MD-XL ONLY */}
      <div
        className={`!hidden md:!flex ${
          footer ? "" : "layout-sidebars layout-sidebar-r !justify-center"
        }`}
      >
        {contact.socials.map((link, id) => (
          <HoverScale key={id}>
            <a href={link} target="_blank" className={`pointer-events-auto`}>
              {socialIcons[id]}
            </a>
          </HoverScale>
        ))}
      </div>
      {/* XS-SM ONLY */}
      <div
        className={`!flex md:!hidden group relative ${
          footer ? "" : "layout-sidebars layout-sidebar-r "
        }`}
      >
        <PiDotsThreeOutlineFill className="text-xl pointer-events-auto" />

        <div className="absolute bottom-[120%] flex flex-col gap-2 transition-all duration-700 scale-0 group-hover:scale-100 group-active:scale-100 origin-bottom">
          {contact.socials.map((link, id) => (
            <HoverScale key={id}>
              <a
                href={link}
                target="_blank"
                className={`pointer-events-auto scale-150`}
              >
                {socialIcons[id]}
              </a>
            </HoverScale>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
