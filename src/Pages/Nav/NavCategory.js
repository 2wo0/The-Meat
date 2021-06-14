import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/NavCategory.scss';

class NavCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
      handleSub: false,
      index: '',
    };
  }

  componentDidMount() {
    fetch('/data/CategoryList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryData: data,
        });
      });
  }

  handleCategory = e => {
    const { id } = e.target;
    if (e.type === 'mouseenter') {
      this.setState({
        handleSub: true,
        index: id,
      });
    }
    if (e.type === 'mouseleave') {
      this.setState({
        handleSub: false,
      });
    }
  };

  render() {
    const { categoryData, handleSub, index } = this.state;
    const { handleCategory } = this;
    return (
      <div className="navCategory">
        <div className="categoryLeft">
          <ul className="categoryLeftUl">
            <i className="fas fa-bars"></i>
            <li
              className="parentCategory"
              onMouseEnter={handleCategory}
              onMouseLeave={handleCategory}
            >
              카테고리
              {handleSub && (
                <div className="categoryBox">
                  {categoryData.map((category, idx) => {
                    return (
                      <div
                        key={category.id}
                        id={idx}
                        className="category"
                        onMouseEnter={handleCategory}
                        onMouseLeave={handleCategory}
                      >
                        <img
                          className="categoryImg"
                          src={category.image}
                          alt="소고기"
                        />
                        {category.name}
                        {categoryData[index] && idx === Number(index) && (
                          <div className="subCategoryBox">
                            {categoryData[index].subcategory.map(
                              (subcategory, id) => {
                                return (
                                  <div key={id} className="subCategory">
                                    <Link to="/" className="subCategoryLink">
                                      {subcategory.content}
                                    </Link>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>

            {CATEGORYLEFT.map((el, id) => {
              return (
                <li className="categoryLeftLi" key={id}>
                  <Link to="/" className="categoryLeftLink">
                    {el.content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="categoryRight">
          <ul className="categoryRightUl">
            {CATEGORYRIGHT.map((data, id) => {
              return (
                <li className="categoryRightLi" key={id}>
                  <Link to="/" className="categoryRightLink">
                    {data.content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default NavCategory;

const CATEGORYLEFT = [
  { id: 1, content: '할인특가' },
  { id: 2, content: '신상품' },
  { id: 3, content: '베스트' },
  { id: 4, content: '더고기정육관' },
  { id: 5, content: '이달의맛집' },
  { id: 6, content: '7데이' },
  { id: 7, content: '정기식단' },
];
const CATEGORYRIGHT = [
  { id: 1, content: '로그인' },
  { id: 2, content: '회원가입' },
  { id: 3, content: '이벤트/혜택' },
];
