import fetch from 'node-fetch';

const anwb = async () => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    date.setDate(date.getDate() - 1);
    const yesterdayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const response = await fetch(`https://api.energyzero.nl/v1/energyprices?fromDate=${yesterdayDate}T23%3A00%3A00.000Z&tillDate=${currentDate}T22%3A59%3A59.999Z&interval=4&usageType=1&inclBtw=true`);
    const data = await response.json();

    for (var i = 0; i < data.Prices.length; i++) {
        const price = data.Prices[i];
        const priceDate = new Date(price.readingDate);

        const pricePerKwh = price.price;
        const priceEpoch = priceDate.getTime();
    }
}

export default anwb;