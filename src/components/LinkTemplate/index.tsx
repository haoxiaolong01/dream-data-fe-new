import React from "react";
import { useNavigate } from "umi";

const LinkTemplate: React.FC<{
  children: any;
  link: string;
  disabled?: boolean;
}> = ({ children, link, disabled }) => {
  const navigate = useNavigate();

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-inherit no-underline hover:no-underline focus:no-underline focus:outline-none"
      onClick={(e) => {
        if (!(e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          navigate(link);
        }
      }}
    >
      {children}
    </a>
  );
};
export default LinkTemplate;
