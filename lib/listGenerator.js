export default function listGenerator(content) {
    const headers = content[0];
    const rows = content.slice(1, -1);

    return rows.map((row) => {
        return row.reduce((key, value, i) => {
            key[headers[i]] = value;
            return key;
        }, {})
    });
}

