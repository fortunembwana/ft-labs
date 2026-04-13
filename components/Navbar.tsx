import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 border-b">

            <h1 className="text-xl font-bold">FT Labs</h1>

            <div className="flex items-center gap-6">
                <Link href="/" className="text-sm hover:text-gray-500">Home</Link>
                <Link href="/about" className="text-sm hover:text-gray-500">About</Link>
                <Link href="/contact">
                    <Button size="sm">Contact</Button>
                </Link>
            </div>
        </nav>
    );
}