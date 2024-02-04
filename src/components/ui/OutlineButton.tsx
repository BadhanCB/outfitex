type Props = {
    children: React.ReactNode;
    className?: string;
};

const OutlineButton = ({ children, className }: Props) => {
    return (
        <button className={`px-9 py-4 border border-slate-700 ${className}`}>
            {children}
        </button>
    );
};

export default OutlineButton;
