import React from 'react';

interface RepositoryStatisticProps {
  title: string;
  count: number;
}

function RepositoryStatistic({ title, count }: RepositoryStatisticProps) {
  return (
    <div className="text-center">
      <h3 className="font-normal text-xs leading-4 text-darkSky capitalize">
        {title}
      </h3>
      <h3 className="font-bold text-lg leading-6 mt-2">{count}</h3>
    </div>
  );
}

export default RepositoryStatistic;
