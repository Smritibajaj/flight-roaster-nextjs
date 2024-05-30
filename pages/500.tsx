import Link from "next/link";

export default function Custom500() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <h1>500 - Server-side error occurred. Please try after sometime</h1>
      <Link href={"/"}>
        <div className="py-4 px-6 border rounded-sm">Retry</div>
      </Link>
    </div>
  );
}
