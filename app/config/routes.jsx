import React from 'react'
import { Route, Switch } from 'react-router'
import FeedContainer from '../containers/FeedContainer';
import ArtistContainer from '../containers/ArtistContainer';
import SongContainer from '../containers/SongContainer';

const routes = (
  <Switch>
    <Route exact path="/" component={FeedContainer} />
    <Route path="/:username/:song" component={SongContainer} />
    <Route path="/:username" component={ArtistContainer} />
  </Switch>
)

export default routes
