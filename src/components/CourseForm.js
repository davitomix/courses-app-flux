import React from 'react';
import TextInput from './common/TextInput';
import SelectInput from './SelectInput';
const CourseForm = props => {
  return (
    <form>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
      />

      <SelectInput
        id="author"
        label="Author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId || ''}
      ></SelectInput>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default CourseForm;
