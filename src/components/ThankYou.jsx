export function ThankYou({ selectedRating }) {
  return (
    <div className="max-w-sm min-w-300 flex flex-col justify-center items-center text-white bg-gradient-to-b from-gray-800 to-gray-900 w-2/6 rounded-3xl p-10">
      <img
        src="../images/illustration-thank-you.svg"
        alt="Tablet"
        className="mb-5"
      />
      <p className="mb-4 text-xs text-orange-500 bg-zinc-800 rounded-3xl py-1 px-3">
        You selected {selectedRating} out of 5
      </p>
      <h1 className="mb-4 font-semibold text-xl">Thank you!</h1>
      <p className="text-zinc-400 mb-8 text-sm text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
