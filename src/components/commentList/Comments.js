import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const Comments = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="postId" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CommentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="postId" reference="posts">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const CommentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="postId" reference="posts">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);
