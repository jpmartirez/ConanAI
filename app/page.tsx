"use client";
import CallAction from "@/components/CallAction";
import React, { useState } from "react";

const Homepage = () => {
	const [text, setText] = useState<string>("");
	const [humanizedText, setHumanizedText] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<div className="flex items-center justify-center w-full flex-col">
			<div className="flex flex-col items-center justify-between mt-12">
				<h1 className="text-neutral-800 text-4xl md:text-6xl/16 max-w-3xl text-center leading-tight font-semibold">
					Make your <span className="text-success">AI text</span> sound{" "}
					<span className="text-primary">natural</span> and{" "}
					<span className="text-accent">human</span>
				</h1>
				<div className="mt-10 w-full flex flex-col items-center justify-center">
					<div className="bg-white border shadow-2xl border-blue-400 rounded-2xl p-4 sm:p-6 w-full max-w-147.5">
						<textarea
							onChange={(e) => setText(e.target.value)}
							value={text}
							className="w-full bg-transparent text-gray-700 text-sm mb-12 outline-none resize-none border-none"
							placeholder="Paste your AI-generated text here. We will rewrite it to sound natural and human..."
							rows={5}
						/>

						<div className="flex flex-wrap items-center justify-between gap-2.5">
							<select
								defaultValue="Pick a Tone"
								className="select select-info w-32"
							>
								<option disabled={true}>Pick a Tone</option>
								<option>Casual</option>
								<option>Semi-Formal</option>
								<option>Academic</option>
							</select>

							<button className="btn btn-primary ">Humanize</button>
						</div>
					</div>
				</div>
			</div>

			{/* CALL TO ACTION */}
			<div className="w-full ">
				<CallAction />
			</div>
		</div>
	);
};

export default Homepage;
