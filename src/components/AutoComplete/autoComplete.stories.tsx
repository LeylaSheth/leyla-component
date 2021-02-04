import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { AutoComplete, AutoCompleteProps, DataSourceType } from './autoComplete';
import { action } from '@storybook/addon-actions';

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}
export default{
  title:"AutoComplete",
  component:AutoComplete
} as Meta

const SimpleComplete=()=>{
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
 const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <h2>Name: {itemWithGithub.value}</h2>
        <p>url: {itemWithGithub.url}</p>
      </>
    )
  }

  return (
    <AutoComplete fetchSuggestions={handleFetch} onSelect={action('selected')} renderOptions={renderOption} />
  )
}

const Template:Story<AutoCompleteProps>=()=>SimpleComplete()

export const Default = Template.bind({})