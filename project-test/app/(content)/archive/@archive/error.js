"use client";
import "@/styles/globals.css";

export default function FilterErrorPage({ error }) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
}
