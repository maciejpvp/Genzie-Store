import React from "react";
import Markdown from "react-markdown";

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  const renderDescription = (description: string) => {
    const lines = description.split("\n").filter(Boolean);

    const detailsIndex = lines.findIndex((line) =>
      line.startsWith("Szczegóły:")
    );

    const content = lines.slice(0, detailsIndex).join("\n\n");
    const details = lines.slice(detailsIndex + 1);

    return (
      <div className="space-y-2 text-sm">
        <Markdown>{content}</Markdown>
        {details.length > 0 && (
          <div className="pt-6">
            <h2 className="font-semibold">Szczegóły:</h2>
            <ul className="list-disc pl-5 space-y-1">
              {details.map((detail, index) => (
                <li key={index}>{detail.replace("* ", "")}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return <div>{renderDescription(description)}</div>;
};

export default Description;
