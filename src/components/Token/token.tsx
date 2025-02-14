interface TokenProps {
  name: string;
  created: string;
  marketCap: string;
  volume: string;
  onQuickBuy: () => void;
}

const TokenRow: React.FC<TokenProps> = ({
  name,
  created,
  marketCap,
  volume,
  onQuickBuy,
}) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{created}</td>
      <td className="px-4 py-2">{marketCap}</td>
      <td className="px-4 py-2">{volume}</td>
      <td className="px-4 py-2">
        <button
          className="rounded bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600"
          onClick={onQuickBuy}
        >
          Quick Buy
        </button>
      </td>
    </tr>
  );
};
