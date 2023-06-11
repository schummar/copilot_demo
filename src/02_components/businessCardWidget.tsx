import { BusinessCard } from "../01_models/businessCard";
import React from "react";

export interface BusinessCardWidgetProps {
  businessCard: BusinessCard;
  size: "small" | "medium" | "large";
}

export function BusinessCardWidget(props: BusinessCardWidgetProps) {
  return (
    <div
      className={`business-card ${props.size}`}
      css={{
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        // house shaped clip path
        clipPath: "polygon(50% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)",
      }}
    >
      <div className="name">{props.businessCard.name}</div>
      <div className="phone">{props.businessCard.phone}</div>
      <div className="email">{props.businessCard.email}</div>
      <div className="title">
        {props.businessCard.joinedOn &&
          new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
          }).format(props.businessCard.joinedOn)}
      </div>
    </div>
  );
}
