import Link from "next/link";
// Icons

import { ArrowLeftIcon, ArrowRightIcon, Squares2X2Icon } from "@heroicons/react/24/solid";


const InnerPrevNext = (props) => {
  const { prevHref, prevLabel, allHref, nextHref, nextLabel } = props;

  return (
    <div className="sticky bottom-2 inset-x-0 text-center my-4 z-10">
      <div className="inline-block text-white bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d]  rounded-[60px]  py-1 md:py-2 px-4">
        <div className="flex items-center gap-x-1">
          <div className="inline-block">
            {prevHref.endsWith('undefined') ?
              <span className="flex items-center gap-x-2 text-lg text-[#eee] opacity-50">
                <ArrowLeftIcon className="w-5 h-5"/>
                {prevLabel}
              </span>
              :
              <Link
                href={prevHref}
                className="flex items-center gap-x-2 text-lg hover:text-secondary"
              >
                <ArrowLeftIcon className="w-5 h-5"/>
                {prevLabel}
              </Link>
            }
          </div>

          <div className="block h-3 border-r border-gray-300 mx-2"></div>

          <div className="inline-block">
            <Link
              href={allHref}
              className="flex items-center gap-x-2 text-lg hover:text-secondary"
            >
           <Squares2X2Icon className="w-5 h-5"/>
            </Link>
          </div>

          <div className="block h-3 border-r border-gray-300 mx-2"></div>

          <div className="inline-block">
            {nextHref.endsWith('undefined') ?
              <span className="flex items-center gap-x-2 text-lg text-[#eee] opacity-50">
                {nextLabel}
                <ArrowRightIcon className="w-5 h-5"/>
              </span>
              :
              <Link
                href={nextHref}
                className="flex items-center gap-x-2 text-lg hover:text-secondary"
              >
                {nextLabel}
                <ArrowRightIcon className="w-5 h-5"/>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPrevNext;
