import SearchInputView from './SearchInput.view';

interface Props {
    onSubmit: (event: React.FormEvent) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchTerm: string;
}

const SearchInputContainer: React.FC<Props> = ({
    onSubmit,
    onChange,
    searchTerm,
}) => {
    return (
        <>
            <SearchInputView
                onSubmit={onSubmit}
                onChange={onChange}
                searchTerm={searchTerm}
            />
        </>
    );
};

export default SearchInputContainer;
