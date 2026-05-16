interface AnimatedPriceProps {
  price: string;
}

export const AnimatedPrice = ({ price }: AnimatedPriceProps) => {
  const value = parseFloat(price.replace(",", "."));
  const formatted = `€${value.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return <>{formatted}</>;
};
