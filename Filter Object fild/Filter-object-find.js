const order = {
    customer: {
        firstName: 'Arpine', lastName: 'Hovhannisyan',

    }, address: {
        line1: 'line1', addressSecond: {
            line2: 'line2', addressThird: {
                line3: 'line3'
            }
        }
    }, cobuyer: {
        applicant: {
            coApplicant: {
                name: 'Narek'
            }
        }
    }, tenantId: '123',
};

const updatedOrder = {
    tenantId: '1234', vehicle: {
        vin: '111', details: {
            style: 'reStyle'
        }
    }, address: {
        addressSecond: {
            line2: 'reLine2'
        }
    },
}
let changedFields = [];

function filterFind(order, updatedOrder, forCheckKey = '') {
    for (let key in order) {
        if (!updatedOrder.hasOwnProperty(key)) {
            changedFields.push(forCheckKey ? `${forCheckKey}.${key}` : key);
            // stugumem updateOrder - um ka key te che ete che uremn hanaca
        } else if (typeof order[key] === 'object' && order[key] !== null) {
            filterFind(order[key], updatedOrder[key], forCheckKey ? `${forCheckKey}.${key}` : key);
            // ete key - y object - a uremn rekursia
        } else if (order[key] !== updatedOrder[key]) {
            changedFields.push(forCheckKey ? `${forCheckKey}.${key}` : key);
            // ete ka et key bayc value tarbera
        }
    }
    for (let key in updatedOrder) {
        if (!order.hasOwnProperty(key)) {
            changedFields.push(forCheckKey ? `${forCheckKey}.${key}` : key);
            // stugumem order - um ka key te che ete chaka uremn avelacraca
        }
    }

    return changedFields;
    // veradarcnumem poxvac arjeqnery
}

filterFind(order, updatedOrder);
console.log(changedFields);
