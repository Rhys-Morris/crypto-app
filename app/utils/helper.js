export function formatPrice(price, withCents = false) {
  const splitPrice = withCents
    ? String(price).split("").reverse().slice(3)
    : String(price).split("").reverse();
  const formattedPrice = [];
  let cents;

  if (withCents)
    cents = String(price).split("").reverse().slice(0, 3).reverse().join("");

  splitPrice.forEach((int, index) => {
    if (index === 0) {
      formattedPrice.push(int);
      return;
    }
    if (index % 3 === 0) {
      formattedPrice.push(",");
    }
    formattedPrice.push(int);
  });

  return withCents
    ? formattedPrice.reverse().join("").concat(cents)
    : formattedPrice.reverse().join("");
}

export function filterCards(cards, search) {
  const regexp = new RegExp(search, "i");
  return cards.filter((card) => card.name.match(regexp));
}
