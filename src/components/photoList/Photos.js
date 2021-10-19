import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  ReferenceField,
} from "react-admin";

export const Photos = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="albumId" reference="albums">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="title" />
      <ImageField source="url" />
      <TextField source="thumbnailUrl" />
    </Datagrid>
  </List>
);
