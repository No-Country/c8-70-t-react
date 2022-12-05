import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Login">Login</Link>
          </li>
          <li>
            <Link href="/Register">Register</Link>
          </li>
          <li>
            <Link href="/Detail">Detail</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
