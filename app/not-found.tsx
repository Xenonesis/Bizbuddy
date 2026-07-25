import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
			<h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
				404
			</h1>
			<p className="mt-4 text-lg text-[#60646c] dark:text-zinc-400 max-w-md">
				Page not found. The page you're looking for doesn't exist or has been
				moved.
			</p>
			<div className="mt-8 flex flex-col sm:flex-row gap-3">
				<Link
					href="/"
					className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-medium px-6 py-3 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
				>
					Back to Home
				</Link>
				<Link
					href="/contact"
					className="inline-flex items-center gap-2 border border-[#dcdee0] dark:border-zinc-700 font-medium px-6 py-3 rounded-lg hover:bg-[#f0f0f3] dark:hover:bg-zinc-800 transition-colors text-[#171717] dark:text-[#f4f4f5]"
				>
					Contact Support
				</Link>
			</div>
		</div>
	);
}
