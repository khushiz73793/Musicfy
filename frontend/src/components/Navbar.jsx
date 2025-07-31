export default function Navbar() {
return (
    <header className="w-full px-4 py-2 bg-[#8035ace0] flex items-center justify-between text-white">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
            {/* Logo */}
            <img src="/logo.png" alt="Logo" className="h-12" />
        </div>
    </header>
)
}