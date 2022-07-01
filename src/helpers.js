export const inCart = (product, cartItems) => {
    return cartItems.find(item => item.id === product.id);
}

const API = 'http://localhost:5050/api/v1/shop';

export async function fetchFromAPI(endpoint, opts) {
    const { method, body } = { method: "POST", body: null, ...opts };

    const res = await fetch(`${API}/${endpoint}`, {
        method,
        ...(body && {body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return res.json()
}