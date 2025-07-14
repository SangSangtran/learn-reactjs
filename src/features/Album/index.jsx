import React from "react";
import AlbumList from "./components/AlbumList";

const AlbumFeature = () => {
  const albumList = [
    {
      id: 1,
      name: "Daily Mix 01",
      thumbnailUrl:
        "https://i.scdn.co/image/ab67706f00000002bac5f7651b912043fa257d1f",
    },
    {
      id: 2,
      name: "Daily Mix 02",
      thumbnailUrl:
        "https://i.scdn.co/image/ab67706f00000002ac169b5afbb8ecbce5d9955d",
    },
    {
      id: 3,
      name: "Daily Mix 03",
      thumbnailUrl:
        "	https://i.scdn.co/image/ab67706f00000002feb74a537e996ef6e825aeb7",
    },
  ];

  return (
    <div>
      <h2>Mới phát gần đây</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
};

AlbumFeature.propTypes = {};

export default AlbumFeature;
