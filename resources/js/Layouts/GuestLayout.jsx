
export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-[--primary-light] pt-6 sm:justify-center sm:pt-0 ">
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-lg sm:max-w-md sm:rounded-lg ">
                {children}
            </div>
        </div>
    );
}
