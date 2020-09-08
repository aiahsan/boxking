import React, { useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/home/footer';
import Card from '../components/productListing/productListingCard';
export default () => {
    const [products, setProducts] = useState([{ img: require('../images/tg1.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg1.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg3.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg4.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg2.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg4.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg1.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg3.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg4.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg1.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg3.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }, { img: require('../images/tg2.png'), title: '1000 Broschüren DIN A4 ', head: "Perfect binding135 and 250 g / m² art paper 96 pages with cover " }])
    return <>
        <NavBar />
        <div className="row m-0-0">
         <div className="col-md-4">
         <div className="search-main-bd">
            <div>
                <input className="searchBar" type="text" placeholder="Search.." />
                <i className="fa fa-search searchIcon" aria-hidden="true"></i>
            </div>
            <div>
                <a href="" className="categoryLinks">FoldingCartons</a>
                <a href="" className="categoryLinks">Packagingwith Lids</a>
                <a href="" className="categoryLinks">Gift Packaging</a>
                <a href="" className="categoryLinks">Slipcases</a>
                <a href="" className="categoryLinks">Pillow Boxes And Cardboard Sleeves</a>
                <a href="" className="categoryLinks">Food Safe Packaging</a>
            </div>

        </div>
     
         </div>
     <div className="col-md-8 mdbx-r">
     <div className="box-prd-lty">
     {products.map(x => <div className="box-prd-lty-box">
        <Card img={x.img} head={x.title} title={x.head} />
            </div>)}
 
     </div>
     </div>
         </div>
       <Footer />
    </>
}