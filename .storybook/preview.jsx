import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
addDecorator(withInfo);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
