export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
