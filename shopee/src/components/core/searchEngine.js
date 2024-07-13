export const displayItem = (items, elementId) => {
    document.getElementById(elementId).innerHTML = items.map((item) => {
        var { image = 'https://via.placeholder.com/150', title = '', price = 0, sold = 0, ID = 1 } = item;
        return (
            `<a href="/product/${ID}" class='col l-2-4 m-3 c-6 box-item'>
                    <img class='item-image' src="${image}" alt="${title}"></img>
                    <div class='item-body'>
                        <h2>${title}</h2>
                        <h2>${price} VND</h2>
                        <h3>Đã bán ${sold}</h3>
                    </div>
                </a>`
        )
    }).join('');
};

export const handleSearch = (query, data, page, itemsPerPage, setProducts, setCurrentPage, displayItem, id) => {
    if (query.trim() === '') {
        setProducts(data);
        setCurrentPage(page);
        displayItem(data.slice((page - 1) * itemsPerPage, page * itemsPerPage), id);
        return;
    }

    const searchData = query.trim().toLowerCase();
    const searchWords = searchData.split(' ');

    const filteredData = data
        .map((item) => {
            const titleWords = item.title.toLowerCase().split(' ');
            const matchCount = searchWords.reduce((count, word) => {
                return count + (titleWords.includes(word) ? 1 : 0);
            }, 0);
            return { ...item, matchCount };
        })
        .filter(item => item.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount);

    setProducts(filteredData);
    setCurrentPage(page);
    displayItem(filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage), id);
};

