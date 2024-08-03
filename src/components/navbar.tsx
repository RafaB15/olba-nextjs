import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center px-2 md:px-14">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image src="/olba_logo.png" alt="Logo" width={200} height={40} />
                    </Link>
                </div>
                <div className="hidden md:flex md:space-x-4">
                    <Link href="/">
                        <div className="text-white">Home</div>
                    </Link>
                    <Link href="/">
                        <div className="text-white">About</div>
                    </Link>
                    <Link href="/">
                        <div className="text-white">Contact</div>
                    </Link>
                </div>
                <div className='md:hidden'>
                    dfkrgnñ
                </div>
            </div>
        </nav>
    );
};

export default Navbar;