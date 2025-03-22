import { ArrowRightIcon } from "lucide-react";
import { CodeBlock } from "~/components/atoms/code-block";
import { Separator } from "~/components/atoms/separator";
import { cn } from "~/utils/css";

export function UtilityDescriber(props: {
	name: string;
	utility: string;
	description: string;
	code: string;
	examples: React.ReactNode;
}) {
	return (
		<div className="space-y-4">
			<Separator />
			<h2 className="text-2xl font-bold">{props.name}</h2>
			<p className="text-muted-foreground">{props.description}</p>
			<div className="flex items-center gap-2 w-full justify-center">
				<div className={cn("bg-background rounded-md w-64 h-32")} />
				<ArrowRightIcon className="size-4" />
				<div className={cn("bg-background rounded-md w-64 h-32", props.utility)} />
			</div>
			<div className="relative">
				<CodeBlock code={props.code} copyable />
			</div>
			<h3 className="text-lg font-bold">Examples</h3>
			{props.examples}
		</div>
	);
}
