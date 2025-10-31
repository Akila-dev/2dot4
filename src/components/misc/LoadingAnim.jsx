/* eslint-disable react/prop-types */

const HeroAnim = ({ inner }) => (
  <div className="w-full p-[1em] min-h-[15em] card-bg-2 animate-pulse rounded-[0.5em] flex flex-col justify-center gap-[0.5em]">
    {inner ? (
      <div className="card-bg-3 h-[13em] rounded-[0.5em] flex flex-col justify-end p-[1em] gap-[0.5em]">
        <div className="h-[1.5em] w-1/5 animate-pulse card-bg-2 rounded-[0.5em]" />
        <div className="w-3/5 min-w-[10em] rounded-[0.5em] animate-pulse h-[2.5em] card-bg-2" />
        <div className="w-4/5 h-[1.5em] animate-pulse card-bg-2 rounded-[0.5em]" />
        <div className="flex gap-[1em] h-[1em] w-3/5 min-w-[15em]">
          <div className="w-1/5 h-full animate-pulse card-bg-2 rounded-[0.5em]" />
          <div className="w-1/5 h-full animate-pulse card-bg-2 rounded-[0.5em]" />
        </div>
      </div>
    ) : (
      <div className="flex flex-col justify-end gap-[0.75em]">
        <div className="card-bg-3 h-[13em] rounded-[0.5em] flex flex-col justify-end p-[1em] gap-[0.5em]" />
        <div className="flex gap-[1em] h-[1.5em] w-3/5 min-w-[15em]">
          <div className="w-1/5 h-full animate-pulse card-bg-3 rounded-[0.5em]" />
          <div className="w-1/5 h-full animate-pulse card-bg-3 rounded-[0.5em]" />
        </div>
        <div className="w-4/5 min-w-[10em] rounded-[0.5em] animate-pulse h-[2.5em] card-bg-3" />
      </div>
    )}
  </div>
);

const CardAnim = ({ num = 3, type = 1 }) => (
  <div
    className={` ${
      type === 1
        ? "flex flex-col gap-[0.5em]"
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1em]"
    }`}
  >
    {Array.from({ length: num }, (_, i) => (
      <div
        key={i}
        className={`w-full p-[1em] card-bg-2 animate-pulse rounded-[0.5em] flex flex-col ${
          type === 1 ? "justify-center gap-[0.5em]" : "gap-[1em]"
        }`}
      >
        {type === 2 && (
          <div className="card-bg-3 h-[10em] rounded-[0.5em] flex flex-col justify-end p-[1em] gap-[0.5em]" />
        )}

        <div className="w-2/5 min-w-[10em] rounded-[0.5em] animate-pulse h-[1.5em] card-bg-3" />
        <div
          className={`flex h-[1em] w-3/5 ${
            type === 1 ? "min-w-[15em] gap-[1em]" : "gap-[0.5em] -mt-[0.25em]"
          }`}
        >
          <div
            className={`h-full animate-pulse card-bg-3 rounded-[0.5em] ${
              type === 1 ? "w-1/5 " : "w-1/3 "
            }`}
          />
          <div
            className={`h-full animate-pulse card-bg-3 rounded-[0.5em] ${
              type === 1 ? "w-4/5 " : "w-1/3 "
            }`}
          />
        </div>
      </div>
    ))}
  </div>
);

const PostArchiveAnim = ({ num = 3 }) => (
  <div className="flex flex-col gap-[1.5em] mt-[5em] mb-[3em] container-x">
    <HeroAnim inner={true} />
    <CardAnim num={num} type={2} />
  </div>
);

const PostSingleAnim = ({ num = 3 }) => (
  <div className="flex flex-col gap-[1.5em]">
    <HeroAnim />
    <CardAnim num={num} />
  </div>
);

const LoadingAnim = ({ type = "card", num = 3 }) => {
  return (
    <div>
      {type === "card" ? (
        <CardAnim num={num} />
      ) : type === "card-2" ? (
        <CardAnim num={num} type={1} />
      ) : type === "postSingle" ? (
        <PostSingleAnim num={num} />
      ) : type === "postArchive" ? (
        <PostArchiveAnim num={num} />
      ) : (
        <div className="text-center !text-[--grey]">Loading...</div>
      )}
    </div>
  );
};

export default LoadingAnim;
