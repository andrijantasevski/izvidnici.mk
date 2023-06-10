import { cva, VariantProps } from "class-variance-authority";
import { IconExclamationCircle } from "@tabler/icons-react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  [
    "bg-transparent",
    "transition-colors",
    "rounded-sm",
    "p-3",
    "w-full",
    "focus:outline-none",
    "focus:ring-1",
    "border",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-base-100",
          "border-base-100",
          "focus:ring-primary-focus",
          "focus:border-primary-focus",
          "placeholder:text-base-300",
        ],
        error: [
          "text-error",
          "border-error",
          "focus:ring-error-focus",
          "focus:border-error-focus",
          "placeholder:text-error-focus",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  id: string;
  errorMessage: string;
  placeholder: string;
  /**
   * Icon to show before the placeholder/input text.
   */
  leadingIcon?: React.ReactNode;
  /**
   * Offset for the placeholder so that the text/placeholder starts after the icon.
   *
   * The placeholder offset must be a Tailwind pl-[value]
   */
  placeholderOffset?:
    | "pl-4"
    | "pl-5"
    | "pl-6"
    | "pl-7"
    | "pl-8"
    | "pl-9"
    | "pl-10"
    | "pl-11"
    | "pl-12"
    | "pl-14"
    | "pl-16"
    | "pl-20"
    | "pl-24"
    | "pl-28"
    | "pl-32"
    | "pl-36"
    | "pl-40";
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      children,
      variant,
      errorMessage,
      placeholder,
      leadingIcon,
      placeholderOffset,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="relative">
          {leadingIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">
              {leadingIcon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            className={twMerge(
              `${inputVariants({ variant })} ${
                placeholderOffset ? placeholderOffset : ""
              }`,
              className
            )}
            placeholder={placeholder}
            {...props}
          />

          {variant === "error" && (
            <IconExclamationCircle className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600" />
          )}
        </div>

        {variant === "error" && (
          <div className="font-medium text-red-500">{errorMessage}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
