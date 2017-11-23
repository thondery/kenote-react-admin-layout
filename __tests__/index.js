
import React from 'react'
import renderer from 'react-test-renderer'
import { Layout, Sider, Breadcrumb, Header } from '../lib'
import { Link } from 'react-router-dom'

test('component => Layout', () => {
  const component = renderer.create(
    <Layout >
     React test
    </Layout>
  )
  expect(component).toMatchSnapshot()
})

test('component => Sider', () => {
  const component = renderer.create(
    <Sider location={{ pathname: '/' }} />
  )
  expect(component).toMatchSnapshot()
})

test('component => Breadcrumb', () => {
  const component = renderer.create(
    <Breadcrumb />
  )
  expect(component).toMatchSnapshot()
})