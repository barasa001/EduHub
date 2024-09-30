import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center">
            {/* Logo on the left */}
            <Image
                height={40}
                width={60}
                alt="logo"
                src="/logo.svg"
            />

            {/* "EduHub" text on the right */}
            <div className="ml-4">
                <span className="text-2xl font-bold text-sky-500 font-cursive">EduHub</span>
            </div>
        </div>
    );
}