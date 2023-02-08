import { useState } from "react";
import { ThankYou } from "./ThankYou";
import { Form } from "./Form";

export function Rating() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <ThankYou selectedRating={selectedRating} />
  ) : (
    <Form
      handleSubmit={handleSubmit}
      handleRatingClicked={handleRatingClicked}
    />
  );
}
