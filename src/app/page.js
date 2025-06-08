import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-gray-200 dark:bg-gray-900 flex justify-between items-center py-4 px-8 shadow">
        <span className="text-2xl font-bold">Smorgus Board</span>
        <nav className="flex gap-6">
          <a href="/placeholder1" className="text-gray-700 dark:text-gray-200 hover:underline">Placeholder 1</a>
          <a href="/placeholder2" className="text-gray-700 dark:text-gray-200 hover:underline">Placeholder 2</a>
          <a href="/placeholder3" className="text-gray-700 dark:text-gray-200 hover:underline">Placeholder 3</a>
        </nav>
      </header>


      {/* Main Content */}
      <main className="flex flex-col gap-8 flex-1 items-center sm:items-start p-8 sm:p-20">
        <h1 className="text-4xl font-bold mb-4">Smorgus Board</h1>
        <ol className="list-inside list-decimal text-base text-center sm:text-left font-mono">
          <li className="mb-2">Get started by editing <code className="bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded font-mono font-semibold">src/app/page.js</code>.</li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </a>
          <a
            className="rounded-full border border-black/10 dark:border-white/20 transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center py-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
