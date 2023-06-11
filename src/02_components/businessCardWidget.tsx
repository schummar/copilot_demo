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
        backgroundColor: "gray",
        width: "400px",
        border: "1px solid black",
        borderRadius: "5px",
        // hexagon shape
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
