import Link from 'next/link';

export default function DefaultLayout({ children }) {
  return (
    <>
      <nav className="container mx-auto">
        <ul className="flex justify-center items-center text-gray-900">
          <li className="px-4 py-8">
            <Link href="/">
              <a>All Coffees</a>
            </Link>
          </li>
          <li className="px-4 py-4">Blends</li>
          <li className="px-4 py-4">Single Origins</li>
        </ul>
      </nav>
      <main className="border-green-600 border-t-8 pt-8">{children}</main>
    </>
  );
}
