import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-500 text-white hover:bg-brand-600",
        secondary: "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50",
        outline: "border border-ink-200 text-ink-700 hover:bg-ink-50",
        ghost: "text-ink-700 hover:bg-ink-50",
        inverse: "bg-white text-brand-700 hover:bg-brand-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
