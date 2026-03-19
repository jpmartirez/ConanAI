import React from "react";

const CallAction = () => {
	return (
		<div className="flex flex-col items-center justify-around border border-gray-200 rounded-2xl m-2 py-20 max-w-5xl w-full mx-auto mt-12">
			<h2 className="md:text-4xl/14 text-2xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text">
				Transform AI-generated text into natural, human writing
			</h2>
			<p className="mt-4 text-slate-500 max-w-xl text-center">
				Turn robotic text into clear, engaging, and easy-to-read content in
				seconds
			</p>
			<div className="flex items-center gap-4 mt-6 text-sm">
				<button
					type="button"
					className="bg-primary hover:bg-primary/90 transition-all cursor-pointer px-8 py-3 text-white font-medium rounded-full active:scale-95"
				>
					Humanize Text
				</button>
				<button
					type="button"
					className="group flex items-center gap-2 px-8 py-3 cursor-pointer font-medium border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100 transition active:scale-95"
				>
					See How It Works
					<svg
						className="mt-1 group-hover:translate-x-1 transition-all"
						width="15"
						height="11"
						viewBox="0 0 15 11"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CallAction;
