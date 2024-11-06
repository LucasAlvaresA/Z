type Props = {
    placeholder: string;
    rows: number;
    defaultValue?: string;
    value?: string;
};

export const TextArea = ({ placeholder, rows, defaultValue, value }: Props) => {
    return (
        <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
            <textarea
                className="flex-1 outline-none bg-transparent h-full p-5 resize-none"
                placeholder={placeholder}
                value={value}
                defaultValue={defaultValue}
                rows={rows}
            ></textarea>
        </div>
    );
};
