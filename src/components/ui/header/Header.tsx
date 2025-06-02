import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 mt-6 mb-10">
      <Link href="/">
        <Image src={Logo} alt="Logo Lux Trips" width={121} height={56} />
      </Link>
      <nav className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/luxury-packages">Luxury packages</Link>
        <Link href="/book-with-us">Book with us</Link>
        <Link href="/why-lux-trips">Why Lux Trips</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/client-area">Client Area</Link>
      </nav>
    </header>
  );
}
