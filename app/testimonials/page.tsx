"use client";

import React, { useState } from "react";
import { Star, MessageSquare, CheckCircle2, User } from "lucide-react";
import { TESTIMONIALS } from "../../lib/data";

export default function TestimonialsPage() {
	const [reviewSubmitted, setReviewSubmitted] = useState(false);
	const [newReview, setNewReview] = useState(() => ({
		name: "",
		company: "",
		content: "",
		rating: 5,
	}));

	const handleReviewSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!newReview.name || !newReview.content) return;
		setReviewSubmitted(true);
	};

	return (
		<div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
			{/* Sub-hero */}
			<section className="hero-sky-wash pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-[#dcdee0] dark:border-[#27272a]">
				<div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-4">
					<div className="badge-pill">CLIENT FEEDBACK & RATINGS</div>
					<h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
						Trusted by Entrepreneurs & Business Leaders
					</h1>
					<p className="text-base text-[#60646c] dark:text-zinc-400">
						Read genuine feedback from our monthly social media, tax, and web
						dev clients across India.
					</p>
				</div>
			</section>

			{/* Testimonials Grid */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{TESTIMONIALS.map((item) => (
						<div
							key={item.id}
							className="card-surface p-6 rounded-xl bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] flex flex-col justify-between space-y-4"
						>
							<div className="space-y-3">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-1 text-amber-500">
										{[...Array(item.rating)].map((_, i) => (
											<Star key={i} className="w-4 h-4 fill-amber-500" />
										))}
									</div>
									<span className="text-[10px] font-mono text-[#60646c] dark:text-zinc-400">
										VERIFIED CLIENT
									</span>
								</div>
								<p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed italic">
									&quot;{item.content}&quot;
								</p>
								<div className="text-[11px] font-mono text-[#0d74ce] dark:text-[#38bdf8]">
									{item.serviceUsed}
								</div>
							</div>

							<div className="pt-4 border-t border-[#f0f0f3] dark:border-[#27272a] flex items-center gap-3">
								<img
									src={item.avatar}
									alt={`${item.name} — ${item.company} client testimonial`}
									className="w-10 h-10 rounded-full object-cover"
								/>
								<div>
									<div className="text-xs font-semibold text-[#171717] dark:text-[#f4f4f5]">
										{item.name}
									</div>
									<div className="text-[10px] text-[#60646c] dark:text-zinc-400">
										{item.company}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Leave a Review Form */}
			<section className="max-w-2xl mx-auto px-4 sm:px-6">
				<div className="card-surface p-6 sm:p-8 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl space-y-6">
					<div className="border-b border-[#f0f0f3] dark:border-[#27272a] pb-4">
						<h3 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
							Are you a BizBuddy client? Submit your review
						</h3>
						<p className="text-xs text-[#60646c] dark:text-zinc-400 mt-1">
							Your feedback helps us continuously elevate our service standards.
						</p>
					</div>

					{reviewSubmitted ? (
						<div className="text-center py-6 space-y-3">
							<CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
							<h4 className="font-semibold text-lg dark:text-[#f4f4f5]">
								Thank you for your feedback!
							</h4>
							<p className="text-xs text-[#60646c] dark:text-zinc-400">
								Your review has been submitted for moderation.
							</p>
						</div>
					) : (
						<form onSubmit={handleReviewSubmit} className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
										Your Name *
									</label>
									<input
										type="text"
										required
										placeholder="Enter your name"
										value={newReview.name}
										onChange={(e) =>
											setNewReview({ ...newReview, name: e.target.value })
										}
										className="text-input w-full"
									/>
								</div>

								<div>
									<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
										Business Name
									</label>
									<input
										type="text"
										placeholder="e.g. Apex Traders"
										value={newReview.company}
										onChange={(e) =>
											setNewReview({ ...newReview, company: e.target.value })
										}
										className="text-input w-full"
									/>
								</div>
							</div>

							<div>
								<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
									Your Review *
								</label>
								<textarea
									rows={3}
									required
									placeholder="Share your experience working with BizBuddy..."
									value={newReview.content}
									onChange={(e) =>
										setNewReview({ ...newReview, content: e.target.value })
									}
									className="w-full rounded-md border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] text-black dark:text-[#f4f4f5] p-2.5 text-sm outline-none focus:border-black dark:focus:border-white"
								/>
							</div>

							<button
								type="submit"
								className="btn-primary w-full justify-center"
							>
								Submit Client Review
							</button>
						</form>
					)}
				</div>
			</section>
		</div>
	);
}
