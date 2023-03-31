import "./search.css"

export const Search = ({ search, setSearch }) => {
    return (
        <div class="search">
        <input
            type="text"
            placeholder="Filtre pelo Nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </div>
    );
}