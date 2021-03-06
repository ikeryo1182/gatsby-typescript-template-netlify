import React from 'react';
import Link from 'gatsby-link';
import './AllCategories.scss';
import PageProps from '../models/PageProps';
import DefaultLayout from '../layouts';

class AllCategoriesTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { categories } = this.props.pathContext;

    if (categories) {
      return (
        <>
          <DefaultLayout />
          <div className="all-categories-content">
            <p> Category List </p>
            <ul>
              {categories.map((category: any, index: number) => {
                return (
                  <li key={index}>
                    <Link to={`/categories/${category}`}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      );
    }
  }
}

export default AllCategoriesTemplate;
