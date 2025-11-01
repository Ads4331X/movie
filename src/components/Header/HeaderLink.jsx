import { Link } from "react-router-dom";

export default function HeaderLink({ location, text, color, hoverColor }) {
  return (
    <Link
      to={`/${location}`}
      className={`no-underline  `}
      style={{
        color: color,
        transition: "color 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => (e.target.style.color = hoverColor)}
      onMouseLeave={(e) => (e.target.style.color = color)}
    >
      {text}
    </Link>
  );
}
