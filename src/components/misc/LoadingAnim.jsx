/* eslint-disable react/prop-types */

const CardAnim = ({ num = 3 }) => (
  <div className="flex flex-col gap-[0.5em]">
    {Array.from({ length: num }, (_, i) => (
      <div
        key={i}
        className="w-full p-[1em] card-bg-2 animate-pulse rounded-[0.5em] flex flex-col justify-center gap-[0.5em]"
      >
        <div className="w-2/5 min-w-[10em] rounded-[0.5em] animate-pulse h-[1.5em] card-bg-3" />
        <div className="flex gap-[1em] h-[1em] w-3/5 min-w-[15em]">
          <div className="w-1/5 h-full animate-pulse card-bg-3 rounded-[0.5em]" />
          <div className="w-4/5 h-full animate-pulse card-bg-3 rounded-[0.5em]" />
        </div>
      </div>
    ))}
  </div>
);

const PostSingleAnim = ({ num = 3 }) => (
  <div className="flex flex-col gap-[0.5em]">
    {Array.from({ length: num }, (_, i) => (
      <div
        key={i}
        className="w-full p-[1em] card-bg-2 animate-pulse rounded-[0.5em] flex flex-col justify-center gap-[0.5em]"
      >
        <div className="w-2/5 min-w-[10em] rounded-[0.5em] animate-pulse h-[1.5em] card-bg-3" />
        <div className="flex gap-[1em] h-[1em] w-3/5 min-w-[15em]">
          <div className="w-1/5 h-full animate-pulse card-bg-3 rounded-[0.5em]" />
          <div className="w-4/5 h-full animate-pulse card-bg-3 rounded-[0.5em]" />
        </div>
      </div>
    ))}
  </div>
);

const LoadingAnim = ({ type = "card", num = 3 }) => {
  return (
    <div>
      {type === "card" ? (
        <CardAnim num={num} />
      ) : type === "card-2" ? (
        <CardAnim num={num} />
      ) : type === "postSingle" ? (
        <PostSingleAnim num={num} />
      ) : type === "postArchive" ? (
        <CardAnim num={num} />
      ) : (
        <div className="text-center !text-[--grey]">Loading...</div>
      )}
    </div>
  );
};

export default LoadingAnim;
