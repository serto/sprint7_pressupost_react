
import React, {useState, useEffect} from 'react';
import Panell from './Panell';

const Form = (props) => {

    //
    const [web, setWeb] = useState(false);
    const [seo, setSeo] = useState(false);
    const [ads, setAds] = useState(false);
    const prices = [500, 300, 200];

    const [viewWebProps, setViewWebProps] = useState(false); 
    const [panellValue, setPanellValue] = useState(0);

    const handleInputChange = (event) => {

      switch (event.target.name) {
        case 'web':
          setWeb(event.target.checked);
          window.localStorage.setItem("web", JSON.stringify(event.target.checked));
          break;
        case 'seo':
          setSeo(event.target.checked);
          window.localStorage.setItem("seo", JSON.stringify(event.target.checked));
          break;
        case 'ads':
          setAds(event.target.checked);
          window.localStorage.setItem("ads", JSON.stringify(event.target.checked));
          break;
        default:
          break;
      }

      if (event.target.name === 'web') {
        if (event.target.checked === true) {
          setViewWebProps(true);
        }
        else {
          setViewWebProps(false);
          setPanellValue(0);
        }
      }
      
    }

    const calPrice = (array) => {
      return array.map( (price, key) => {
        
        let value = 0;
        if (key === 0 && web) { value = price; }
        if (key === 1 && seo) { value = price; }
        if (key === 2 && ads) { value = price; }

        return value;
      }).reduce(function(acum, value) { return acum + value; });
    }

    useEffect(() => {
      const webLocSt = JSON.parse(window.localStorage.getItem("web"));
      const seoLocSt = JSON.parse(window.localStorage.getItem("seo"));
      const adsLocSt = JSON.parse(window.localStorage.getItem("ads"));

      const webLocSt_value = webLocSt ? webLocSt : false;
      const seoLocSt_value = seoLocSt ? seoLocSt : false;
      const adsLocSt_value = adsLocSt ? adsLocSt : false;

      setWeb(webLocSt_value);
      setSeo(seoLocSt_value);
      setAds(adsLocSt_value);

      if(webLocSt_value === true) {
        setViewWebProps(true);
      }

      const priceTotal = calPrice(prices);

      const totalPresu = priceTotal + panellValue;

      props.formPresu(totalPresu);

    },[web, seo, ads, panellValue]);

    const updateTotal = (value) => {
      setPanellValue(value);
    }

    return (
      <form>

        <label>
          <input
            name="web"
            type="checkbox"
            checked={web}
            onChange={handleInputChange}
          />
          Una pàgina web (500€)
        </label>
        <Panell 
          active={viewWebProps}
          getValue={updateTotal}
        />
        <br />

        <label>
          <input
            name="seo"
            type="checkbox"
            checked={seo}
            onChange={handleInputChange}
          />
          Una consultoria SEO (300€)
        </label>
        <br />

        <label>
          <input
            name="ads"
            type="checkbox"
            checked={ads}
            onChange={handleInputChange}
          />
          Una campanya de Google Ads (200€)
        </label>

      </form>    
    );

}

export default Form;