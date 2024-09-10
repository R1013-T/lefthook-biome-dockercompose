import Image from 'next/image';

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <header>
        <h1>docker compose example repo</h1>
      </header>
      <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
        <ul className='list-inside list-disc'>
          <li>docker compose</li>
          <li>lefthook</li>
          <li>commitizen</li>
          <li>commitlint</li>
          <li>Next.js</li>
          <li>biome</li>
        </ul>
      </main>
      <footer className='row-start-3 flex flex-wrap items-center justify-center gap-6'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://github.com/R1013-T/next-biome-lefthook'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image aria-hidden src='/file-text.svg' alt='File icon' width={16} height={16} />
          Repo
        </a>
      </footer>
    </div>
  );
}
