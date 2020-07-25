export default function DefaultLayout({ children }) {
  return (
    <>
      <nav className="container mx-auto">
        <ul className="flex justify-center items-center text-gray-900">
          <li className="px-4 py-4">All Coffees</li>
          <li className="px-4 py-4">Blends</li>
          <li className="px-4 py-4">Single Origins</li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
