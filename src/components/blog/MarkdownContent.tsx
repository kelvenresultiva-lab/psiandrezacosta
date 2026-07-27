import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral max-w-none font-heebo prose-headings:font-playfair prose-headings:text-ink prose-p:text-ink prose-a:text-gold-bright prose-strong:text-ink prose-blockquote:border-gold-bright prose-blockquote:text-muted">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
