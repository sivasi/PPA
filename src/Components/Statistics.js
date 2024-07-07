import React, { useState, useEffect } from 'react';

const Statistics = () => {
  return (
    <div id="stats" className="dark:bg-gray-900 dark:text-gray-100 bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className=" dark:bg-gray-900 dark:text-gray-100 text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight dark:bg-gray-900 dark:text-gray-100 text-gray-900 sm:text-5xl">
          <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)]">
            <span className="sr-only">44</span>million
          </span>
        </dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 dark:bg-gray-900 dark:text-gray-100 text-gray-600">Assets under holding</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight dark:bg-gray-900 dark:text-gray-100 text-gray-900 sm:text-5xl">
          $<span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-assets)] before:content-[counter(num)]">
            <span className="sr-only">119</span> trillion
          </span>
        </dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 dark:bg-gray-900 dark:text-gray-100 text-gray-600">New users annually</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight dark:bg-gray-900 dark:text-gray-100 text-gray-900 sm:text-5xl">
          <span className="animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-users)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
            <span className="sr-only">4600</span>
          </span>
        </dd>
      </div>
    </dl>
  </div>
</div>

  );
};

export default Statistics;
