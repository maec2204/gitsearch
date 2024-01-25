import React from 'react';
import SpinnerIcon from '../icons/SpinnerIcon';
import { classMerge } from '@/util/classMerge';

interface LoadingProps {
  className?: string;
}

function Loading({ className }: LoadingProps) {
  return (
    <div className={classMerge('h-full w-full flex justify-center', className)}>
      <SpinnerIcon className="m-auto w-24 h-24 text-gray-200 animate-spin fill-blue-300" />
    </div>
  );
}

export default Loading;
