import React from "react";
import { memo } from "react";

const Pagination = ({ shortcuts, setData }) => {
  let initial = 0;
  let final = initial + 5;

  const previous = () => {
    if (initial <= 0) {
      initial = 0;
      final = initial + 5;
      return;
    }

    final = initial;
    initial -= 5;

    let a = shortcuts.slice(initial, final);
    setData(a);
  };

  const next = () => {
    if (final >= shortcuts.length) {
      final = shortcuts.length;
      setData(shortcuts.slice(initial, final));
      return;
    }

    initial = final;
    final += 5;
    let a = shortcuts.slice(initial, final);
    setData(a);
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-center mt-6">
        <span
          className="border-2 px-1 cursor-pointer rounded"
          onClick={previous}
        >
          Prev
        </span>
        <span>...</span>
        <span className="border-2 px-1 cursor-pointer rounded " onClick={next}>
          next
        </span>
      </div>
    </>
  );
};

export default memo(Pagination);
