type Props = {
    label: string;
    onClick?: () => void;
    size: 1 | 2 | 3;
    variant?: "filled" | "outline";
};

export const Button = ({ label, onClick, size, variant = "filled" }: Props) => {
    return (
        <div
            onClick={onClick}
            className={`flex justify-center items-center cursor-pointer font-bold rounded-3xl
                ${
                    size === 1
                        ? "h-14 text-lg"
                        : size === 2
                        ? "h-10 text-md"
                        : "h-7 text-xs"
                }
                ${
                    variant === "filled"
                        ? "bg-white text-black"
                        : "bg-transparent border border-white text-white"
                }
            `}
        >
            {label}
        </div>
    );
};
