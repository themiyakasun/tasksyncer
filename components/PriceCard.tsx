import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
  packageName: string;
  description: string;
  id: string;
  items: string[];
  paymentLink: string;
  priceId: string;
};

const PriceCard = ({
  packageName,
  description,
  id,
  items,
  paymentLink,
  priceId,
}: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(paymentLink);
  };

  return (
    <div className="shadow-xl py-5 px-7 rounded-[8px] text-center w-full h-full">
      <h3 className="text-xl font-semibold mb-2">{packageName}</h3>
      <p className="text-xs">{description}</p>

      <ul className="text-left my-5 list-disc">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>

      <Button variant="default" onClick={handleClick}>
        Subscribe
      </Button>
    </div>
  );
};
export default PriceCard;
