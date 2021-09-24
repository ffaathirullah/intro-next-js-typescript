import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <ul>
        <Link href="/About">
          <li>About</li>
        </Link>
        <Link href="/Blog">
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
