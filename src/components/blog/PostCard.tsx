import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="hover-float group flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mosseta text-3xl text-gold">
            Andreza Costa
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="font-lato text-xs font-semibold uppercase tracking-[1px] text-gold">
          {formatDate(post.createdAt)}
        </span>
        <h2 className="font-playfair text-xl font-semibold text-ink group-hover:text-gold-bright">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="font-heebo text-sm leading-relaxed text-muted">{post.excerpt}</p>
        )}
        {post.pdfs.length > 0 && (
          <span className="mt-auto flex items-center gap-2 font-lato text-xs font-semibold uppercase tracking-wide text-gold-bright">
            <FileText size={14} />
            {post.pdfs.length === 1 ? "1 material para baixar" : `${post.pdfs.length} materiais para baixar`}
          </span>
        )}
      </div>
    </Link>
  );
}
