import Link from "next/link";

const menus = [
  { name: "HOME", href: "/" },
  { name: "SERVICE", href: "/service" },
  { name: "PRICE", href: "/price" },
  { name: "BLOG", href: "/blog" },
  { name: "ACCESS", href: "/access" },
  { name: "CONTACT", href: "contact" },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-green-700">
          サンプル
        </h1>

        <nav className="text-gray-800">
          <ul className="flex gap-6 font-medium">
            {menus.map((menu) => (
              <li key={menu.href}>
                <Link href={menu.href}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}