import React, { useState } from "react";
import FeedRoute from "./FeedScreen";
import AlbumRoute from "./AlbumScreen";
import RecentRoute from "./RecentScreen";
import { BottomNavigation } from "react-native-paper";

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "feeds", title: "Feeds", icon: "message", color: "#3F51B5" },
    { key: "albums", title: "Albums", icon: "album", color: "#009688" },
    { key: "recents", title: "Recents", icon: "history", color: "#795548" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feeds: FeedRoute,
    albums: AlbumRoute,
    recents: RecentRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Screen;
