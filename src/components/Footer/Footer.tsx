import { usefulList } from "./constants";

export const Footer = () => {
  return (
    <footer>
      <ul>
        {usefulList.map((item, idx) => (
          <li key={idx}>
            <a href={item.href}>
              {item.name}
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
