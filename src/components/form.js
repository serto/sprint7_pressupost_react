
import React, {useState, useEffect} from 'react';
import Panell from './panell/Panell';
import { ButtonForm } from './button/button.style';
import ListPresu from './listPresus/listPresus';
import { ButtonActionStyle } from './buttonAction/buttonAction.style';
import { SearcherStyle } from './searcher/searcher.style';

const Form = (props) => {

    //valores de la url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const web_urlq = JSON.parse(urlParams.get('projWeb'));
    const seo_urlq = JSON.parse(urlParams.get('projSeo'));
    const ads_urlq = JSON.parse(urlParams.get('projAds'));
    const nPag_urlq = parseInt(urlParams.get('nPagines'));
    const nLang_urlq = parseInt(urlParams.get('nIdiomes'));
    const nPresu_urlq = urlParams.get('nPresu');
    const nClient_urlq = urlParams.get('nClient');

    //valores del local storage
    const webLocSt = JSON.parse(localStorage.getItem("web"));
    const seoLocSt = JSON.parse(localStorage.getItem("seo"));
    const adsLocSt = JSON.parse(localStorage.getItem("ads"));
    const numPagesLocSt = JSON.parse(localStorage.getItem("numPages"));
    const numLangLocSt = JSON.parse(localStorage.getItem("numLang"));
    const namePresuLocSt = JSON.parse(localStorage.getItem("namePresu"));
    const nameClientLocSt = JSON.parse(localStorage.getItem("nameClient"));

    //ternaria de con que valor nos quedamos
    const web_seted = ( web_urlq ? web_urlq : webLocSt);
    const seo_seted = ( seo_urlq ? seo_urlq : seoLocSt);
    const ads_seted = ( ads_urlq ? ads_urlq : adsLocSt);
    const nPages_seted = ( nPag_urlq ? nPag_urlq : numPagesLocSt);
    const nLangs_seted = ( nLang_urlq ? nLang_urlq : numLangLocSt);
    const namePresu_seted = ( nPresu_urlq ? nPresu_urlq : namePresuLocSt);
    const nameClient_seted = ( nClient_urlq ? nClient_urlq : nameClientLocSt);

    console.log('seted : ', nPages_seted)
    console.log('nLangs_seted : ', nPages_seted)

    //seteo de variables
    const [web, setWeb] = useState(web_seted ? web_seted : false);
    const [seo, setSeo] = useState(seo_seted ? seo_seted : false);
    const [ads, setAds] = useState(ads_seted ? ads_seted : false);
    const [numPages, setNumPages] = useState( nPages_seted ? nPages_seted : 1);
    const [numLang, setNumLang] = useState( nLangs_seted ? nLangs_seted : 1);
    const [namePresu, setNamePresu] = useState(namePresu_seted ? namePresu_seted : '');
    const [nameClient, setNameClient] = useState(nameClient_seted ? nameClient_seted : '');

    const [presu, setPresu] = useState(0);
    const prices = [500, 300, 200];

    const arrayPresusLocSt = JSON.parse(localStorage.getItem("arrayPresus"));
    const [arrayPresus, setArrayPresus] = useState(arrayPresusLocSt ? arrayPresusLocSt : []);

    const [viewWebProps, setViewWebProps] = useState(web_urlq ? web_urlq : false); 


    const generateURL = () => {

      const numPagesLoc= JSON.parse(localStorage.getItem("numPages"));
      const numLangsLoc= JSON.parse(localStorage.getItem("numLang"));
      const numPages = (web) ? numPagesLoc : 1;
      const numLangs = (web) ? numLangsLoc : 1;

      const urlGenerated = `/?projWeb=${web}&nPagines=${numPages}&nIdiomes=${numLangs}&projSeo=${seo}&projAds=${ads}&nPresu=${namePresu}&nClient=${nameClient}`;

      window.history.pushState('formPresu', 'FormPresu', urlGenerated);

    }
   
    const handleInputChangeWeb = (event) => {

      setWeb(event.target.checked);
      localStorage.setItem("web", JSON.stringify(event.target.checked));
      
      if (event.target.checked === true) {
        setViewWebProps(true);
      }
      else {
        setViewWebProps(false);
      }      
    }

    const calPrice = (array) => {
      const valueLabels = array.map( (price, key) => {
        
        let value = 0;
        if (key === 0 && web) { value = price; }
        if (key === 1 && seo) { value = price; }
        if (key === 2 && ads) { value = price; }

        return value;
      }).reduce(function(acum, value) { return acum + value; });
      
      let valuePanell = 0;
      if ((numPages >= 2 || numLang>=2)&&(web===true)) {
        valuePanell = numPages * numLang * 30;
      }
      if (numPages === 1 && numLang === 1){
        valuePanell = 0;
      }

      return valueLabels + valuePanell;
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

      const newArray = [...arrayPresus, presuObject];
      localStorage.setItem('arrayPresus', JSON.stringify(newArray));
      setArrayPresus(newArray);

    }

    const updatePages = (value) => {
      localStorage.setItem("numPages", value);
      setNumPages(value);
    }

    const updateLangs = (value) => {
      localStorage.setItem("numLang", value);
      setNumLang(value);
    }

    const orderByName = () => {
      const newOrder = arrayPresus.sort(function(a, b) {
        if (a.namePresu > b.namePresu) {
            return 1;
        }
        if (a.namePresu < b.namePresu) {
            return -1;
        }});
      setArrayPresus([...newOrder]);

    };

    const orderByDate = () => {
      const newOrder = arrayPresus.sort(function(a, b) {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }});

      setArrayPresus([...newOrder]);
    };

    const orderByInit = () => {
      const arrayPresusLocSt = JSON.parse(localStorage.getItem("arrayPresus"));
      setArrayPresus([...arrayPresusLocSt]);
    };

    const handleInputChange = (event) => {

      if (event.target.value) {
        const resultFilter = arrayPresus.map((element) => {
          return (element.namePresu.includes(event.target.value)) ? element : null;
        }).filter(function(element) {
          if(element){
            return element;
          }
        });

        setArrayPresus([...resultFilter]);
      } else {
        const arrayPresusLocSt = JSON.parse(localStorage.getItem("arrayPresus"));
        setArrayPresus([...arrayPresusLocSt]);
      }
    };

    useEffect(() => {

      const priceTotal = calPrice(prices);

      setPresu(priceTotal);
      generateURL();

    },[web, seo, ads, numPages, numLang, namePresu, nameClient, presu]);

    return (
      <>
        <form>

          <label>
            <input
              name="web"
              type="checkbox"
              checked={web}
              onChange={handleInputChangeWeb}
            />
            Una pàgina web (500€)
          </label>
          <Panell 
            nPages={numPages}
            nLangs={numLang}
            active={viewWebProps}
            getNPages={updatePages}
            getNLangs={updateLangs}
          />
          <br />

          <label>
            <input
              name="seo"
              type="checkbox"
              checked={seo}
              onChange={(event) => {
                setSeo(event.target.checked);
                localStorage.setItem("seo", JSON.stringify(event.target.checked));
              }}
            />
            Una consultoria SEO (300€)
          </label>
          <br />

          <label>
            <input
              name="ads"
              type="checkbox"
              checked={ads}
              onChange={(event) => {
                setAds(event.target.checked);
                localStorage.setItem("ads", JSON.stringify(event.target.checked));
              }}
            />
            Una campanya de Google Ads (200€)
          </label>
          <br />     

          <label>
            Nom Pressupost: 
            <input
              name="namePresu"
              type="text"
              value={namePresu}
              onChange={(event) => {
                setNamePresu(event.target.value); 
                localStorage.setItem("namePresu", JSON.stringify(event.target.value));
              }}
            />
          </label> 
          <br />       

          <label>
            Nom Client:
            <input
              name="nameClient"
              type="text"
              value={nameClient}
              onChange={(event) => {
                setNameClient(event.target.value);
                localStorage.setItem("nameClient", JSON.stringify(event.target.value));
              }}
            />
          </label> 
          <br />

          <ButtonForm onClick={savePresu}>Guardar pressupost</ButtonForm>

        </form>    

        <p>Preu: {presu} €</p>

        <br />

      <h2>Llistat de pressupostos</h2>

      <ButtonActionStyle onClick={orderByName}>Ordenar per nom</ButtonActionStyle>
      <ButtonActionStyle onClick={orderByDate}>Ordenar per data</ButtonActionStyle>
      <ButtonActionStyle onClick={orderByInit}>Reinicialitzar llista</ButtonActionStyle>
      <SearcherStyle placeholder="Buscador ..." onChange={handleInputChange}/>

        <ListPresu listPresu={arrayPresus}/>
      </>
    );

}

export default Form;