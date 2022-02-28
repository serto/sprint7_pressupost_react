
import React, {useState, useEffect} from 'react';
import Panell from './Panell';

const Form = (props) => {


    const [dades, setDades] = useState({
      web: false,
      seo: false,
      ads: false
    });
    const [viewWebProps, setViewWebProps] = useState(false); 
    const [panellValue, setPanellValue] = useState(0);

    const prices = [500, 300, 200];
  
    const handleInputChange = (event) => {
      
      setDades({
        ...dades,
        [event.target.name] : event.target.checked
      });

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

    useEffect(() => {

      const actives = Object.keys(dades).map((dada) => [dada, dades[dada]]);

      const priceTotal = actives.map((element, key) => {
        return (element[1]==true) ? prices[key]: 0;
      }).reduce(function(acum, value) { return acum + value; });

      const totalPresu = priceTotal + panellValue;


      props.formPresu(totalPresu);

    },[dades, panellValue]);

    const updateTotal = (value) => {
      setPanellValue(value);
    }

  
    return (
      <form>

        <label>
          <input
            name="web"
            type="checkbox"
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
            onChange={handleInputChange}
          />
          Una consultoria SEO (300€)
        </label>
        <br />

        <label>
          <input
            name="ads"
            type="checkbox"
            onChange={handleInputChange}
          />
          Una campanya de Google Ads (200€)
        </label>

      </form>    
    );

}

export default Form;