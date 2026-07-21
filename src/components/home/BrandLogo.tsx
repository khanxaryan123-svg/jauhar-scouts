import Image from "next/image";

type BrandLogoProps = {
  size?: "large" | "small";
};

export function BrandLogo({ size = "large" }: BrandLogoProps) {
  const wrapperClass =
    size === "large"
      ? "w-80 h-96 rounded-t-full rounded-b-3xl"
      : "w-64 h-80 rounded-t-full rounded-b-3xl";

  const flagClass =
    size === "large"
      ? "absolute -top-20 left-1/2 z-20 -translate-x-1/2 scale-200"
      : "absolute -top-16 left-1/2 z-20 -translate-x-1/2 scale-175";

  return (
    <div className="relative">
      <div className={flagClass}>
        <div className="flex h-10 w-16 items-center bg-green-700 shadow-lg border-2 border-white">
          <div className="h-full w-5 bg-white" />
          <div className="flex flex-1 items-center justify-center text-lg text-white">
            🇵🇰
          </div>
        </div>
      </div>

      <div
        className={`${wrapperClass} relative overflow-hidden bg-white shadow-2xl ring-2 ring-amber-700`}
      >
        <Image
          src="/JS logo With Simple name.png"
          alt="Jauhar Scouts logo"
          fill
          priority={size === "large"}
          sizes={size === "large" ? "128px" : "80px"}
          className="object-cover"
        />
      </div>
    </div>
  );
}
