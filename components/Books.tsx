import Link from 'next/link';

export default function MyComponent() {
  return (
    <div>
      {/* Next.js 的 Link 组件用于应用内部导航 */}
      <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
        <a>访问新AI书籍摘要网站</a>
      </Link>
    </div>
  );
}
