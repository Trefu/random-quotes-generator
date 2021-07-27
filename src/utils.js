export const arrRandomVal = (arr) => {
    let newVal = arr[Math.floor(Math.random() * arr.length)];
    return newVal
}
export const backgroundColors = [
    "#A30B37",
    "#BD6B73",
    "#BBB6DF",
    "#C6C8EE",
    "#2C4251",
    "#F79F79",
    "#F7D08A",
    "#87B6A7",
    "#5B5941",
]

export const fetchQuotes = async () => {
    const res = await fetch('https://api.quotable.io/quotes?limit=10');
    const data = await res.json()
    return data
}

