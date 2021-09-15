import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faHotdog, faBreadSlice, faGlassCheers, faPizzaSlice, faTh, faThList } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Rate, Radio, Space, Input } from 'antd';
import Footer from '../../../layout/footer/footer.js'
import Header from '../../../layout/header/header.js'
import './productpage.css'
import TopBar from '../../../layout/topBar/topBar.js'
// import ProductData from '../../../fakedata.js'
import CardItem from '../../../components/cardItem/cardItem.js'
import { Pagination } from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import {getProductAPI} from '../../../slice/productSlice'

function ProductPage() {
    const [value, setValue] = React.useState(1);
    const [displayStyle, setDisplayStyle] = React.useState("CardItemContentGrid");
    const [title, setTitle] = React.useState("All Food");
    const [filtedData, setFiltedData] = React.useState([]);
    const [showItem, setShowItem] = React.useState([]);

    const dispatch = useDispatch();
    const listProduct=useSelector((state)=>state.products.list);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProductAPI());
    }, [dispatch]);

    React.useEffect(() => {
        setFiltedData(listProduct);
        setShowItem(filtedData.slice(0, 12))
    }, [listProduct]);

    React.useEffect(() => {
        setShowItem(filtedData.slice(0, 12))
    }, [filtedData]);

    const handelPriceRange = (e) => {
        setValue(() => e.target.value)
    };
    const { Search } = Input;
    const onSearchBar = (value) => {
        const matchedItem = [];
        const keyword = value.toLowerCase().split(" ").join('').replace(/[`!@#$%^&*:;-?|"']/g, "");
        listProduct.forEach((item) => {
            let title = item.title.toLowerCase().split(" ").join('');
            if (title.search(keyword) >= 0) { matchedItem.push(item) }
        })
        setFiltedData(() => matchedItem);
    };

    const typeFilter = (type) => {
        let dataType = [];
        switch (type) {
            case "burger":
                dataType = listProduct.filter(item => item.type === "burger"); setTitle(() => "Burgers")
                break;
            case "bread":
                dataType = listProduct.filter(item => item.type === "bread"); setTitle(() => "Breads")
                break;
            case "pizza":
                dataType = listProduct.filter(item => item.type === "pizza"); setTitle(() => "Pizzas")
                break;
            case "sandwich":
                dataType = listProduct.filter(item => item.type === "sandwich"); setTitle(() => "Sandwiches")
                break;
            case "drink":
                dataType = listProduct.filter(item => item.type === "drink"); setTitle(() => "Drinks")
                break;
            default: dataType = [...listProduct]; setTitle(() => "All Food")
                break;
        }
        setFiltedData(() => dataType);
    }
    const priceFilter = (price) => {
        let dataPrice = [];
        switch (price) {
            case 2: dataPrice = listProduct.filter(item => item.price <= 49)
                break;
            case 3: dataPrice = listProduct.filter(item => (item.price > 49 && item.price < 100))
                break;
            case 4: dataPrice = listProduct.filter(item => item.price > 100)
                break;
            default: dataPrice = [...listProduct]; setTitle(() => "All Food")
                break;
        }
        setFiltedData(() => dataPrice);
    };
    const rateFilter = (rate) => {
        let dataRate = [];
        switch (rate) {
            case 5: dataRate = listProduct.filter(item => item.rate === 5)
                break;
            case 4: dataRate = listProduct.filter(item => item.rate === 4)
                break;
            case 3: dataRate = listProduct.filter(item => item.rate <= 3)
                break;
            default: dataRate = [...listProduct]; setTitle(() => "All Food")
                break;
        }
        setFiltedData(() => dataRate);
    }
    const changePage = (page, pageSize) => {
        const start = (page - 1) * pageSize;
        const end = page * pageSize;
        const currentItems = filtedData.slice(start, end);
        setShowItem(() => currentItems);
    }
    return (
        <div className="ProductPage">
            <TopBar />
            <Header title={title} />
            <div className="ProductPageBody">
                <div className="ProductPageSidebar">
                    <div className="ProductSidebarCategories">
                        <div className="ProductSidebarCategoriesTitle">
                            <h2 style={{ fontWeight: "bold" }}>&nbsp;Popular</h2>
                        </div>
                        <div className="ProductSidebarCategoriesItems">
                            <div className="ProductSidebarCategoriesItem" onClick={() => typeFilter("burger")}>
                                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faHamburger} size="lg" />&nbsp;&nbsp;<p>Burgers</p>
                            </div>
                            <div className="ProductSidebarCategoriesItem" onClick={() => typeFilter("bread")}>
                                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faHotdog} size="lg" />&nbsp;&nbsp;<p>Breads</p>
                            </div>
                            <div className="ProductSidebarCategoriesItem" onClick={() => typeFilter("sandwich")}>
                                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faBreadSlice} size="lg" />&nbsp;&nbsp;<p>Sandwiches</p>
                            </div>
                            <div className="ProductSidebarCategoriesItem" onClick={() => typeFilter("drink")}>
                                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faGlassCheers} size="lg" />&nbsp;&nbsp;<p>Drinks</p>
                            </div>
                            <div className="ProductSidebarCategoriesItem" onClick={() => typeFilter("pizza")}>
                                &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faPizzaSlice} size="lg" />&nbsp;&nbsp;<p>Pizzas</p>
                            </div>
                        </div>

                    </div>
                    <div className="ProductSidebarPrice">
                        <div className="ProductSidebarPriceTitle">
                            <h2 style={{ fontWeight: "bold" }}>Price</h2>
                        </div>
                        <div className="ProductSidebarPriceItems">
                            <Radio.Group onChange={(e) => { handelPriceRange(e); priceFilter(e.target.value) }} value={value}>
                                <Space direction="vertical">
                                    <Radio value={1}><span>All</span></Radio>
                                    <Radio value={2}><span>Under 50$</span></Radio>
                                    <Radio value={3}><span>50$-100$</span></Radio>
                                    <Radio value={4}><span>Above 100$</span></Radio>
                                </Space>
                            </Radio.Group>
                        </div>

                    </div>
                    <div className="ProductSidebarRate">
                        <div className="ProductSidebarRateTitle">
                            <h2 style={{ fontWeight: "bold" }}>Rate</h2>
                        </div>
                        <div className="ProductSidebarRateItems">
                            <div className="ProductSidebarRateItem" onClick={() => rateFilter(5)}>
                                <Rate disabled defaultValue={5} />
                            </div>
                            <div className="ProductSidebarRateItem" onClick={() => rateFilter(4)}>
                                <Rate disabled defaultValue={4} />
                            </div>
                            <div className="ProductSidebarRateItem" onClick={() => rateFilter(3)}>
                                <Rate disabled defaultValue={3} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ProductCardContainer">
                    <div className="ProductCardContainerHeader">
                        &nbsp;&nbsp;&nbsp;
                        <Search
                            placeholder="Search your product"
                            allowClear
                            onSearch={onSearchBar}
                            style={{ width: "80%" }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <div className="DisplayStyle"  >
                            <Radio.Group defaultValue="a" buttonStyle="outline">
                                <Radio.Button value="a" >
                                    <FontAwesomeIcon icon={faTh} size="2x" onClick={() => setDisplayStyle("CardItemContentGrid")} />
                                </Radio.Button>
                                <Radio.Button value="b">
                                    <FontAwesomeIcon icon={faThList} size="2x" onClick={() => setDisplayStyle("CardItemContentList")} />
                                </Radio.Button>
                            </Radio.Group>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="ProductCardContainerItems">
                        {showItem.map((product) => {
                            return (
                                <CardItem
                                    displayStyle={displayStyle}
                                    title={product.title}
                                    key={product.id}
                                    id={product.id}
                                    src={product.src}
                                    alt={product.alt}
                                    price={product.price}
                                    rate={product.rate}
                                    description={product.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="Pagination">
                <Pagination
                    total={filtedData.length}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={12}
                    defaultCurrent={1}
                    onChange={changePage}
                />
            </div>
            <Footer />
        </div>
    );
}
export default ProductPage;
