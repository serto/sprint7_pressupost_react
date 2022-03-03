
import React, {useState, useEffect} from 'react';
import Panell from './Panell';
import { ButtonForm } from './button.style';
import ListPresu from './listPresus';

const Form = (props) => {

    const [web, setWeb] = useState(false);
    const [seo, setSeo] = useState(false);
    const [ads, setAds] = useState(false);
    const [namePresu, setNamePresu] = useState('');
    const [nameClient, setNameClient] = useState('');
    const [presu, setPresu] = useState(0);
    const prices = [500, 300, 200];

    const arrayPresusLocSt = JSON.parse(localStorage.getItem("arrayPresus"));
    const [arrayPresus, setArrayPresus] = useState(arrayPresusLocSt ? arrayPresusLocSt : []);

    const [viewWebProps, setViewWebProps] = useState(false); 
    const [panellValue, setPanellValue] = useState(0);

    const handleInputChange = (event) => {

      switch (event.target.name) {
        case 'web':
          setWeb(event.target.checked);
          localStorage.setItem("web", JSON.stringify(event.target.checked));
          break;
        case 'seo':
          setSeo(event.target.checked);
          localStorage.setItem("seo", JSON.stringify(event.target.checked));
          break;
        case 'ads':
          setAds(event.target.checked);
          localStorage.setItem("ads", JSON.stringify(event.target.checked));
          break;
        case 'namePresu':
          setNamePresu(event.target.value); 
          localStorage.setItem("namePresu", JSON.stringify(event.target.value));
          break;
        case 'nameClient':
          setNameClient(event.target.value);
          localStorage.setItem("nameClient", JSON.stringify(event.target.value));
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
      const webLocSt = JSON.parse(localStorage.getItem("web"));
      const seoLocSt = JSON.parse(localStorage.getItem("seo"));
      const adsLocSt = JSON.parse(localStorage.getItem("ads"));

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

      setPresu(priceTotal + panellValue);


    },[web, seo, ads, panellValue, arrayPresus]);

    const updateTotal = (value) => {
      setPanellValue(value);
    }

    const savePresu = (event) => {
      event.preventDefault();

      const date = new Date();
      const dateIso = date.toISOString();
      const numPagesLoc= JSON.parse(localStorage.getItem("numPages"));
      const numLangsLoc= JSON.parse(localStorage.getItem("numLang"));

      const presuObject = {
        web,
        numPages: (web) ? numPagesLoc : 0,
        numLangs: (web) ? numLangsLoc : 0,
        seo,
        ads,
        namePresu,
        nameClient,
        presu,
        date: dateIso
      }

      arrayPresus.push(presuObject);
      localStorage.setItem('arrayPresus', JSON.stringify(arrayPresus));
      setArrayPresus(arrayPresus);

    }

    return (

      <>
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
          <br />     

          <label>
            Nom Pressupost: 
            <input
              name="namePresu"
              type="text"
              onChange={handleInputChange}
            />
          </label> 
          <br />       

          <label>
            Nom Client:
            <input
              name="nameClient"
              type="text"
              onChange={handleInputChange}
            />
          </label> 
          <br />

          <ButtonForm onClick={savePresu}>Guardar pressupost</ButtonForm>

        </form>    

        <p>Preu: {presu} €</p>

        <ListPresu listPresu={arrayPresus}/>
      </>
    );

}

export default Form;