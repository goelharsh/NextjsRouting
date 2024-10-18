import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Page not found, please go back to the home page</h1>
            <Link href="/">Home</Link>
        </>
    )
}