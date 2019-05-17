import { render, configure } from 'enzyme'
import 'jest'
import * as React from 'react'
import BlogPagination from './BlogPagination'

// Configure enzyme with react 16 adapter
const Adapter: any = require('enzyme-adapter-react-16')
configure({ adapter: new Adapter() })

const LinkStub = ((props: any) => <div {...props} />) as any

describe('BlogPagination component', () => {
  it('should render nothing if only 1 page', () => {
    const pathname = '/blog/page/1/'
    const pageCount = 1

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly 5 pages', () => {
    const pathname = '/blog/page/2/'
    const pageCount = 5

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly 10 pages', () => {
    const pathname = '/blog/page/5/'
    const pageCount = 10

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly 20 pages', () => {
    const pathname = '/blog/page/5/'
    const pageCount = 20

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should have first link active if no match', () => {
    const pathname = '/plop'
    const pageCount = 10

    const wrapper = render(
      <BlogPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
