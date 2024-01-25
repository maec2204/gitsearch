import React from 'react';
import { fetchUserRepos } from '@/app/actions';
import RepositoryCard from '@/components/repository/RepositoryCard';
import Error from '../error';

async function UserDetailPage({
  params: { user },
}: {
  params: { user: string };
}) {
  try {
    const userRepos = await fetchUserRepos(user);
    return <RepositoryCard data={userRepos} />;
  } catch (error) {
    return <Error error={error as Error} />;
  }
}

export default UserDetailPage;
