"use client";
import Image from "next/image";
import Link from "next/link";

function Blog({ image, title, link }) {
  return (
    <div className="w-full rounded-md">
      <div className="w-full h-72 rounded-md relative mb-4">
        <Image
          src={image}
          fill
          alt="img-1"
          className="object-cover rounded-md"
        />
      </div>
      <Link href={link} className="font-semibold underline line-clamp-4">
        {title}
      </Link>
    </div>
  );
}

export default Blog;
