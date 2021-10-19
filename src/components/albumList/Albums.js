import * as React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const Albums = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
    </Datagrid>
  </List>
);
