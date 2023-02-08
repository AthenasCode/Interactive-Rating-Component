export function Form({ handleSubmit, handleRatingClicked }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm min-w-300 text-white bg-gradient-to-b from-gray-800 to-gray-900 w-2/6 rounded-3xl p-10"
    >
      <img
        className="bg-zinc-700 p-2 rounded-full mb-8"
        src="../images/icon-star.svg"
        alt="Star"
      />
      <h1 className="mb-3 font-bold text-xl">How did we do?</h1>
      <p className="text-zinc-400 mb-8 text-sm">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            key={rating}
            onClick={() => handleRatingClicked(rating)}
            className="hover:bg-orange-500 focus:bg-zinc-400 bg-zinc-700 w-10 p-2 rounded-full mb-8"
          >
            {rating}
          </button>
        ))}
      </div>
      <button className="bg-orange-500 hover:bg-white hover:text-orange-500 w-full rounded-3xl py-2 text-sm">
        SUBMIT
      </button>
    </form>
  );
}
