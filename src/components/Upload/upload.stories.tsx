import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Upload, { UploadProps } from './upload';
import Icon from '../Icon/icon';

export default {
  title: 'Upload',
  component: Upload,
} as Meta;

const Template: Story<UploadProps> = (args) => (
  <Upload {...args}>
    <Icon icon="upload" size="5x" theme="secondary" />
  </Upload>
);

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too large');
    return false;
  }
  return true;
};

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', { type: file.type });
  return Promise.resolve(newFile);
};

export const UploadWithCheck = Template.bind({});
UploadWithCheck.args = {
  onChange: action('changed'),
  action: 'https://jsonplaceholder.typicode.com/posts/',
  drag: true,
};

export const UploadWithPromise = Template.bind({});
UploadWithPromise.args = {
  onChange: action('changed'),
  action: 'https://jsonplaceholder.typicode.com/posts/',
  beforeUpload: filePromise,
};
