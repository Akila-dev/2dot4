import { HoverScale } from "../../components";
import { Link } from "react-router-dom";
import { CONTACT } from "../../utils/data";

const Logo = () => {
  const contact = { ...CONTACT };

  return (
    <h3 className="uppercase w-full border-none flex items-center justify-center h-full pointer-events-auto">
      <HoverScale>
        <Link to="/" className="logo">
          {contact.brandName}
        </Link>
      </HoverScale>
    </h3>
  );
};

export default Logo;
