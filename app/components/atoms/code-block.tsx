import { CopyIcon } from "lucide-react";
import { Button } from "./button";

export function CodeBlock(props: { code: string; copyable?: boolean }) {
	return (
		<pre className="relative w-full max-w-[calc(100vw-92px)] box-border bg-muted rounded-md p-4 m-4 overflow-auto text-sm shadow-realistic-hole">
			<code>{props.code}</code>
			{props.copyable && (
				<Button
					className="absolute top-2 right-2"
					onClick={() => navigator.clipboard.writeText(props.code)}
					variant="ghost"
					size="icon"
					aria-label="Copy code"
				>
					<CopyIcon className="size-4" />
				</Button>
			)}
		</pre>
	);
}
