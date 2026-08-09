function makeChange(cents) {
    let q = Math.floor(cents / 25);
    cents %= 25;

    let d = Math.floor(cents / 10);
    cents %= 10;

    let n = Math.floor(cents / 5);
    cents %= 5;

    let p = cents;

    return {
        q: q,
        d: d,
        n: n,
        p: p
    };
}