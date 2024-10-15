"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <div className="add-to-cart">
      <button type="submit" disabled={pending}>
        {text}
      </button>
    </div>
  );
}
