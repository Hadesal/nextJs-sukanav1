export default exchangeCurrency = async (toCurrency, fromCurrency, amount) => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "jhnvWJ6PBJWkctiGJCfQaak5TVeioJKZ");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  const response = await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
    requestOptions
  );

  return response.json().then((res) => res.result);
};
