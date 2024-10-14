import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex items-center">
            <Image
                height={40}
                width={60}
                alt="logo"
                src="/logo.svg"
            />

            <div className="ml-4">
                <span className="text-2xl font-bold text-sky-500 font-cursive">EduHub</span>
            </div>
        </div>
    );
}