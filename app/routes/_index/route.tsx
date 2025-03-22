import { CircleUserRoundIcon, MoonIcon, SunIcon } from "lucide-react";
import GitHub from "~/components/atoms/GitHub";
import { Button } from "~/components/atoms/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/atoms/card";
import { CodeBlock } from "~/components/atoms/code-block";
import { Switch } from "~/components/atoms/switch";
import { useTheme } from "~/context";
import { cn } from "~/utils/css";
import { Gallery } from "./gallery";
import styles from "./route.module.css";
import { UtilityDescriber } from "./utility-describer";

export async function loader() {
	console.log("hello from loader");
	return null;
}

export function meta() {
	return [
		{ title: "Tailwind Realistic Shadows" },
		{
			name: "description",
			content: "Make your components look realistic with a single utility class in Tailwind CSS",
		},
	];
}

export default function Home() {
	const { theme, setTheme } = useTheme();
	return (
		<div className={cn(styles.layout)}>
			<div className={cn(styles.sidebar)}>
				<h1
					className={cn(
						styles.title,
						"font-bold text-2xl p-6 h-42 w-48 grid place-items-center m-2 rounded-3xl shadow-realistic-edge-float backdrop-blur-sm z-10",
					)}
				>
					Tailwind
					<br />
					Realistic
					<br />
					Shadows
				</h1>
				<div
					className={cn(
						styles.theme,
						"flex items-center space-x-2",
						"m-2 h-12 rounded-full shadow-realistic-edge-float backdrop-blur-sm z-10",
					)}
				>
					<SunIcon size={16} />
					<Switch
						id="theme"
						checked={theme === "dark"}
						onCheckedChange={(checked) => {
							setTheme(checked ? "dark" : "light");
						}}
					/>
					<MoonIcon size={16} />
				</div>
				<div
					className={cn(
						styles.about,
						"flex items-center space-x-2",
						"m-2 p-2 h-fit rounded-full shadow-realistic-edge-float backdrop-blur-sm z-10",
					)}
				>
					<Button variant="ghost" size="icon" className="rounded-full p-0" asChild>
						<a
							href="https://github.com/GebAlgebra/tailwind-realistic-shadows"
							target="_blank"
							rel="noreferrer"
						>
							<GitHub color="black" className="size-6" />
						</a>
					</Button>
					<Button variant="ghost" size="icon" className="rounded-full p-0" asChild>
						<a href="https://geb1024.com" target="_blank" rel="noreferrer">
							<CircleUserRoundIcon size={16} className="size-6" />
						</a>
					</Button>
				</div>
			</div>
			<main className={cn(styles.main)}>
				<Gallery />
				This page provides a collection of realistic shadow utilities for Tailwind CSS.
				<div className="space-y-4">
					<h2 className="text-lg font-bold">How to use</h2>
					<p>
						In the remainder of this page I provide some{" "}
						<Button variant="link" asChild className="text-md font-normal inline p-0 text-blue-500">
							<a
								href="https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities"
								target="_blank"
								rel="noreferrer"
							>
								tailwind custom utility classes
							</a>
						</Button>{" "}
						that give your components realistic shadows.
					</p>
					<p>To use them, you should make some changes to your tailwind css file.</p>
					<ol className="list-decimal list-inside">
						<li>
							Add two color variables to your tailwind css file.
							<CodeBlock
								code={`  @import tailwindcss;
  ...
+ :root {
+ 	...
+ 	--realistic-light: #ffffff80; /* for light mode */
+ 	/* --realistic-light: #ffffff40; /* recommended for dark mode */ */
+ 	--realistic-shadow: #00000030; /* recommended for light mode */
+ 	/* --realistic-shadow: #ffffff80; /* recommended for dark mode */ */
+ }
`}
							/>
						</li>
						<li>
							Copy and paste the utility class into your tailwind css file
							<CodeBlock
								code={`  @import tailwindcss;
  ...
  :root {
  	...
  }
  
+ @utility shadow-realistic-button {
  	...
  }
  
+ @utility shadow-realistic-button {
+ 	box-shadow:
+ 		inset 0px -2px 2px var(--realistic-shadow),
+ 		inset 0px 2px 2px var(--realistic-light),
+ 		0px 2px 5px var(--realistic-shadow),
+ 		-0px -1px 1px var(--realistic-shadow);
+ }
`}
							/>
						</li>
						<li>Use the utility class to your components.</li>
						<CodeBlock code={`<Button className="shadow-realistic-button">Click me</button>`} />
						<li>
							Adjust the colors of the shadows to match the colors of your components. (optional)
						</li>
					</ol>
				</div>
				<div className="space-y-4">
					<h2 className="text-lg font-bold">Tips</h2>
					<ul className="list-disc list-inside">
						<li className="text-sm">
							Though the shadow colors I provided above suits most components, it looks even better
							if you adjust the colors of the shadows to match the colors of your components.
						</li>
						<li className="text-sm">
							The background color should not be too dark or too light so that both lighter and
							darker shadows are visible.
						</li>
					</ul>
				</div>
				<UtilityDescriber
					name="Button"
					utility="shadow-realistic-button"
					description="Looks like a protrusion coming out of a hole."
					code="@utility shadow-realistic-button {
	box-shadow:
		inset 0px -2px 2px var(--realistic-shadow),
		inset 0px 2px 2px var(--realistic-light),
		0px 2px 5px var(--realistic-shadow),
		-0px -1px 1px var(--realistic-shadow);
}"
					examples={<Button variant="secondary">Click me</Button>}
				/>
				<UtilityDescriber
					name="Button Pressed"
					utility="shadow-realistic-button-pressed"
					description="Looks like a recessed button"
					code="@utility shadow-realistic-button-pressed {
	box-shadow:
		-0px -1px 1px var(--realistic-shadow),
		0px 1px 1px var(--realistic-light);
}"
					examples={
						<Button variant="secondary" className="shadow-realistic-button-pressed">
							Click me
						</Button>
					}
				/>
				<UtilityDescriber
					name="Box"
					utility="shadow-realistic-box"
					description="Looks like a thin box with rounded edges placed on a flat surface"
					code="@utility shadow-realistic-box {
	box-shadow:
		inset 0px -2px 2px var(--realistic-shadow),
		inset 0px 2px 2px var(--realistic-light),
		0px 2px 5px var(--realistic-shadow);
}"
					examples={
						<div className="flex items-center gap-2">
							<Switch /> ← the thumb is styled with this utility
						</div>
					}
				/>
				<UtilityDescriber
					name="Hole"
					utility="shadow-realistic-hole"
					description="Looks like a hole with rounded edges"
					code="@utility shadow-realistic-hole {
	box-shadow:
		0px 1px 1px var(--realistic-light),
		-0px -1px 1px var(--realistic-shadow),
		inset 0px 1px 1px var(--realistic-shadow);
}"
					examples={
						<div className="flex items-center gap-2">
							<Switch /> ← the thumb is styled with this utility
						</div>
					}
				/>
				<UtilityDescriber
					name="Edge"
					utility="shadow-realistic-edge"
					description="Looks like a thin card with rounded edges placed on a flat surface"
					code="@utility shadow-realistic-edge {
	box-shadow:
		inset 0px 1px 1px var(--realistic-light),
		inset -0px -1px 1px var(--realistic-shadow),
		0px 1px 1px var(--realistic-shadow);
}"
					examples={
						<div className="flex items-center gap-2">
							<div className="shadow-realistic-edge w-64 h-32 rounded-lg bg-secondary">
								This is a component with an edge
							</div>
						</div>
					}
				/>
				<UtilityDescriber
					name="Edge Float"
					utility="shadow-realistic-edge-float"
					description="Looks like a floating thin card with rounded edges"
					code="@utility shadow-realistic-edge-float {
	box-shadow:
		inset 0px 1px 1px var(--realistic-light),
		inset -0px -1px 1px var(--realistic-shadow),
		0px 20px 20px -10px var(--realistic-shadow);
}"
					examples={
						<Card className="w-128 h-92">
							<CardHeader>
								<CardTitle>Edge Float</CardTitle>
							</CardHeader>
							<CardContent>
								<div>This is a component with an edge</div>
							</CardContent>
						</Card>
					}
				/>
				<UtilityDescriber
					name="Depression"
					utility="shadow-realistic-depression"
					description="Looks like a hole with smooth edges"
					code="@utility shadow-realistic-depression {
	box-shadow:
		inset 0px -2px 2px var(--realistic-light),
		inset -0px 2px 2px var(--realistic-shadow);
}"
					examples={<div className="shadow-realistic-depression w-64 h-2 rounded-full" />}
				/>
				<UtilityDescriber
					name="Mound"
					utility="shadow-realistic-mound"
					description="Looks like a mound with smooth edges"
					code="@utility shadow-realistic-mound {
	box-shadow:
		0px -4px 4px var(--realistic-shadow),
		0px 4px 4px var(--realistic-light);
}"
					examples={
						<div className="flex items-center gap-2">
							<div className="shadow-realistic-mound w-64 h-2 rounded-full" />
							<div className="shadow-realistic-depression w-64 h-32 rounded-xl bg-background p-2">
								<div className="shadow-realistic-mound w-full h-full rounded-md bg-background p-4">
									Apply depression to parent and apply mound to its child to create a gutter
								</div>
							</div>
						</div>
					}
				/>
			</main>
		</div>
	);
}
