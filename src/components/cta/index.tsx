import { cardItems } from "../../constants/card-items";
import { ContentType } from "../../hooks/useModal";
import Card from "../card";

interface Props {
  openModal: (contentType: ContentType) => void;
}

export default function CallToAction({ openModal }: Props) {
  return (
    <div className="flex">
      <div className="flex gap-4 w-[60%]">
        {cardItems.map((item, i) => {
          const { buttonText, description, contentType, title, variant } = item;
          return (
            <Card
              key={i}
              buttonText={buttonText}
              description={description}
              onButtonClick={() => openModal(contentType)}
              title={title}
              variant={variant}
            />
          );
        })}
      </div>
    </div>
  );
}
