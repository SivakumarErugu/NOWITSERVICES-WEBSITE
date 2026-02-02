import React from 'react';
import JobDetailView from '@/components/careers/OpportunitiesHub/JobDetailView';
import { jobOpenings } from '@/components/careers/utils';
import { notFound } from 'next/navigation';

const Page = async ({ params }) => {
  const { id } = await params;

  const job = jobOpenings.find(job => job.id === id);

  if (!job) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col px-20 py-4">
      <JobDetailView job={job} />
    </div>
  );
};

export default Page;
