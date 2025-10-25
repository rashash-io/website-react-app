import type { NavPagesListType } from "./data.ts";

export function FullNavbar(pageList: NavPagesListType) {
  return (
    <ul>
      {pageList.map((item) => (
        <li key={item.id}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
