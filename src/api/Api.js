import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

export const Api = () => {
  return (
    <div>
      <h2>UserPost</h2>
      <UserPost />
      <br />
      <h2>TokenPost</h2>
      <TokenPost />
      <h2>Photo Post</h2>
      <PhotoPost />
      <h2>Photo Get</h2>
      <PhotoGet />
    </div>
  );
};
