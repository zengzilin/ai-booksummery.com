import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      {/* Next.js 的 Link 组件用于应用内部导航 */}
      <Link href="/about">
        <a>关于我们</a>
      </Link>

      {/* 使用 HTML 的 <a> 标签指向外部网址并在新标签页中打开 */}
      <a href="https://https://ai-books-summary.com/" target="_blank" rel="noopener noreferrer">
        访问AI书籍摘要网站
      </a>
    </div>
  );
}

export default MyComponent;
