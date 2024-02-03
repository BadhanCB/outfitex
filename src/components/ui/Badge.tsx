type Props = {
    children: React.ReactNode;
    className?: string;
};

const Badge = ({ children, className }: Props) => {
    return (
        <div
            className={`h-5 w-5 text-xs rounded-full flex justify-center items-center font-bold ${className}`}
        >
            {children}
        </div>
    );
};

export default Badge;
