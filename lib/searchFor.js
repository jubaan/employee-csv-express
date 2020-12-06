export default function searchFor(query, list) {
    if (query === "all") return list;

    let output = {};

    list.forEach((employee) => {
            if (employee["id"] === query) {
                // if (query.length === 1) return output = employee;
                output = employee;

                // query.forEach((attribute) => {
                //     output[prop] = employee[prop];

                    // for (let prop in employee) {
                    //     if (prop === attribute) {
                    //        output[prop] = employee[prop];
                    //     }
                    // }
                // })
            // }
        }
    })

    return output;
};
