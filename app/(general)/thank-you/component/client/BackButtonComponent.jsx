'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackButtonComponent() {
    const router = useRouter();

    const handleBack = (event) => {
        event.preventDefault();
        router.back();
    };

    return (
        <Link href="#" onClick={handleBack} className="w-28 lg:w-32 p-2 2xl:px-6 rounded-md bg-accent text-white font-semibold tracking-wide">
            Back
        </Link>
    )
}