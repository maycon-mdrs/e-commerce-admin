import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export function BreadCrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{_}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...extraBreadcrumbItems,
  ];

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
}
