import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <h1 className="text-xl">404 - Page Not Found</h1>
      <Link href={"/"}>
        <div className="py-4 px-6 border rounded-sm">Go back Home</div>
      </Link>
    </div>
  );
}
