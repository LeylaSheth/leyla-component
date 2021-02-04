import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import Button,{ButtonProps,ButtonSize,ButtonType} from './Button'

// mock function
const defaultProps = {
  onClick:jest.fn()
}
const testProps:ButtonProps={
  btnType:ButtonType.Primary,
  size:ButtonSize.Large,
  className:'my-class'
}
const disabledProps:ButtonProps={
  disabled:true,
  onClick:jest.fn()
}
describe('test Button Component',()=>{
  it('should render the correct default button',()=>{
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('btn btn-default')
     // 交互测试
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props',()=>{
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg my-class')
  })
  it('should render a link when btnType equals link and href is provided',()=>{
    const wrapper = render(<Button btnType={ButtonType.Link} href="https://w3cschool.com">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to be true',()=>{
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})