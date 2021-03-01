import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "./../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="Tanveer"
      />
    </Layout>
  );
}
