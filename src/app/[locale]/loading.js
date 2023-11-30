
import NextImage from "@/components/NextImage";


const SkeletonPlaceholder = () => {
  return (
    <div role="status" className="max-w-[200px] animate-pulse">
      <NextImage
        src="/images/act-logo-transperent.svg"
        alt="Logo"
        width={200}
        height={200}
        className="object-contain"
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
};
export default SkeletonPlaceholder;
