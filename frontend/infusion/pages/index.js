import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
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
  );
}
