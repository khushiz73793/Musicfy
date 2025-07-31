import Songs from './Songs'

export default function MainContent() {
  return (
    <main className="flex flex-1 bg-[#5a1a67] text-white overflow-y-auto p-6">
      <Songs />
    </main>
  )
}