// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserIcon from "@material-ui/icons/Group";
import PostIcon from "@material-ui/icons/Book";
import AlbumIcon from "@material-ui/icons/PhotoAlbum";
import PhotoIcon from "@material-ui/icons/Photo";
import CommentIcon from "@material-ui/icons/Comment";

import { Users } from "./components/userList/Users";
import { Posts, PostEdit, PostCreate } from "./components/postList/Posts";
import { Albums } from "./components/albumList/Albums";
import { Photos } from "./components/photoList/Photos";
import { Comments, CommentEdit, CommentCreate } from "./components/commentList/Comments";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={Users} icon={UserIcon} />
    <Resource
      name="posts"
      list={Posts}
      edit={PostEdit}
      icon={PostIcon}
      create={PostCreate}
    />
    <Resource name="albums" list={Albums} icon={AlbumIcon} />
    <Resource name="photos" list={Photos} icon={PhotoIcon} />
    <Resource
      name="comments"
      list={Comments}
      icon={CommentIcon}
      edit={CommentEdit}
      create={CommentCreate}
    />
  </Admin>
);

export default App;
